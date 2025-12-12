// src/components/RoomBookingDialog.tsx
import { useState } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import type { Room } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';

interface RoomBookingDialogProps {
  room: Room;
}

export const RoomBookingDialog = ({ room }: RoomBookingDialogProps) => {
  const { t, currentLang } = useTranslation();

  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [locked, setLocked] = useState(false);

const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  guests: room.capacity.toString(),
  checkIn: '',
  checkOut: '',
});

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('newsletter.nameError');
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = t('newsletter.emailError');
    }

    if (!formData.guests || Number(formData.guests) < 1) {
      newErrors.guests = t('booking.guestsError');
    }

if (!formData.checkIn || !formData.checkOut) {
  newErrors.date = t('booking.dateError');
} else if (formData.checkOut <= formData.checkIn) {
  newErrors.date = t('booking.dateError');
}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (locked || isSending) return;

if (!validate()) return;


    setIsSending(true);
    setSuccess(false);

    // simulamos envío
    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 400),
    );

    setIsSending(false);
    setSuccess(true);
    setLocked(true); // bloquea inputs y botón
  };

  const disabled = locked || isSending;

  const today = new Date();
const minDate = today.toISOString().split('T')[0];

const maxDateObj = new Date(today);
maxDateObj.setFullYear(maxDateObj.getFullYear() + 5);
const maxDate = maxDateObj.toISOString().split('T')[0];
  const minCheckOutDate = formData.checkIn || minDate;
    const changeGuests = (delta: number) => {
    setFormData((prev) => {
      const current = Number(prev.guests) || 1;
      let next = current + delta;
      if (next < 1) next = 1;
      if (next > room.capacity) next = room.capacity;
      return { ...prev, guests: String(next) };
    });
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Botón "Reservar" de la tarjeta */}
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90"
        >
          {t('rooms.book')}
        </Button>
      </DialogTrigger>

      {/* Dialog centrado, responsive y con scroll interno */}
      <DialogContent className="sm:max-w-lg w-[95vw] max-h-[95vh] bg-card rounded-2xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-3 border-b border-border">
          <DialogTitle className="font-display text-xl">
            {t('rooms.book')} – {room.translations[currentLang].name}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            €{room.pricePerNight} {t('rooms.perNight')}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="px-6 pt-4 pb-5 space-y-4 max-h-[80vh] overflow-y-auto"
        >
          <div className="space-y-2">
            <Label htmlFor="booking-name">{t('newsletter.nameLabel')}</Label>
            <Input
              id="booking-name"
              value={formData.name}
              disabled={disabled}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-600 text-sm">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-email">{t('newsletter.emailLabel')}</Label>
            <Input
              id="booking-email"
              type="email"
              value={formData.email}
              disabled={disabled}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
                      {errors.email && (
              <p className="text-red-600 text-sm">
                {errors.email}
              </p>
            )}
          </div>

<div className="grid grid-cols-2 gap-4">
  {/* Teléfono / WhatsApp */}
  <div className="space-y-2">
    <Label htmlFor="booking-phone">{t('location.phone')}</Label>
    <Input
      id="booking-phone"
      type="tel"
      value={formData.phone}
      disabled={disabled}
      onChange={(e) =>
        setFormData({ ...formData, phone: e.target.value })
      }
    />
    {/* (opcional) aquí podrías poner errors.phone si luego quieres validar */}
  </div>

  {/* Huéspedes */}
  <div className="space-y-2">
    <Label htmlFor="booking-guests">{t('rooms.guests')}</Label>

    {/* Contenedor del input + flechas internas */}
    <div className="relative">
      <Input
        id="booking-guests"
        type="number"
        min={1}
        max={room.capacity}
        value={formData.guests}
        disabled={disabled}
        onChange={(e) =>
          setFormData({ ...formData, guests: e.target.value })
        }
        onKeyDown={(e) => e.preventDefault()}
        onPaste={(e) => e.preventDefault()}
        className="pr-10 booking-guests-input"
      />

      {/* Flechas personalizadas "dentro" del input */}
      <div className="absolute inset-y-0 right-1 flex flex-col justify-center py-1">
        <button
          type="button"
          onClick={() => changeGuests(1)}
          disabled={disabled || Number(formData.guests) >= room.capacity}
          className="text-xs leading-none px-1 rounded hover:bg-muted disabled:opacity-50"
        >
          ▲
        </button>
        <button
          type="button"
          onClick={() => changeGuests(-1)}
          disabled={disabled || Number(formData.guests) <= 1}
          className="text-xs leading-none px-1 rounded hover:bg-muted disabled:opacity-50 mt-0.5"
        >
          ▼
        </button>
      </div>
    </div>

    {errors.guests && (
      <p className="text-red-600 text-sm">
        {errors.guests}
      </p>
    )}
  </div>

  {/* Fecha de entrada */}
  <div className="space-y-2">
    <Label htmlFor="booking-checkin">{t('booking.checkInLabel')}</Label>
    <Input
      id="booking-checkin"
      type="date"
      value={formData.checkIn}
      disabled={disabled}
      min={minDate}
      max={maxDate}
      onChange={(e) => {
        const newCheckIn = e.target.value;
        setFormData((prev) => ({
          ...prev,
          checkIn: newCheckIn,
          checkOut:
            prev.checkOut && prev.checkOut < newCheckIn ? '' : prev.checkOut,
        }));
      }}
      onKeyDown={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker?.()}
      className="w-full text-center text-xs sm:text-sm md:text-base booking-date-input"
    />
  </div>

  {/* Fecha de salida */}
            <div className="space-y-2">
              <Label htmlFor="booking-date">{t('booking.dateLabel')}</Label>
<Input
  id="booking-date"
  type="date"
  value={formData.date}
  disabled={disabled}
  min={minDate}
  max={maxDate}
  onChange={(e) =>
    setFormData({ ...formData, date: e.target.value })
  }
  onKeyDown={(e) => e.preventDefault()}
  onPaste={(e) => e.preventDefault()}
  onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker?.()}
  className="w-full text-center text-xs sm:text-sm md:text-base booking-date-input"
/>
              {errors.date && (
                <p className="text-red-600 text-sm">
                  {errors.date}
                </p>
              )}
            </div>
          </div>

          {success && (
            <div className="mt-2 rounded-xl bg-aurora-green/20 px-3 py-2 text-sm text-foreground">
                  <CheckCircle className="inline mr-2" size={16} />
              {t('booking.success')}
            </div>
          )}

          {/* Botones inferiores */}
          <div className="flex justify-end gap-3 pt-3 border-t border-border">
<Button type="button" variant="outline" onClick={() => setOpen(false)}>
  {t('booking.close')}
</Button>
            <Button
              type="submit"
              disabled={disabled}
              className="bg-primary hover:bg-primary/90"
            >
              {isSending ? t('newsletter.sending') : t('rooms.book')}
            </Button>
          </div>
        </form>
<style>{`
  input.booking-guests-input::-webkit-outer-spin-button,
  input.booking-guests-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input.booking-guests-input {
    -moz-appearance: textfield;
  }
  input.booking-date-input::-webkit-calendar-picker-indicator {
    position: relative;
    right: 4px; /* mueve la flechita un poco hacia la izquierda */
  }
`}</style>
      </DialogContent>
    </Dialog>
  );
};
