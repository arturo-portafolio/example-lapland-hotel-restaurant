import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import { chatConfig, siteConfig } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send } from 'lucide-react';
import { Language, translations } from '@/i18n/translations';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isLanguage = (value: unknown): value is Language =>
  value === 'fi' || value === 'es' || value === 'en' || value === 'sv';

const asString = (value: unknown): string | null =>
  typeof value === 'string' ? value : null;

const tForLang = (lang: Language, key: string, fallbackLang: Language): string =>
  translations[lang][key] ?? translations[fallbackLang][key] ?? '';

// Mock responses for when no API is configured
const getMockResponse = (language: Language, question: string): string => {
  const responses: Record<Language, string[]> = {
    fi: [
      'Kiitos kysymyksestäsi! Hotel-Ravintola Laponiassa tarjoamme ainutlaatuisia majoitusvaihtoehtoja arktisessa ympäristössä. Huoneemme on varustettu modernilla mukavuudella ja suomalaisella saunalla.',
      'Ravintolassamme tarjoillaan perinteisiä Lapin herkkuja kuten poronlihaa ja lohta. Suosittelemme kokeilemaan Aurora Borealis -sviittiämme täydelliseen revontulikokemukseen.',
      'Tarjoamme monia aktiviteetteja: husky-safareita, revontuliretkeä ja aitoa suomalaista saunakokemusta. Varaukset voi tehdä suoraan vastaanotosta.',
    ],
    es: [
      '¡Gracias por tu pregunta! En Hotel-Restaurante Laponia ofrecemos alojamientos únicos en el entorno ártico. Nuestras habitaciones están equipadas con comodidades modernas y sauna finlandesa.',
      'Nuestro restaurante sirve delicias tradicionales de Laponia como carne de reno y salmón. Recomendamos probar nuestra Suite Aurora Boreal para una experiencia perfecta de auroras.',
      'Ofrecemos muchas actividades: safaris con huskies, tours de auroras boreales y auténtica experiencia de sauna finlandesa. Las reservas se pueden hacer directamente en recepción.',
    ],
    en: [
      'Thank you for your question! At Hotel-Restaurant Laponia, we offer unique accommodations in an Arctic setting. Our rooms are equipped with modern amenities and Finnish sauna.',
      'Our restaurant serves traditional Lapland delicacies such as reindeer meat and salmon. We recommend trying our Aurora Borealis Suite for a perfect Northern Lights experience.',
      'We offer many activities: husky safaris, Northern Lights tours, and authentic Finnish sauna experience. Reservations can be made directly at reception.',
    ],
    sv: [
      'Tack för din fråga! På Hotel-Restaurang Laponia erbjuder vi unika boenden i en arktisk miljö. Våra rum är utrustade med moderna bekvämligheter och finsk bastu.',
      'Vår restaurang serverar traditionella lappländska delikatesser som renkött och lax. Vi rekommenderar att prova vår Aurora Borealis-svit för en perfekt norrskenupplevelse.',
      'Vi erbjuder många aktiviteter: husky-safari, norrskensjakt och autentisk finsk bastuupplevelse. Bokningar kan göras direkt i receptionen.',
    ],
  };
  
  const langResponses = responses[language];
  return langResponses[Math.floor(Math.random() * langResponses.length)];
};

export const Chatbot = () => {
  const { t, currentLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [chatLocked, setChatLocked] = useState(false);
  const [error, setError] = useState('');
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasShownWelcome) {
      const welcomeMessage: Message = {
        id: 'welcome',
        role: 'assistant',
        content: t('chat.welcome'),
      };
      setMessages([welcomeMessage]);
      setHasShownWelcome(true);
    }
  }, [isOpen, hasShownWelcome, t]);

  // Update welcome message when language changes
  useEffect(() => {
    if (hasShownWelcome && messages.length > 0 && messages[0].id === 'welcome') {
      setMessages(prev => [
        { ...prev[0], content: t('chat.welcome') },
        ...prev.slice(1),
      ]);
    }
  }, [currentLang, t, hasShownWelcome]);

