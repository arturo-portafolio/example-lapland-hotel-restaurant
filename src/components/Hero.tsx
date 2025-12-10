import { useTranslation } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight/70" />
      
      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-aurora-green/20 via-transparent to-aurora-purple/20 animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-snow mb-6 tracking-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-snow/90 mb-10 font-light max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-frost"
          >
            {t('hero.cta')}
          </Button>
          <Button 
            size="lg" 
            className="bg-snow/20 border-2 border-snow text-snow hover:bg-snow hover:text-midnight px-8 py-6 text-lg font-medium backdrop-blur-sm"
          >
            {t('hero.explore')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-snow/70 hover:text-snow transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};
