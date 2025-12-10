import { useState } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Language, languageNames } from '@/i18n/translations';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

export const Newsletter = () => {
  const { t, currentLang } = useTranslation();
  const [sendCount, setSendCount] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [maxReached, setMaxReached] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    language: currentLang,
    humanCheck: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('newsletter.nameError');
    }
    
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = t('newsletter.emailError');
    }
    
    if (!formData.humanCheck) {
      newErrors.humanCheck = t('newsletter.humanCheckError');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (sendCount >= 3) {
      setMaxReached(true);
      return;
    }
    
    if (!validate()) return;
    
    setIsSending(true);
    setSuccess(false);
    
    // Simulate sending delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
    
    setSendCount(prev => prev + 1);
    setIsSending(false);
    setSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      interest: '',
      language: currentLang,
      humanCheck: false,
    });
    
    // Hide success after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              {t('newsletter.title')}
            </h2>
            <p className="text-primary-foreground/80">
              {t('newsletter.subtitle')}
            </p>
          </div>

          {/* Max Sends Reached Message */}
          {maxReached && (
            <div className="mb-6 p-4 bg-primary-foreground/10 rounded-xl flex items-start gap-3">
              <AlertCircle className="text-primary-foreground flex-shrink-0 mt-0.5" size={20} />
              <p className="text-primary-foreground text-sm">
                {t('newsletter.maxSendsReached')}
              </p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-aurora-green/20 rounded-xl flex items-start gap-3 animate-fade-in">
              <CheckCircle className="text-primary-foreground flex-shrink-0 mt-0.5" size={20} />
              <p className="text-primary-foreground text-sm">
                {t('newsletter.success')}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary-foreground">
                  {t('newsletter.nameLabel')}
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('newsletter.namePlaceholder')}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                {errors.name && (
                  <p className="text-primary-foreground/90 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary-foreground">
                  {t('newsletter.emailLabel')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('newsletter.emailPlaceholder')}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                {errors.email && (
                  <p className="text-primary-foreground/90 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Interest */}
              <div className="space-y-2">
                <Label className="text-primary-foreground">
                  {t('newsletter.interestLabel')}
                </Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                >
                  <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">{t('newsletter.interestHotel')}</SelectItem>
                    <SelectItem value="restaurant">{t('newsletter.interestRestaurant')}</SelectItem>
                    <SelectItem value="all">{t('newsletter.interestAll')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Language */}
              <div className="space-y-2">
                <Label className="text-primary-foreground">
                  {t('newsletter.languageLabel')}
                </Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => setFormData({ ...formData, language: value as Language })}
                >
                  <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languageNames).map(([code, name]) => (
                      <SelectItem key={code} value={code}>{name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Human Check */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="humanCheck"
                  checked={formData.humanCheck}
                  onCheckedChange={(checked) => setFormData({ ...formData, humanCheck: !!checked })}
                  className="border-primary-foreground/30 data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary"
                />
                <Label htmlFor="humanCheck" className="text-primary-foreground cursor-pointer">
                  {t('newsletter.humanCheckLabel')}
                </Label>
              </div>
              {errors.humanCheck && (
                <p className="text-primary-foreground/90 text-sm">{errors.humanCheck}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={isSending || maxReached}
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 disabled:opacity-50 gap-2"
            >
              {isSending ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  {t('newsletter.sending')}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {t('newsletter.submit')}
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