const getRemainingQuestionsMessage = (count: number, lang: Language): string => {
  const remaining = chatConfig.maxQuestionsPerSession - count;

  if (remaining === 3) return tForLang(lang, 'chat.remainingQuestions.3', currentLang as Language);
  if (remaining === 2) return tForLang(lang, 'chat.remainingQuestions.2', currentLang as Language);
  if (remaining === 1) return tForLang(lang, 'chat.remainingQuestions.1', currentLang as Language);
  if (remaining === 0) return tForLang(lang, 'chat.lastAnswerNotice', currentLang as Language);

  return '';
};


  const handleSend = async () => {
    const trimmedInput = input.trim();
    
    if (!trimmedInput) return;
    
    if (trimmedInput.length > chatConfig.maxMessageLength) {
      setError(t('chat.maxLengthError'));
      return;
    }
    
    setError('');
    
    // Check if chat is locked
    if (chatLocked) {
      const lockedMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: t('chat.maxQuestionsReached'),
      };
      setMessages(prev => [...prev, lockedMessage]);
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmedInput,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);

    // Check if this is the last question
    if (newQuestionCount >= chatConfig.maxQuestionsPerSession) {
      setChatLocked(true);
    }

    try {
      // Try to call API endpoint, fallback to mock
      let responseText: string;
      let effectiveLang: Language = isLanguage(currentLang) ? currentLang : 'en';
      
      const apiUrl = 'https://n8n-yl61.onrender.com/webhook/hotel-restaurant-chatbot';
           
      if (apiUrl) {
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              message: trimmedInput,
              language: currentLang,
              source: 'laponia-website',
            }),
          });
          
          if (!response.ok) throw new Error('API error');
          
const dataUnknown: unknown = await response.json();

const apiLang: Language | null =
  isRecord(dataUnknown) && isLanguage(dataUnknown.language)
    ? dataUnknown.language
    : null;

if (apiLang) {
  effectiveLang = apiLang;
}

const apiText: string | null =
  isRecord(dataUnknown)
    ? (asString(dataUnknown.reply) ?? asString(dataUnknown.output))
    : null;

responseText = apiText ?? getMockResponse(effectiveLang, trimmedInput);

        } catch {
          responseText = getMockResponse(effectiveLang, trimmedInput);
        }
      } else {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        responseText = getMockResponse(effectiveLang, trimmedInput);

      }

      // Add remaining questions notice
      responseText += getRemainingQuestionsMessage(newQuestionCount, effectiveLang);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: t('chat.errorMessage'),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isDisabled = isTyping || chatLocked;

  return (
    <>
      {/* Chat Bubble */}
<button
  onClick={() => setIsOpen(true)}
  className={`fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full
              shadow-frost hover:shadow-glow
              hover:scale-105 hover:-translate-y-1
              focus-visible:scale-105 focus-visible:-translate-y-1
              focus-visible:shadow-glow focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-primary/60
              focus-visible:ring-offset-2 focus-visible:ring-offset-background
              transition-all duration-300
              ${isOpen ? 'scale-0' : 'scale-100'}`}
  aria-label="Open chat"
>
  <MessageCircle size={28} />
</button>

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="chat-title"
          className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card rounded-2xl shadow-frost flex flex-col overflow-hidden animate-slide-in-right"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground">
            <h2 id="chat-title" className="font-display font-semibold">
              {t('chat.title')}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              aria-label={t('chat.close')}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-secondary text-secondary-foreground rounded-bl-md'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-2xl rounded-bl-md text-sm">
                  <span className="typing-dots">{t('chat.typing')}</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            {error && (
              <p className="text-destructive text-xs mb-2">{error}</p>
            )}
            <div className={`flex gap-2 ${isDisabled ? 'frost-effect' : ''}`}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chat.inputPlaceholder')}
                disabled={isDisabled}
                maxLength={chatConfig.maxMessageLength}
                rows={1}
                className="flex-1 resize-none p-3 bg-secondary text-secondary-foreground rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed"
              />
              <Button
                onClick={handleSend}
                disabled={isDisabled || !input.trim()}
                size="icon"
                className="bg-primary hover:bg-primary/90 disabled:opacity-50"
              >
                <Send size={18} />
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-right">
              {input.length}/{chatConfig.maxMessageLength}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
