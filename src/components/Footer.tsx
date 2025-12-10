import { useTranslation } from '@/i18n/LanguageContext';
import { Facebook, Instagram, Twitter } from 'lucide-react';

// TikTok icon (not available in lucide-react)
const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'facebook', href: 'https://facebook.com/laponia-demo', icon: Facebook },
    { name: 'instagram', href: 'https://instagram.com/laponia-demo', icon: Instagram },
    { name: 'tiktok', href: 'https://tiktok.com/@laponia-demo', icon: TikTokIcon },
    { name: 'twitter', href: 'https://twitter.com/laponia-demo', icon: Twitter },
  ];

  return (
    <footer className="bg-midnight text-snow">
      {/* Main content block */}
      <div className="py-12 px-4">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col items-center text-center gap-4">
            {/* Hotel name */}
            <div className="font-display text-2xl font-semibold">
              {t('footer.hotelName')}
            </div>
            
            {/* Tagline */}
            <p className="text-snow/70 text-sm max-w-md">
              {t('footer.tagline')}
            </p>
            
            {/* Social media icons */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(`footer.social.${social.name}`)}
                    className="text-snow/70 hover:text-snow transition-colors p-2 hover:bg-snow/10 rounded-full"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-snow/20 py-4 px-4">
        <div className="container-narrow mx-auto">
          <p className="text-snow/60 text-sm text-center">
            © {currentYear} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
