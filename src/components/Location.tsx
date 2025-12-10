import { useTranslation } from '@/i18n/LanguageContext';
import { siteConfig } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export const Location = () => {
  const { t, currentLang } = useTranslation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsapp.defaultMessage'));
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t('location.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-frost">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.8701894755692!2d25.847167!3d66.5436542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x442b4b5a0a5d6b1d%3A0x9b4c6e5e5e5e5e5e!2sRovaniemi%2C%20Finland!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Laponia Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-xl">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">{t('location.address')}</div>
                <div className="text-muted-foreground">{siteConfig.baseLocation}</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-xl">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">{t('location.phone')}</div>
                <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-xl">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">{t('location.email')}</div>
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
            >
              <MessageCircle size={20} />
              {t('location.whatsapp')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
