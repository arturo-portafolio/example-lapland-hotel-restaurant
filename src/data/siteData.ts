import { Language } from '@/i18n/translations';

export const siteConfig = {
  hotelName: 'Hotel-Ravintola Laponia',
  baseLocation: 'Joulupukintie 1, 96930 Rovaniemi, Lappi, Suomi',
  phone: '+358 40 123 4567',
  email: 'info@laponia-demo.com',
  whatsappNumber: '358401234567',
};

export interface Room {
  id: string;
  slug: string;
  pricePerNight: number;
  capacity: number;
  amenities: string[];
  image: string;
  translations: Record<Language, { name: string; description: string }>;
}

export const rooms: Room[] = [
  {
    id: 'arctic-double',
    slug: 'arctic-double',
    pricePerNight: 180,
    capacity: 2,
    amenities: ['wifi', 'breakfast', 'sauna', 'minibar'],
    image: '/arctic-double.jpg',
    translations: {
      fi: {
        name: 'Arktinen kahden hengen huone',
        description: 'Viihtyisä huone kahdelle upeilla näkymillä lumiseen metsään. Sisältää oman saunan ja modernit mukavuudet.',
      },
      es: {
        name: 'Habitación Doble Ártica',
        description: 'Acogedora habitación para dos con impresionantes vistas al bosque nevado. Incluye sauna privada y comodidades modernas.',
      },
      en: {
        name: 'Arctic Double Room',
        description: 'Cozy room for two with stunning views of the snowy forest. Includes private sauna and modern amenities.',
      },
      sv: {
        name: 'Arktiskt dubbelrum',
        description: 'Mysigt rum för två med fantastisk utsikt över den snöiga skogen. Inkluderar privat bastu och moderna bekvämligheter.',
      },
    },
  },
  {
    id: 'aurora-suite',
    slug: 'aurora-suite',
    pricePerNight: 350,
    capacity: 2,
    amenities: ['wifi', 'breakfast', 'sauna', 'minibar', 'glass-ceiling', 'fireplace'],
    image: '/aurora-suite.jpg',
    translations: {
      fi: {
        name: 'Aurora Borealis -sviitti',
        description: 'Ylellinen sviitti lasikatolla revontulien ihailuun. Takka, spa-kylpyamme ja panoraamanäkymät Lapin taivaalle.',
      },
      es: {
        name: 'Suite Aurora Boreal',
        description: 'Lujosa suite con techo de cristal para contemplar las auroras boreales. Chimenea, bañera spa y vistas panorámicas al cielo de Laponia.',
      },
      en: {
        name: 'Aurora Borealis Suite',
        description: 'Luxurious suite with glass ceiling for watching the Northern Lights. Fireplace, spa bath, and panoramic views of the Lapland sky.',
      },
      sv: {
        name: 'Aurora Borealis-svit',
        description: 'Lyxig svit med glastak för att titta på norrskenet. Öppen spis, spabad och panoramautsikt över den lappländska himlen.',
      },
    },
  },
  {
    id: 'snow-cabin',
    slug: 'snow-cabin',
    pricePerNight: 420,
    capacity: 4,
    amenities: ['wifi', 'breakfast', 'sauna', 'kitchen', 'fireplace', 'terrace'],
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800',
    translations: {
      fi: {
        name: 'Lumimökki',
        description: 'Erillinen mökki keskellä lumista metsää. Täydellinen perheille tai pienille ryhmille. Oma sauna, takka ja terassi.',
      },
      es: {
        name: 'Cabaña de Nieve',
        description: 'Cabaña independiente en medio del bosque nevado. Perfecta para familias o grupos pequeños. Sauna propia, chimenea y terraza.',
      },
      en: {
        name: 'Snow Cabin',
        description: 'Standalone cabin in the middle of the snowy forest. Perfect for families or small groups. Private sauna, fireplace, and terrace.',
      },
      sv: {
        name: 'Snöstuga',
        description: 'Fristående stuga mitt i den snöiga skogen. Perfekt för familjer eller små grupper. Egen bastu, öppen spis och terrass.',
      },
    },
  },
];

export interface Dish {
  id: string;
  price: string;
  image: string;
  translations: Record<Language, { name: string; description: string }>;
}

