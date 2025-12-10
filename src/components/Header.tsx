import { useTranslation } from '@/i18n/LanguageContext';
import { Language, languageNames } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { t, currentLang, setLang } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const languages: Language[] = ['fi', 'es', 'en', 'sv'];

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'rooms', href: '#rooms' },
    { key: 'restaurant', href: '#restaurant' },
    { key: 'activities', href: '#activities' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container-narrow mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-display text-lg md:text-xl font-semibold text-primary">
            {t('header.logo')}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-secondary rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  aria-pressed={currentLang === lang}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                    currentLang === lang
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>
            
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-1 mt-4 pt-4 border-t border-border">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLang(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                    currentLang === lang
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
