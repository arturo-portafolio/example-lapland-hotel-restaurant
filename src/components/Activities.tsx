import { useTranslation } from '@/i18n/LanguageContext';
import { activities } from '@/data/siteData';
import { Clock } from 'lucide-react';

export const Activities = () => {
  const { t, currentLang } = useTranslation();

  return (
    <section id="activities" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t('activities.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('activities.subtitle')}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={activity.id}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={activity.image}
                alt={activity.translations[currentLang].name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-snow">
                <div className="flex items-center gap-2 text-sm text-snow/80 mb-2">
                  <Clock size={14} />
                  <span>{t('activities.duration')}: {activity.duration}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {activity.translations[currentLang].name}
                </h3>
                <p className="text-snow/80 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {activity.translations[currentLang].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
