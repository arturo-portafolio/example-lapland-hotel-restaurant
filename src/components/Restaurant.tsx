import { useTranslation } from '@/i18n/LanguageContext';
import { dishes } from '@/data/siteData';
import { Clock } from 'lucide-react';

export const Restaurant = () => {
  const { t, currentLang } = useTranslation();

  return (
    <section id="restaurant" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t('restaurant.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('restaurant.subtitle')}
          </p>
        </div>

        {/* Restaurant Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('restaurant.description')}
            </p>
            
            <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
              <Clock className="text-primary" size={24} />
              <div>
                <div className="font-medium text-foreground">{t('restaurant.hours')}</div>
                <div className="text-muted-foreground">{t('restaurant.hoursValue')}</div>
              </div>
            </div>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-frost">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dishes */}
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={dish.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-frost transition-all duration-300 group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.translations[currentLang].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {dish.translations[currentLang].name}
                  </h3>
                  <span className="font-display text-xl font-bold text-primary whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  {dish.translations[currentLang].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