export const dishes: Dish[] = [
  {
    id: 'salmon-soup',
    price: '€18',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
    translations: {
      fi: {
        name: 'Arktinen lohikeitto',
        description: 'Perinteinen kermainen lohikeitto tuoreella Lapin lohella, tilliöljyllä ja ruis-leipäsipuilla.',
      },
      es: {
        name: 'Sopa de salmón del Ártico',
        description: 'Tradicional sopa cremosa de salmón con salmón fresco de Laponia, aceite de eneldo y crutones de centeno.',
      },
      en: {
        name: 'Arctic Salmon Soup',
        description: 'Traditional creamy salmon soup with fresh Lapland salmon, dill oil, and rye bread croutons.',
      },
      sv: {
        name: 'Arktisk laxsoppa',
        description: 'Traditionell krämig laxsoppa med färsk lappländsk lax, dillolja och rågbrödskrutonger.',
      },
    },
  },
  {
    id: 'reindeer-steak',
    price: '€38',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    translations: {
      fi: {
        name: 'Poronpaisti',
        description: 'Mehukas poronliha puolukkakastikkeella, perunasoseella ja paahdetuilla juureksilla.',
      },
      es: {
        name: 'Filete de reno',
        description: 'Jugoso filete de reno con salsa de arándanos rojos, puré de patatas y verduras asadas.',
      },
      en: {
        name: 'Reindeer Steak',
        description: 'Juicy reindeer steak with lingonberry sauce, mashed potatoes, and roasted root vegetables.',
      },
      sv: {
        name: 'Renstek',
        description: 'Saftig renstek med lingonsås, potatismos och rostade rotfrukter.',
      },
    },
  },
  {
    id: 'berry-dessert',
    price: '€14',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800',
    translations: {
      fi: {
        name: 'Lapin marjajälkiruoka',
        description: 'Lakka-mousse mustikkasorbetilla ja tuoreilla metsämarjoilla.',
      },
      es: {
        name: 'Postre de frutos del bosque',
        description: 'Mousse de moras de los pantanos con sorbete de arándanos y frutos del bosque frescos.',
      },
      en: {
        name: 'Lapland Berry Dessert',
        description: 'Cloudberry mousse with blueberry sorbet and fresh wild berries.',
      },
      sv: {
        name: 'Lapplands bärdessert',
        description: 'Hjortronmousse med blåbärssorbet och färska vilda bär.',
      },
    },
  },
];

export interface Activity {
  id: string;
  duration: string;
  image: string;
  translations: Record<Language, { name: string; description: string }>;
}

export const activities: Activity[] = [
  {
    id: 'husky-safari',
    duration: '3h',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
    translations: {
      fi: {
        name: 'Husky-safari',
        description: 'Jännittävä koiravaljakkoajelu lumisessa metsässä. Opi ajamaan omaa valjakkoa ja nauti arktisesta luonnosta.',
      },
      es: {
        name: 'Safari con huskies',
        description: 'Emocionante paseo en trineo tirado por perros a través del bosque nevado. Aprende a conducir tu propio trineo y disfruta de la naturaleza ártica.',
      },
      en: {
        name: 'Husky Safari',
        description: 'Exciting dog sled ride through the snowy forest. Learn to drive your own sled and enjoy the Arctic nature.',
      },
      sv: {
        name: 'Husky-safari',
        description: 'Spännande hundspannstur genom den snöiga skogen. Lär dig köra din egen släde och njut av den arktiska naturen.',
      },
    },
  },
  {
    id: 'aurora-tour',
    duration: '4h',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    translations: {
      fi: {
        name: 'Revontuli-retki',
        description: 'Yöretki parhaimmille revontulipaikoille. Sisältää kuumaa juomaa ja paikallista tarinankerrontaa.',
      },
      es: {
        name: 'Tour de auroras boreales',
        description: 'Excursión nocturna a los mejores lugares para ver auroras boreales. Incluye bebida caliente y narración local.',
      },
      en: {
        name: 'Northern Lights Tour',
        description: 'Night excursion to the best Northern Lights viewing spots. Includes hot drinks and local storytelling.',
      },
      sv: {
        name: 'Norrskensjakt',
        description: 'Nattutflykt till de bästa platserna för att se norrsken. Inkluderar varm dryck och lokala berättelser.',
      },
    },
  },
  {
    id: 'finnish-sauna',
    duration: '2h',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    translations: {
      fi: {
        name: 'Perinteinen suomalainen sauna',
        description: 'Aito saunakokemus järven rannalla. Sisältää avannon ja rentoutushetken takkatulen äärellä.',
      },
      es: {
        name: 'Sauna finlandesa tradicional',
        description: 'Auténtica experiencia de sauna junto al lago. Incluye baño en agua helada y momento de relajación junto al fuego.',
      },
      en: {
        name: 'Traditional Finnish Sauna',
        description: 'Authentic sauna experience by the lake. Includes ice hole swimming and relaxation by the fireplace.',
      },
      sv: {
        name: 'Traditionell finsk bastu',
        description: 'Autentisk bastuupplevelse vid sjön. Inkluderar bad i isvak och avkoppling vid brasan.',
      },
    },
  },
];

export const chatConfig = {
  maxQuestionsPerSession: 4,
  maxMessageLength: 300,
  welcomeMessageKey: 'chat.welcome',
  noMoreQuestionsMessageKey: 'chat.maxQuestionsReached',
};
