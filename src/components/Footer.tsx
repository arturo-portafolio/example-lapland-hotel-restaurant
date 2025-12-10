import { useTranslation } from '@/i18n/LanguageContext';
import { siteConfig } from '@/data/siteData';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-snow py-12 px-4">
      <div className="container-narrow mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="font-display text-2xl font-semibold mb-2">
              {siteConfig.hotelName}
            </div>
            <p className="text-snow/70 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-snow/60 text-sm">
            © {currentYear} {siteConfig.hotelName}. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};
