export type Language = 'fi' | 'es' | 'en' | 'sv';

export const translations: Record<Language, Record<string, string>> = {
  fi: {
    // Header
    'nav.about': 'Tietoa meistä',
    'nav.rooms': 'Huoneet',
    'nav.restaurant': 'Ravintola',
    'nav.activities': 'Aktiviteetit',
    'nav.contact': 'Yhteystiedot',
    
    // Hero
    'hero.title': 'Hotel-Ravintola Lappi',
    'hero.subtitle': 'Koe arktinen taika Suomen Lapissa',
    'hero.cta': 'Varaa nyt',
    'hero.explore': 'Tutustu lisää',
    
    
    // About
    'about.title': 'Tervetuloa Laponiaan',
    'about.description': 'Hotel-Ravintola Lappi sijaitsee keskellä lumoavaa Lapin maisemaa Rovaniemellä. Tarjoamme ainutlaatuisen yhdistelmän skandinaavista luksusta, perinteistä suomalaista vieraanvaraisuutta ja unohtumattomia arktisia elämyksiä. Olipa kyseessä revontulten ihailu, husky-safari tai rentouttava hetki aidossa suomalaisessa saunassa, meillä on kaikki mitä tarvitset täydelliseen Lapin lomaan.',
    
    // Rooms
    'rooms.title': 'Huoneemme',
    'rooms.subtitle': 'Löydä täydellinen majoitus arktiselle seikkailullesi',
    'rooms.perNight': '/ yö',
    'rooms.guests': 'vierasta',
    'rooms.book': 'Varaa',
    'booking.dateLabel': 'Päivämäärä',
    'booking.checkInLabel': 'Saapumispäivä',  
    'booking.checkOutLabel': 'Lähtöpäivä', 
    'booking.close': 'Sulje',
    'booking.success': 'Varauspyyntösi on lähetetty! Otamme sinuun pian yhteyttä vahvistaaksemme varauksesi.',
    'booking.dateError': 'Valitse varauksen päivämäärä.',
    
    // Restaurant
    'restaurant.title': 'Ravintola',
    'restaurant.subtitle': 'Maista Lapin makuja',
    'restaurant.description': 'Ravintolassamme tarjoillaan parhaita pohjoisen herkkuja paikallisista raaka-aineista valmistettuna. Koe autenttinen Lapin keittiö upeassa arktisessa miljöössä.',
    'restaurant.hours': 'Aukioloajat',
    'restaurant.hoursValue': 'Ma-Su: 18:00 - 22:00',
    
    // Activities
    'activities.title': 'Aktiviteetit',
    'activities.subtitle': 'Koe ainutlaatuisia arktisia elämyksiä',
    'activities.duration': 'Kesto',
    
    // Location
    'location.title': 'Sijainti & Yhteystiedot',
    'location.address': 'Osoite',
    'location.phone': 'Puhelin',
    'location.email': 'Sähköposti',
    'location.whatsapp': 'Ota yhteyttä WhatsAppilla',
    
    // Newsletter
    'newsletter.title': 'Uutiskirje',
    'newsletter.subtitle': 'Tilaa uutiskirjeemme ja saat tarjouksia ja uutisia Lapista',
    'newsletter.nameLabel': 'Nimi',
    'newsletter.namePlaceholder': 'Kirjoita nimesi',
    'newsletter.emailLabel': 'Sähköposti',
    'newsletter.emailPlaceholder': 'sinun@email.com',
    'newsletter.interestLabel': 'Kiinnostuksen kohde',
    'newsletter.interestHotel': 'Vain hotelli',
    'newsletter.interestRestaurant': 'Vain ravintola',
    'newsletter.interestAll': 'Hotelli + Aktiviteetit',
    'newsletter.languageLabel': 'Kieli',
    'newsletter.humanCheckLabel': 'Vahvistan olevani ihminen',
    'newsletter.submit': 'Tilaa',
    'newsletter.sending': 'Lähetetään...',
    'newsletter.success': 'Kiitos tilauksestasi! Saat pian vahvistusviestin.',
    'newsletter.nameError': 'Nimi on pakollinen.',
    'newsletter.emailError': 'Anna kelvollinen sähköpostiosoite.',
    'newsletter.humanCheckError': 'Vahvista olevasi ihminen.',
    'newsletter.maxSendsReached': 'Olet saavuttanut enimmäismäärän (3) lähetyksiä. Lataa sivu uudelleen kokeillaksesi uudelleen.',
    'newsletter.interestError': 'Valitse kiinnostuksen kohde.',
    
    // Chat
    'chat.title': 'Lapin Assistentti',
    'chat.welcome': 'Tervetuloa Hotel-Ravintola Laponian assistenttiin! 🌟\n\nVoin auttaa sinua:\n• Huoneiden ja varausten tiedusteluissa\n• Ravintolan ja ruokalistan kysymyksissä\n• Aktiviteettien ja elämysten suunnittelussa\n• Yleistiedoissa Lapista\n\nSinulla on käytettävissäsi 4 kysymystä tässä istunnossa. Kuinka voin auttaa?',
    'chat.inputPlaceholder': 'Kirjoita kysymyksesi...',
    'chat.send': 'Lähetä',
    'chat.typing': 'Kirjoittaa',
    'chat.remainingQuestions.3': '\n\n📝 Sinulla on vielä 3 kysymystä jäljellä.',
    'chat.remainingQuestions.2': '\n\n📝 Sinulla on vielä 2 kysymystä jäljellä.',
    'chat.remainingQuestions.1': '\n\n📝 Sinulla on vielä 1 kysymys jäljellä.',
    'chat.lastAnswerNotice': '\n\n⚠️ Tämä oli viimeinen kysymyksesi. Lisätietoja saat ottamalla yhteyttä WhatsAppilla tai sähköpostitse.',
    'chat.maxQuestionsReached': 'Olet käyttänyt kaikki 4 kysymystäsi tässä istunnossa. Lisätietoja saat:\n\n📱 WhatsApp: +358 40 123 4567\n📧 Sähköposti: info@laponia-demo.com\n\nKiitos kiinnostuksestasi Hotel-Ravintola Laponiaa kohtaan!',
    'chat.maxLengthError': 'Viesti voi olla enintään 300 merkkiä pitkä',
    'chat.errorMessage': 'Pahoittelut, tapahtui virhe. Ole hyvä ja ota yhteyttä WhatsAppilla tai sähköpostitse.',
    'chat.close': 'Sulje chat',
    
    // WhatsApp
    'whatsapp.defaultMessage': 'Hei! Olen kiinnostunut Hotel-Ravintola Laponiasta ja haluaisin lisätietoja.',
    
    // Header
    'header.logo': 'Lappi',
    
    // Footer
    'footer.hotelName': 'Hotelli-Ravintola Laponia',
    'footer.tagline': 'Koe arktinen taika Suomen Lapissa',
    'footer.copyright': 'Hotel-Ravintola Lappi. Kaikki oikeudet pidätetään.',
    'footer.social.facebook': 'Facebook-linkki',
    'footer.social.instagram': 'Instagram-linkki',
    'footer.social.tiktok': 'TikTok-linkki',
    'footer.social.twitter': 'Twitter-linkki',
  },
  
  es: {
    // Header
    'nav.about': 'Sobre nosotros',
    'nav.rooms': 'Habitaciones',
    'nav.restaurant': 'Restaurante',
    'nav.activities': 'Actividades',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Hotel-Restaurante Laponia',
    'hero.subtitle': 'Vive la magia ártica en la Laponia finlandesa',
    'hero.cta': 'Reservar ahora',
    'hero.explore': 'Explorar más',
    
    // About
    'about.title': 'Bienvenido a Laponia',
    'about.description': 'Hotel-Restaurante Laponia está ubicado en el corazón del encantador paisaje de Laponia, en Rovaniemi. Ofrecemos una combinación única de lujo escandinavo, hospitalidad finlandesa tradicional y experiencias árticas inolvidables. Ya sea contemplando las auroras boreales, disfrutando de un safari con huskies o relajándote en una auténtica sauna finlandesa, tenemos todo lo que necesitas para unas vacaciones perfectas en Laponia.',
    
    // Rooms
    'rooms.title': 'Nuestras Habitaciones',
    'rooms.subtitle': 'Encuentra el alojamiento perfecto para tu aventura ártica',
    'rooms.perNight': '/ noche',
    'rooms.guests': 'huéspedes',
    'rooms.book': 'Reservar',
    'booking.dateLabel': 'Fecha',
    'booking.checkInLabel': 'Fecha de entrada',   // nuevo
    'booking.checkOutLabel': 'Fecha de salida',   // nuevo
    'booking.close': 'Cerrar',
    'booking.success': 'Tu solicitud de reserva ha sido enviada. Nos pondremos en contacto contigo en breve para confirmar tu reserva.',
    'booking.dateError': 'La fecha de la reserva es obligatoria.',
    
    // Restaurant
    'restaurant.title': 'Restaurante',
    'restaurant.subtitle': 'Saborea los sabores de Laponia',
    'restaurant.description': 'Nuestro restaurante sirve las mejores delicias del norte, preparadas con ingredientes locales. Experimenta la auténtica cocina lapona en un impresionante ambiente ártico.',
    'restaurant.hours': 'Horario',
    'restaurant.hoursValue': 'Lun-Dom: 18:00 - 22:00',
    
    // Activities
    'activities.title': 'Actividades',
    'activities.subtitle': 'Vive experiencias árticas únicas',
    'activities.duration': 'Duración',
    
    // Location
    'location.title': 'Ubicación y Contacto',
    'location.address': 'Dirección',
    'location.phone': 'Teléfono',
    'location.email': 'Correo',
    'location.whatsapp': 'Contactar por WhatsApp',
    
    // Newsletter
    'newsletter.title': 'Boletín',
    'newsletter.subtitle': 'Suscríbete para recibir ofertas y noticias de Laponia',
    'newsletter.nameLabel': 'Nombre',
    'newsletter.namePlaceholder': 'Tu nombre',
    'newsletter.emailLabel': 'Correo electrónico',
    'newsletter.emailPlaceholder': 'tu@email.com',
    'newsletter.interestLabel': 'Interés principal',
    'newsletter.interestHotel': 'Solo hotel',
    'newsletter.interestRestaurant': 'Solo restaurante',
    'newsletter.interestAll': 'Hotel + Actividades',
    'newsletter.languageLabel': 'Idioma',
    'newsletter.humanCheckLabel': 'Confirmo que soy humano',
    'newsletter.submit': 'Suscribirse',
    'newsletter.sending': 'Enviando...',
    'newsletter.success': '¡Gracias por suscribirte! Recibirás pronto un mensaje de confirmación.',
    'newsletter.nameError': 'El nombre es obligatorio.',
    'newsletter.emailError': 'Introduce un correo electrónico válido.',
    'newsletter.humanCheckError': 'Confirma que eres humano.',
    'newsletter.maxSendsReached': 'Has alcanzado el máximo de 3 envíos. Recarga la página para intentarlo de nuevo.',
    'newsletter.interestError': 'Selecciona una opción de interés.',
    
    // Chat
    'chat.title': 'Asistente de Laponia',
    'chat.welcome': '¡Bienvenido al asistente de Hotel-Restaurante Laponia! 🌟\n\nPuedo ayudarte con:\n• Información sobre habitaciones y reservas\n• Preguntas sobre el restaurante y el menú\n• Planificación de actividades y experiencias\n• Información general sobre Laponia\n\nTienes 4 preguntas disponibles en esta sesión. ¿Cómo puedo ayudarte?',
    'chat.inputPlaceholder': 'Escribe tu pregunta...',
    'chat.send': 'Enviar',
    'chat.typing': 'Escribiendo',
    'chat.remainingQuestions.3': '\n\n📝 Te quedan 3 preguntas.',
    'chat.remainingQuestions.2': '\n\n📝 Te quedan 2 preguntas.',
    'chat.remainingQuestions.1': '\n\n📝 Te queda 1 pregunta.',
    'chat.lastAnswerNotice': '\n\n⚠️ Esta fue tu última pregunta. Para más información, contáctanos por WhatsApp o correo electrónico.',
    'chat.maxQuestionsReached': 'Has utilizado tus 4 preguntas en esta sesión. Para más información:\n\n📱 WhatsApp: +358 40 123 4567\n📧 Correo: info@laponia-demo.com\n\n¡Gracias por tu interés en Hotel-Restaurante Laponia!',
    'chat.maxLengthError': 'El mensaje no puede superar los 300 caracteres',
    'chat.errorMessage': 'Lo sentimos, ha ocurrido un error. Por favor, contáctanos por WhatsApp o correo electrónico.',
    'chat.close': 'Cerrar chat',
    
    // WhatsApp
    'whatsapp.defaultMessage': '¡Hola! Estoy interesado en Hotel-Restaurante Laponia y me gustaría más información.',
    
    // Header
    'header.logo': 'Laponia',
    
    // Footer
    'footer.hotelName': 'Hotel-Restaurante Laponia',
    'footer.tagline': 'Vive la magia ártica en la Laponia finlandesa',
    'footer.copyright': 'Hotel-Restaurante Laponia. Todos los derechos reservados.',
    'footer.social.facebook': 'Enlace a Facebook',
    'footer.social.instagram': 'Enlace a Instagram',
    'footer.social.tiktok': 'Enlace a TikTok',
    'footer.social.twitter': 'Enlace a Twitter',
  },
  
  en: {
    // Header
    'nav.about': 'About Us',
    'nav.rooms': 'Rooms',
    'nav.restaurant': 'Restaurant',
    'nav.activities': 'Activities',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Lapland Hotel-Restaurant',
    'hero.subtitle': 'Experience Arctic Magic in Finnish Lapland',
    'hero.cta': 'Book Now',
    'hero.explore': 'Explore More',
    
    // About
    'about.title': 'Welcome to Laponia',
    'about.description': 'Lapland Hotel-Restaurant is located in the heart of the enchanting Lapland landscape in Rovaniemi. We offer a unique combination of Scandinavian luxury, traditional Finnish hospitality, and unforgettable Arctic experiences. Whether you\'re watching the Northern Lights, enjoying a husky safari, or relaxing in an authentic Finnish sauna, we have everything you need for a perfect Lapland vacation.',
    
    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Find the perfect accommodation for your Arctic adventure',
    'rooms.perNight': '/ night',
    'rooms.guests': 'guests',
    'rooms.book': 'Book',
    'booking.dateLabel': 'Date',
    'booking.checkInLabel': 'Check-in date',    // nuevo
    'booking.checkOutLabel': 'Check-out date',  // nuevo
    'booking.close': 'Close',
    'booking.success': 'Your booking request has been sent! We will contact you shortly to confirm your reservation.',
    'booking.dateError': 'Please select a booking date.',
    
    // Restaurant
    'restaurant.title': 'Restaurant',
    'restaurant.subtitle': 'Taste the Flavors of Lapland',
    'restaurant.description': 'Our restaurant serves the finest northern delicacies prepared with local ingredients. Experience authentic Lapland cuisine in a stunning Arctic setting.',
    'restaurant.hours': 'Opening Hours',
    'restaurant.hoursValue': 'Mon-Sun: 6:00 PM - 10:00 PM',
    
    // Activities
    'activities.title': 'Activities',
    'activities.subtitle': 'Experience unique Arctic adventures',
    'activities.duration': 'Duration',
    
    // Location
    'location.title': 'Location & Contact',
    'location.address': 'Address',
    'location.phone': 'Phone',
    'location.email': 'Email',
    'location.whatsapp': 'Contact via WhatsApp',
    
    // Newsletter
    'newsletter.title': 'Newsletter',
    'newsletter.subtitle': 'Subscribe to receive offers and news from Lapland',
    'newsletter.nameLabel': 'Name',
    'newsletter.namePlaceholder': 'Your name',
    'newsletter.emailLabel': 'Email',
    'newsletter.emailPlaceholder': 'your@email.com',
    'newsletter.interestLabel': 'Main Interest',
    'newsletter.interestHotel': 'Hotel only',
    'newsletter.interestRestaurant': 'Restaurant only',
    'newsletter.interestAll': 'Hotel + Activities',
    'newsletter.languageLabel': 'Language',
    'newsletter.humanCheckLabel': 'I confirm I am human',
    'newsletter.submit': 'Subscribe',
    'newsletter.sending': 'Sending...',
    'newsletter.success': 'Thank you for subscribing! You will receive a confirmation message soon.',
    'newsletter.nameError': 'Name is required.',
    'newsletter.emailError': 'Please enter a valid email address.',
    'newsletter.humanCheckError': 'Please confirm you are human.',
    'newsletter.maxSendsReached': 'You have reached the maximum of 3 submissions. Reload the page to try again.',
    'newsletter.interestError': 'Please select an interest option.',
    
    // Chat
    'chat.title': 'Lapland Assistant',
    'chat.welcome': 'Welcome to Hotel-Restaurant Laponia assistant! 🌟\n\nI can help you with:\n• Room information and reservations\n• Restaurant and menu questions\n• Planning activities and experiences\n• General information about Lapland\n\nYou have 4 questions available in this session. How can I help you?',
    'chat.inputPlaceholder': 'Type your question...',
    'chat.send': 'Send',
    'chat.typing': 'Typing',
    'chat.remainingQuestions.3': '\n\n📝 You have 3 questions remaining.',
    'chat.remainingQuestions.2': '\n\n📝 You have 2 questions remaining.',
    'chat.remainingQuestions.1': '\n\n📝 You have 1 question remaining.',
    'chat.lastAnswerNotice': '\n\n⚠️ This was your last question. For more information, please contact us via WhatsApp or email.',
    'chat.maxQuestionsReached': 'You have used all 4 questions in this session. For more information:\n\n📱 WhatsApp: +358 40 123 4567\n📧 Email: info@laponia-demo.com\n\nThank you for your interest in Hotel-Restaurant Laponia!',
    'chat.maxLengthError': 'Message cannot exceed 300 characters',
    'chat.errorMessage': 'Sorry, an error occurred. Please contact us via WhatsApp or email.',
    'chat.close': 'Close chat',
    
    // WhatsApp
    'whatsapp.defaultMessage': 'Hello! I am interested in Hotel-Restaurant Laponia and would like more information.',
    
    // Header
    'header.logo': 'Lapland',
    
    // Footer
    'footer.hotelName': 'Lapland Hotel-Restaurant',
    'footer.tagline': 'Experience Arctic Magic in Finnish Lapland',
    'footer.copyright': 'Lapland Hotel-Restaurant. All rights reserved.',
    'footer.social.facebook': 'Facebook link',
    'footer.social.instagram': 'Instagram link',
    'footer.social.tiktok': 'TikTok link',
    'footer.social.twitter': 'Twitter link',
  },
  
  sv: {
    // Header
    'nav.about': 'Om oss',
    'nav.rooms': 'Rum',
    'nav.restaurant': 'Restaurang',
    'nav.activities': 'Aktiviteter',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Hotell-Restaurang Lappland',
    'hero.subtitle': 'Upplev arktisk magi i finska Lappland',
    'hero.cta': 'Boka nu',
    'hero.explore': 'Utforska mer',
    
    // About
    'about.title': 'Välkommen till Laponia',
    'about.description': 'Hotell-Restaurang Lappland ligger i hjärtat av det förtrollande lappländska landskapet i Rovaniemi. Vi erbjuder en unik kombination av skandinavisk lyx, traditionell finsk gästfrihet och oförglömliga arktiska upplevelser. Oavsett om du vill se norrsken, njuta av en husky-safari eller slappna av i en äkta finsk bastu, har vi allt du behöver för en perfekt Lapplandssemester.',
    
    // Rooms
    'rooms.title': 'Våra Rum',
    'rooms.subtitle': 'Hitta det perfekta boendet för ditt arktiska äventyr',
    'rooms.perNight': '/ natt',
    'rooms.guests': 'gäster',
    'rooms.book': 'Boka',
    'booking.dateLabel': 'Datum',
    'booking.checkInLabel': 'Incheckningsdatum',   // nuevo
    'booking.checkOutLabel': 'Utcheckningsdatum',  // nuevo
    'booking.close': 'Stäng',
    'booking.success': 'Din bokningsförfrågan har skickats! Vi kontaktar dig snart för att bekräfta din reservation.',
    'booking.dateError': 'Välj ett datum för bokningen.',

    // Restaurant
    'restaurant.title': 'Restaurang',
    'restaurant.subtitle': 'Smaka Lapplands smaker',
    'restaurant.description': 'Vår restaurang serverar de finaste nordliga delikatesserna tillagade med lokala råvaror. Upplev autentisk lappländsk mat i en fantastisk arktisk miljö.',
    'restaurant.hours': 'Öppettider',
    'restaurant.hoursValue': 'Mån-Sön: 18:00 - 22:00',
    
    // Activities
    'activities.title': 'Aktiviteter',
    'activities.subtitle': 'Upplev unika arktiska äventyr',
    'activities.duration': 'Varaktighet',
    
    // Location
    'location.title': 'Plats & Kontakt',
    'location.address': 'Adress',
    'location.phone': 'Telefon',
    'location.email': 'E-post',
    'location.whatsapp': 'Kontakta via WhatsApp',
    
    // Newsletter
    'newsletter.title': 'Nyhetsbrev',
    'newsletter.subtitle': 'Prenumerera för att få erbjudanden och nyheter från Lappland',
    'newsletter.nameLabel': 'Namn',
    'newsletter.namePlaceholder': 'Ditt namn',
    'newsletter.emailLabel': 'E-post',
    'newsletter.emailPlaceholder': 'din@email.com',
    'newsletter.interestLabel': 'Huvudintresse',
    'newsletter.interestHotel': 'Endast hotell',
    'newsletter.interestRestaurant': 'Endast restaurang',
    'newsletter.interestAll': 'Hotell + Aktiviteter',
    'newsletter.languageLabel': 'Språk',
    'newsletter.humanCheckLabel': 'Jag bekräftar att jag är människa',
    'newsletter.submit': 'Prenumerera',
    'newsletter.sending': 'Skickar...',
    'newsletter.success': 'Tack för din prenumeration! Du kommer snart att få ett bekräftelsemeddelande.',
    'newsletter.nameError': 'Namn krävs.',
    'newsletter.emailError': 'Ange en giltig e-postadress.',
    'newsletter.humanCheckError': 'Bekräfta att du är människa.',
    'newsletter.maxSendsReached': 'Du har nått maximalt 3 inskickningar. Ladda om sidan för att försöka igen.',
    'newsletter.interestError': 'Välj ett intresse.',

    // Chat
    'chat.title': 'Lapplands Assistent',
    'chat.welcome': 'Välkommen till Hotel-Restaurang Laponias assistent! 🌟\n\nJag kan hjälpa dig med:\n• Information om rum och bokningar\n• Frågor om restaurangen och menyn\n• Planering av aktiviteter och upplevelser\n• Allmän information om Lappland\n\nDu har 4 frågor tillgängliga i denna session. Hur kan jag hjälpa dig?',
    'chat.inputPlaceholder': 'Skriv din fråga...',
    'chat.send': 'Skicka',
    'chat.typing': 'Skriver',
    'chat.remainingQuestions.3': '\n\n📝 Du har 3 frågor kvar.',
    'chat.remainingQuestions.2': '\n\n📝 Du har 2 frågor kvar.',
    'chat.remainingQuestions.1': '\n\n📝 Du har 1 fråga kvar.',
    'chat.lastAnswerNotice': '\n\n⚠️ Detta var din sista fråga. För mer information, kontakta oss via WhatsApp eller e-post.',
    'chat.maxQuestionsReached': 'Du har använt alla 4 frågor i denna session. För mer information:\n\n📱 WhatsApp: +358 40 123 4567\n📧 E-post: info@laponia-demo.com\n\nTack för ditt intresse för Hotel-Restaurang Laponia!',
    'chat.maxLengthError': 'Meddelandet får inte överstiga 300 tecken',
    'chat.errorMessage': 'Tyvärr uppstod ett fel. Kontakta oss via WhatsApp eller e-post.',
    'chat.close': 'Stäng chat',
    
    // WhatsApp
    'whatsapp.defaultMessage': 'Hej! Jag är intresserad av Hotel-Restaurang Laponia och vill gärna ha mer information.',
    
    // Header
    'header.logo': 'Lappland',
    
    // Footer
    'footer.hotelName': 'Hotell-Restaurang Lappland',
    'footer.tagline': 'Upplev arktisk magi i finska Lappland',
    'footer.copyright': 'Hotell-Restaurang Lappland. Alla rättigheter förbehållna.',
    'footer.social.facebook': 'Facebook-länk',
    'footer.social.instagram': 'Instagram-länk',
    'footer.social.tiktok': 'TikTok-länk',
    'footer.social.twitter': 'Twitter-länk',
  },
};

export const languageNames: Record<Language, string> = {
  fi: 'Suomi',
  es: 'Español',
  en: 'English',
  sv: 'Svenska',
};

