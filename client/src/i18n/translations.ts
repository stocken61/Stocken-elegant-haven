export type Language = 'de' | 'en' | 'fr';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    rooms: string;
    restaurant: string;
    services: string;
    contact: string;
    book: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  
  // Home Page
  home: {
    hero: {
      title: string;
      subtitle: string;
      ourRooms: string;
      bookNow: string;
    };
    benefits: {
      title: string;
      items: {
        location: string;
        comfort: string;
        service: string;
        dining: string;
      };
      breakfast: {
        title: string;
        description: string;
      };
      wifi: {
        title: string;
        description: string;
      };
    };
    rooms: {
      title: string;
      comfort: string;
      deluxe: string;
      premium: string;
    };
    contact: {
      title: string;
      subtitle: string;
      getInTouch: string;
    };
    services: {
      title: string;
      restaurant: string;
      breakfast: string;
      wifi: string;
      location: string;
      discoverAll: string;
    };
    location: {
      title: string;
      viewLocation: string;
      call: string;
    };
  };
  
  // About Section
  about: {
    title: string;
    description: string;
    learnMore: string;
    highlights: {
      location: string;
      comfort: string;
      service: string;
    };
  };
  
  // Rooms Section
  rooms: {
    title: string;
    categories: {
      comfort: string;
      deluxe: string;
      premiumSuite: string;
      familySuite: string;
    };
    details: {
      viewDetails: string;
      book: string;
      size: string;
      capacity: string;
      bed: string;
      view: string;
      amenities: string;
      checkAvailability: string;
      callDirectly: string;
      priceDetails: string;
      pricePerNight: string;
      breakfast: string;
      cityTax: string;
      priceFrom: string;
      priceNote: string;
    };
  };
  
  // Restaurant Section
  restaurant: {
    title: string;
    subtitle: string;
    description: string;
    concept: string;
    hours: string;
    reservations: string;
    events: string;
  };
  
  // Services Section
  services: {
    title: string;
    parking: string;
    transport: string;
    attractions: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      success: string;
      error: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
    };
    links: string;
    contact: string;
    legal: {
      terms: string;
      privacy: string;
      imprint: string;
    };
    copyright: string;
  };
  
  // Room Descriptions
  roomDescriptions: {
    comfort: {
      short: string;
      long: string;
    };
    deluxe: {
      short: string;
      long: string;
    };
    premiumSuite: {
      short: string;
      long: string;
    };
    familySuite: {
      short: string;
      long: string;
    };
  };
  
  // Common
  common: {
    or: string;
    from: string;
    per: string;
    night: string;
    person: string;
    included: string;
    notIncluded: string;
    yes: string;
    no: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      home: 'Home',
      about: 'Über uns',
      rooms: 'Zimmer',
      restaurant: 'Restaurant',
      services: 'Services',
      contact: 'Kontakt',
      book: 'Buchen',
    },
    hero: {
      title: 'Willkommen im Boutique Hotel Stocken by Pontera',
      subtitle: 'Erleben Sie moderne Schweizer Gastfreundschaft in St. Gallen',
      cta: 'Jetzt buchen',
    },
    home: {
      hero: {
        title: 'Willkommen im Boutique Hotel Stocken',
        subtitle: 'Ihr modernes Boutique-Hotel im Herzen von St. Gallen',
        ourRooms: 'Unsere Zimmer',
        bookNow: 'Jetzt buchen',
      },
      benefits: {
        title: 'Warum uns wählen?',
        items: {
          location: 'Zentrale Lage in St. Gallen',
          comfort: 'Moderne & komfortable Zimmer',
          service: 'Persönlicher Service',
          dining: 'Restaurant Pontera',
        },
        breakfast: {
          title: 'Exklusives Frühstücksangebot',
          description: 'À la carte, gegen Aufpreis buchbar',
        },
        wifi: {
          title: 'Kostenloses WLAN',
          description: 'Highspeed-Internet im ganzen Hotel',
        },
      },
      rooms: {
        title: 'Unsere Zimmer',
        comfort: 'Komfort Doppelzimmer',
        deluxe: 'Deluxe Doppelzimmer', 
        premium: 'Premium Suite',
      },
      contact: {
        title: 'Kontaktieren Sie uns',
        subtitle: 'Haben Sie Fragen? Wir helfen Ihnen gerne weiter.',
        getInTouch: 'Kontakt aufnehmen',
      },
      services: {
        title: 'Unsere Services',
        restaurant: 'Genießen Sie kulinarische Köstlichkeiten in unserem Restaurant.',
        breakfast: 'Genießen Sie ein individuelles À la carte Frühstück.',
        wifi: 'Bleiben Sie mit unserem Highspeed-WLAN verbunden.',
        location: 'Perfekt gelegen im Herzen von St. Gallen.',
        discoverAll: 'Alle Services entdecken',
      },
      location: {
        title: 'Boutique Hotel Stocken',
        viewLocation: 'Standort ansehen',
        call: 'Anrufen',
      },
    },
    about: {
      title: 'Über uns',
      description: 'Das Boutique Hotel Stocken by Pontera verbindet traditionelle Schweizer Gastfreundschaft mit modernem Luxus. In unserem stilvollen Hotel in St. Gallen erwartet Sie ein einzigartiges Erlebnis.',
      learnMore: 'Mehr erfahren',
      highlights: {
        location: 'Perfekte Lage in St. Gallen',
        comfort: 'Stilvolle & komfortable Zimmer',
        service: 'Persönlicher Service',
      },
    },
    rooms: {
      title: 'Unsere Zimmer',
      categories: {
        comfort: 'Komfort',
        deluxe: 'Deluxe',
        premiumSuite: 'Premium Suite',
        familySuite: 'Premium Family Suite',
      },
      details: {
        viewDetails: 'Details ansehen',
        book: 'Buchen',
        size: 'Zimmergröße',
        capacity: 'Kapazität',
        bed: 'Betttyp',
        view: 'Aussicht',
        amenities: 'Ausstattung',
        checkAvailability: 'Verfügbarkeit prüfen',
        callDirectly: 'Rufen Sie uns direkt an',
        priceDetails: 'Preisdetails',
        pricePerNight: 'Zimmerpreis pro Nacht',
        breakfast: 'Frühstück inkl.',
        cityTax: 'Kurtaxe pro Person/Nacht',
        priceFrom: 'Preis ab',
        priceNote: '*Preis pro Nacht, exkl. Frühstück und Kurtaxe',
      },
    },
    restaurant: {
      title: 'Restaurant Pontera',
      subtitle: 'Das erste All-Day-Genusskonzept mit Teekultur in Kupfer',
      description: 'Erleben Sie kulinarische Vielfalt in unserem Restaurant Pontera. Von frischen Frühstückskreationen bis hin zu raffinierten Abendmenüs – genießen Sie Gaumenfreuden in entspannter Atmosphäre.',
      concept: 'All-Day-Dining Konzept',
      hours: 'Täglich von 07:00 - 22:00 Uhr',
      reservations: 'restaurant@pontera.ch',
      events: 'event@hotelstocken.com',
    },
    services: {
      title: 'Services',
      parking: 'Kostenfreie Parkplätze',
      transport: 'Bus Linie 1 hält direkt vor dem Hotel',
      attractions: 'Sehenswürdigkeiten in St. Gallen',
    },
    contact: {
      title: 'Kontakt',
      address: 'Kräzernstrasse 10, 9014 St. Gallen, Schweiz',
      phone: '+41 79 300 01 61',
      email: 'reservation@hotelstocken.com',
      form: {
        title: 'Kontaktieren Sie uns',
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Nachricht senden',
        success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
        error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
      },
    },
    footer: {
      description: 'Wir verkörpern die Tradition der Schweizer Gastfreundschaft mit modernem Luxus.',
      newsletter: {
        title: 'Newsletter',
        description: 'Abonnieren Sie unseren Newsletter, um über spezielle Angebote und Events informiert zu werden.',
        placeholder: 'Ihre E-Mail-Adresse',
        subscribe: 'Abonnieren',
      },
      links: 'Links',
      contact: 'Kontakt',
      legal: {
        terms: 'AGB',
        privacy: 'Datenschutz',
        imprint: 'Impressum',
      },
      copyright: 'Stocken Hotel. Alle Rechte vorbehalten.',
    },
    roomDescriptions: {
      comfort: {
        short: 'Gemütliches Ambiente auf 18 m²',
        long: 'Unsere Komfort-Zimmer bieten auf 18 m² alles, was Sie für einen angenehmen Aufenthalt benötigen. Mit durchdachter Ausstattung und modernem Design.',
      },
      deluxe: {
        short: 'Stilvolle Eleganz auf 23 m²',
        long: 'Erleben Sie gehobenen Komfort in unseren Deluxe-Zimmern. Auf 23 m² erwarten Sie stilvolle Einrichtung und erstklassige Ausstattung.',
      },
      premiumSuite: {
        short: 'Geräumiges Wohnerlebnis mit Sitzecke',
        long: 'Unsere Premium Suite bietet auf 28 m² luxuriösen Wohnkomfort mit separater Sitzecke und exklusiver Ausstattung.',
      },
      familySuite: {
        short: 'Großzügiger Raum für die ganze Familie',
        long: 'Die Premium Family Suite mit 49 m² bietet reichlich Platz für Familien mit zwei Doppelbetten und einem Schlafsofa.',
      },
    },
    common: {
      or: 'oder',
      from: 'ab',
      per: 'pro',
      night: 'Nacht',
      person: 'Person',
      included: 'inklusive',
      notIncluded: 'nicht inklusive',
      yes: 'Ja',
      no: 'Nein',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      rooms: 'Rooms',
      restaurant: 'Restaurant',
      services: 'Services',
      contact: 'Contact',
      book: 'Book',
    },
    hero: {
      title: 'Welcome to Boutique Hotel Stocken by Pontera',
      subtitle: 'Experience modern Swiss hospitality in St. Gallen',
      cta: 'Book Now',
    },
    home: {
      hero: {
        title: 'Welcome to Boutique Hotel Stocken',
        subtitle: 'Your modern boutique hotel in the heart of St. Gallen',
        ourRooms: 'Our Rooms',
        bookNow: 'Book Now',
      },
      benefits: {
        title: 'Why Choose Us?',
        items: {
          location: 'Central location in St. Gallen',
          comfort: 'Modern & comfortable rooms',
          service: 'Personal service',
          dining: 'Restaurant Pontera',
        },
        breakfast: {
          title: 'Exclusive Breakfast Offer',
          description: 'À la carte, bookable for an additional fee',
        },
        wifi: {
          title: 'Free WiFi',
          description: 'High-speed internet throughout the hotel',
        },
      },
      rooms: {
        title: 'Our Rooms',
        comfort: 'Comfort Double Room',
        deluxe: 'Deluxe Double Room',
        premium: 'Premium Suite',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Do you have questions? We are happy to help.',
        getInTouch: 'Get in Touch',
      },
      services: {
        title: 'Our Services',
        restaurant: 'Enjoy culinary delights in our restaurant.',
        breakfast: 'Enjoy an individual à la carte breakfast.',
        wifi: 'Stay connected with our high-speed WiFi.',
        location: 'Perfectly located in the heart of St. Gallen.',
        discoverAll: 'Discover All Services',
      },
      location: {
        title: 'Boutique Hotel Stocken',
        viewLocation: 'View Location',
        call: 'Call',
      },
    },
    about: {
      title: 'About Us',
      description: 'Boutique Hotel Stocken by Pontera combines traditional Swiss hospitality with modern luxury. Experience a unique stay at our stylish hotel in St. Gallen.',
      learnMore: 'Learn More',
      highlights: {
        location: 'Perfect location in St. Gallen',
        comfort: 'Stylish & comfortable rooms',
        service: 'Personal service',
      },
    },
    rooms: {
      title: 'Our Rooms',
      categories: {
        comfort: 'Comfort',
        deluxe: 'Deluxe',
        premiumSuite: 'Premium Suite',
        familySuite: 'Premium Family Suite',
      },
      details: {
        viewDetails: 'View Details',
        book: 'Book',
        size: 'Room Size',
        capacity: 'Capacity',
        bed: 'Bed Type',
        view: 'View',
        amenities: 'Amenities',
        checkAvailability: 'Check Availability',
        callDirectly: 'Call us directly',
        priceDetails: 'Price Details',
        pricePerNight: 'Room rate per night',
        breakfast: 'Breakfast incl.',
        cityTax: 'City tax per person/night',
        priceFrom: 'Price from',
        priceNote: '*Price per night, excl. breakfast and city tax',
      },
    },
    restaurant: {
      title: 'Restaurant Pontera',
      subtitle: 'The first all-day dining concept with tea culture in copper',
      description: 'Experience culinary diversity at our Restaurant Pontera. From fresh breakfast creations to refined dinner menus – enjoy culinary delights in a relaxed atmosphere.',
      concept: 'All-Day-Dining Concept',
      hours: 'Daily from 07:00 - 22:00',
      reservations: 'restaurant@pontera.ch',
      events: 'event@hotelstocken.com',
    },
    services: {
      title: 'Services',
      parking: 'Free parking',
      transport: 'Bus line 1 stops directly in front of the hotel',
      attractions: 'Attractions in St. Gallen',
    },
    contact: {
      title: 'Contact',
      address: 'Kräzernstrasse 10, 9014 St. Gallen, Switzerland',
      phone: '+41 79 300 01 61',
      email: 'reservation@hotelstocken.com',
      form: {
        title: 'Contact Us',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        success: 'Thank you! Your message has been sent successfully.',
        error: 'Error sending message. Please try again.',
      },
    },
    footer: {
      description: 'We embody the tradition of Swiss hospitality with modern luxury.',
      newsletter: {
        title: 'Newsletter',
        description: 'Subscribe to our newsletter to stay informed about special offers and events.',
        placeholder: 'Your email address',
        subscribe: 'Subscribe',
      },
      links: 'Links',
      contact: 'Contact',
      legal: {
        terms: 'Terms',
        privacy: 'Privacy',
        imprint: 'Imprint',
      },
      copyright: 'Stocken Hotel. All rights reserved.',
    },
    roomDescriptions: {
      comfort: {
        short: 'Cozy ambiance on 18 m²',
        long: 'Our Comfort rooms offer everything you need for a pleasant stay on 18 m². With thoughtful amenities and modern design.',
      },
      deluxe: {
        short: 'Stylish elegance on 23 m²',
        long: 'Experience elevated comfort in our Deluxe rooms. On 23 m², stylish furnishings and first-class amenities await you.',
      },
      premiumSuite: {
        short: 'Spacious living experience with seating area',
        long: 'Our Premium Suite offers luxurious living comfort on 28 m² with a separate seating area and exclusive amenities.',
      },
      familySuite: {
        short: 'Generous space for the whole family',
        long: 'The Premium Family Suite with 49 m² offers plenty of space for families with two double beds and a sofa bed.',
      },
    },
    common: {
      or: 'or',
      from: 'from',
      per: 'per',
      night: 'night',
      person: 'person',
      included: 'included',
      notIncluded: 'not included',
      yes: 'Yes',
      no: 'No',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      rooms: 'Chambres',
      restaurant: 'Restaurant',
      services: 'Services',
      contact: 'Contact',
      book: 'Réserver',
    },
    hero: {
      title: 'Bienvenue au Boutique Hotel Stocken by Pontera',
      subtitle: 'Découvrez l\'hospitalité suisse moderne à St-Gall',
      cta: 'Réserver maintenant',
    },
    home: {
      hero: {
        title: 'Bienvenue au Boutique Hotel Stocken',
        subtitle: 'Votre hôtel boutique moderne au cœur de St-Gall',
        ourRooms: 'Nos Chambres',
        bookNow: 'Réserver',
      },
      benefits: {
        title: 'Pourquoi nous choisir?',
        items: {
          location: 'Situation centrale à St-Gall',
          comfort: 'Chambres modernes et confortables',
          service: 'Service personnalisé',
          dining: 'Restaurant Pontera',
        },
        breakfast: {
          title: 'Offre de petit-déjeuner exclusive',
          description: 'À la carte, réservable moyennant supplément',
        },
        wifi: {
          title: 'WiFi gratuit',
          description: 'Internet haut débit dans tout l\'hôtel',
        },
      },
      rooms: {
        title: 'Nos Chambres',
        comfort: 'Chambre Double Confort',
        deluxe: 'Chambre Double Deluxe',
        premium: 'Suite Premium',
      },
      contact: {
        title: 'Contactez-nous',
        subtitle: 'Avez-vous des questions? Nous sommes heureux de vous aider.',
        getInTouch: 'Nous contacter',
      },
      services: {
        title: 'Nos Services',
        restaurant: 'Savourez les délices culinaires de notre restaurant.',
        breakfast: 'Profitez d\'un petit-déjeuner à la carte personnalisé.',
        wifi: 'Restez connecté avec notre WiFi haut débit.',
        location: 'Parfaitement situé au cœur de St-Gall.',
        discoverAll: 'Découvrir tous les services',
      },
      location: {
        title: 'Boutique Hotel Stocken',
        viewLocation: 'Voir l\'emplacement',
        call: 'Appeler',
      },
    },
    about: {
      title: 'À propos de nous',
      description: 'Le Boutique Hotel Stocken by Pontera allie l\'hospitalité suisse traditionnelle au luxe moderne. Vivez une expérience unique dans notre hôtel élégant de St-Gall.',
      learnMore: 'En savoir plus',
      highlights: {
        location: 'Situation parfaite à St-Gall',
        comfort: 'Chambres élégantes et confortables',
        service: 'Service personnel',
      },
    },
    rooms: {
      title: 'Nos Chambres',
      categories: {
        comfort: 'Confort',
        deluxe: 'Deluxe',
        premiumSuite: 'Suite Premium',
        familySuite: 'Suite Familiale Premium',
      },
      details: {
        viewDetails: 'Voir les détails',
        book: 'Réserver',
        size: 'Taille de la chambre',
        capacity: 'Capacité',
        bed: 'Type de lit',
        view: 'Vue',
        amenities: 'Équipements',
        checkAvailability: 'Vérifier la disponibilité',
        callDirectly: 'Appelez-nous directement',
        priceDetails: 'Détails du prix',
        pricePerNight: 'Tarif chambre par nuit',
        breakfast: 'Petit-déjeuner incl.',
        cityTax: 'Taxe de séjour par personne/nuit',
        priceFrom: 'Prix à partir de',
        priceNote: '*Prix par nuit, hors petit-déjeuner et taxe de séjour',
      },
    },
    restaurant: {
      title: 'Restaurant Pontera',
      subtitle: 'Le premier concept de restauration toute la journée avec culture du thé en cuivre',
      description: 'Découvrez la diversité culinaire au Restaurant Pontera. Des créations fraîches du petit-déjeuner aux menus raffinés du dîner – savourez les plaisirs gastronomiques dans une atmosphère détendue.',
      concept: 'Concept All-Day-Dining',
      hours: 'Tous les jours de 07h00 à 22h00',
      reservations: 'restaurant@pontera.ch',
      events: 'event@hotelstocken.com',
    },
    services: {
      title: 'Services',
      parking: 'Parking gratuit',
      transport: 'La ligne de bus 1 s\'arrête directement devant l\'hôtel',
      attractions: 'Attractions à St-Gall',
    },
    contact: {
      title: 'Contact',
      address: 'Kräzernstrasse 10, 9014 St-Gall, Suisse',
      phone: '+41 79 300 01 61',
      email: 'reservation@hotelstocken.com',
      form: {
        title: 'Contactez-nous',
        name: 'Nom',
        email: 'E-mail',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message',
        success: 'Merci ! Votre message a été envoyé avec succès.',
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
      },
    },
    footer: {
      description: 'Nous incarnons la tradition de l\'hospitalité suisse avec le luxe moderne.',
      newsletter: {
        title: 'Newsletter',
        description: 'Abonnez-vous à notre newsletter pour rester informé des offres spéciales et des événements.',
        placeholder: 'Votre adresse e-mail',
        subscribe: 'S\'abonner',
      },
      links: 'Liens',
      contact: 'Contact',
      legal: {
        terms: 'CGV',
        privacy: 'Confidentialité',
        imprint: 'Mentions légales',
      },
      copyright: 'Stocken Hotel. Tous droits réservés.',
    },
    roomDescriptions: {
      comfort: {
        short: 'Ambiance chaleureuse sur 18 m²',
        long: 'Nos chambres Confort offrent tout ce dont vous avez besoin pour un séjour agréable sur 18 m². Avec des équipements bien pensés et un design moderne.',
      },
      deluxe: {
        short: 'Élégance raffinée sur 23 m²',
        long: 'Découvrez un confort supérieur dans nos chambres Deluxe. Sur 23 m², un mobilier élégant et des équipements de première classe vous attendent.',
      },
      premiumSuite: {
        short: 'Expérience de vie spacieuse avec coin salon',
        long: 'Notre Suite Premium offre un confort de vie luxueux sur 28 m² avec un coin salon séparé et des équipements exclusifs.',
      },
      familySuite: {
        short: 'Espace généreux pour toute la famille',
        long: 'La Suite Familiale Premium de 49 m² offre beaucoup d\'espace pour les familles avec deux lits doubles et un canapé-lit.',
      },
    },
    common: {
      or: 'ou',
      from: 'à partir de',
      per: 'par',
      night: 'nuit',
      person: 'personne',
      included: 'inclus',
      notIncluded: 'non inclus',
      yes: 'Oui',
      no: 'Non',
    },
  },
};