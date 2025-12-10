import { useTranslation } from '@/i18n/LanguageContext';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-frost">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800"
                alt="Hotel Laponia"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-aurora rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground mt-1">Rooms</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground mt-1">Activities</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground mt-1">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
