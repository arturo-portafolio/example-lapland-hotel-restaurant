import { useTranslation } from '@/i18n/LanguageContext';
import { rooms } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { Users, Wifi, Coffee, Flame } from 'lucide-react';
import { RoomBookingDialog } from '@/components/RoomBookingDialog';


const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  breakfast: Coffee,
  fireplace: Flame,
};

export const Rooms = () => {
  const { t, currentLang } = useTranslation();

  return (
    <section id="rooms" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t('rooms.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-frost transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.translations[currentLang].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {room.translations[currentLang].name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {room.translations[currentLang].description}
                </p>

                {/* Capacity */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users size={16} />
                  <span>{room.capacity} {t('rooms.guests')}</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="font-display text-2xl font-bold text-primary">
                      €{room.pricePerNight}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t('rooms.perNight')}
                    </span>
                  </div>
{/* Ahora: botón + dialog de reserva */}
<RoomBookingDialog room={room} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
