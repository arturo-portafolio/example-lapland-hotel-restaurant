// src/components/RoomBookingDialog.tsx
import { useState } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import type { Room } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
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
    guests: room.capacity.toString(),
    date: '',
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (locked || isSending) return;

    // validaciones básicas
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !validateEmail(formData.email) ||
      !formData.date
    ) {
      return;
    }

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
      <DialogContent className="sm:max-w-lg w-[95vw] max-h-[90vh] bg-card rounded-2xl p-0 overflow-hidden">
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
          className="px-6 pt-4 pb-5 space-y-4 max-h-[70vh] overflow-y-auto"
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="booking-guests">{t('rooms.guests')}</Label>
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
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-date">{t('booking.dateLabel')}</Label>
              <div className="relative w-full">
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
                  className="w-full booking-date-input"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">
                    {formData.date || 'YYYY-MM-DD'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {success && (
            <div className="mt-2 rounded-xl bg-aurora-green/20 px-3 py-2 text-sm text-foreground">
              {t('newsletter.success')}
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
      </DialogContent>
    </Dialog>
  );
};
