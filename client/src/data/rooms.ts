export interface Room {
  id: string;
  category: string;
  name: string;
  shortDescription: string;
  description: string;
  extendedDescription: string;
  price: number;
  capacity: number;
  size: number;
  bed: string;
  view: string;
  images: string[];
  amenities: string[];
}

export const rooms: Room[] = [
  // Economy Zimmer (3 Zimmer, 18 m²)
  {
    id: 'economy-room-1',
    category: 'economy',
    name: 'Economy Doppelzimmer',
    shortDescription: 'Unser gemütliches Economy Zimmer mit 18 m² bietet alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    description: 'Unser gemütliches Economy Zimmer bietet Ihnen alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    extendedDescription: 'Das Economy Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das komfortable Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt.',
    price: 150,
    capacity: 2,
    size: 18,
    bed: 'Doppelbett',
    view: 'Stadt',
    images: [
      '/assets/zimmer1.png',
      '/assets/zimmer1bett.png',
      '/assets/kategorie1und2 front.png',
      '/assets/kategorie 1und2kleider.png',
      '/assets/bad1.png'
    ],
    amenities: [
      'Kostenloses WLAN',
      'Klimaanlage',
      'Flachbild-TV',
      'Minibar',
      'Kaffee-/Teemaschine',
      'Safe',
      'Regionale Naturprodukte im Bad',
      'Haartrockner',
      'Schreibtisch'
    ]
  },
  {
    id: 'economy-room-2',
    category: 'economy',
    name: 'Economy Doppelzimmer',
    shortDescription: 'Unser gemütliches Economy Zimmer mit 18 m² bietet alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    description: 'Unser gemütliches Economy Zimmer bietet Ihnen alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    extendedDescription: 'Das Economy Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das komfortable Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt.',
    price: 150,
    capacity: 2,
    size: 18,
    bed: 'Doppelbett',
    view: 'Stadt',
    images: [
      '/assets/room_main.webp',
      '/assets/restaurant.webp',
      '/assets/hero_main.png',
      '/assets/facade.webp'
    ],
    amenities: [
      'Kostenloses WLAN',
      'Klimaanlage',
      'Flachbild-TV',
      'Minibar',
      'Kaffee-/Teemaschine',
      'Safe',
      'Regionale Naturprodukte im Bad',
      'Haartrockner',
      'Schreibtisch'
    ]
  },
  {
    id: 'economy-room-3',
    category: 'economy',
    name: 'Economy Doppelzimmer',
    shortDescription: 'Unser gemütliches Economy Zimmer mit 18 m² bietet alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    description: 'Unser gemütliches Economy Zimmer bietet Ihnen alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    extendedDescription: 'Das Economy Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das komfortable Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt.',
    price: 150,
    capacity: 2,
    size: 18,
    bed: 'Doppelbett',
    view: 'Stadt',
    images: [
      '/assets/room_main.webp',
      '/assets/restaurant.webp',
      '/assets/hero_main.png',
      '/assets/facade.webp'
    ],
    amenities: [
      'Kostenloses WLAN',
      'Klimaanlage',
      'Flachbild-TV',
      'Minibar',
      'Kaffee-/Teemaschine',
      'Safe',
      'Regionale Naturprodukte im Bad',
      'Haartrockner',
      'Schreibtisch'
    ]
  },
  
  // Deluxe Zimmer (3 Zimmer, 23 m²)
  {
    id: 'deluxe-room-1',
    category: 'deluxe',
    name: 'Deluxe Doppelzimmer',
    shortDescription: 'Unser großzügiges Deluxe-Zimmer mit 23 m² bietet gehobenen Komfort und mehr Platz für Ihren Aufenthalt.',
    description: 'Unser Deluxe Zimmer bietet alles für einen angenehmen Aufenthalt mit hochwertigem Komfort und 23 m² Wohnfläche.',
    extendedDescription: 'Das Deluxe Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt oder Umgebung.',
    price: 195,
    capacity: 2,
    size: 23,
    bed: 'Doppelbett',
    view: 'Stadt oder Garten',
    images: [
      '/assets/deluxe/zimmer1.png',
      '/assets/deluxe/zimmer1bett.png',
      '/assets/deluxe/kategorie1und2 front.png',
      '/assets/deluxe/kategorie 1und2kleider.png',
      '/assets/deluxe/bad1.png'
    ],
    amenities: [
      'Kostenloses WLAN',
      'Klimaanlage',
      'Flachbild-TV',
      'Minibar',
      'Kaffee-/Teemaschine',
      'Safe',
      'Regionale Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Haartrockner',
      'Schreibtisch'
    ]
  },
  {
    id: 'deluxe-room-2',
    category: 'deluxe',
    name: 'Deluxe Doppelzimmer',
    shortDescription: 'Unser großzügiges Deluxe-Zimmer mit 23 m² bietet gehobenen Komfort und mehr Platz für Ihren Aufenthalt.',
    description: 'Unser Deluxe Zimmer bietet alles für einen angenehmen Aufenthalt mit hochwertigem Komfort und 23 m² Wohnfläche.',
    extendedDescription: 'Das Deluxe Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt oder Umgebung.',
    price: 195,
    capacity: 2,
    size: 23,
    bed: 'Doppelbett',
    view: 'Stadt oder Garten',
    images: [
      '/assets/deluxe/zimmer1.png',
      '/assets/deluxe/zimmer1bett.png',
      '/assets/deluxe/kategorie1und2 front.png',
      '/assets/deluxe/kategorie 1und2kleider.png',
      '/assets/deluxe/bad1.png'
    ],
    amenities: [
      'Kostenloses WLAN',
      'Klimaanlage',
      'Flachbild-TV',
      'Minibar',
      'Kaffee-/Teemaschine',
      'Safe',
      'Regionale Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Haartrockner',
      'Schreibtisch'
    ]
  },
  {
    id: 'deluxe-room-3',
    category: 'deluxe',
    name: 'Deluxe Doppelzimmer',
    shortDescription: 'Unser großzügiges Deluxe-Zimmer mit 23 m² bietet gehobenen Komfort und mehr Platz für Ihren Aufenthalt.',
    description: 'Unser Deluxe Zimmer bietet alles für einen angenehmen Aufenthalt mit hochwertigem Komfort und 23 m² Wohnfläche.',
    extendedDescription: 'Das Deluxe Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt oder Umgebung.',
    price: 195,
    capacity: 2,
    size: 23,
    bed: 'Doppelbett',
    view: 'Stadt oder Garten',
    images: [
      '/assets/deluxe/zimmer1.png',
      '/assets/deluxe/zimmer1bett.png',
      '/assets/deluxe/kategorie1und2 front.png',
      '/assets/deluxe/kategorie 1und2kleider.png',
      '/assets/deluxe/bad1.png'
    ],
    amenities: [
      'Kostenloses WLAN',
      'Klimaanlage',
      'Flachbild-TV',
      'Minibar',
      'Kaffee-/Teemaschine',
      'Safe',
      'Regionale Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Haartrockner',
      'Schreibtisch'
    ]
  },
  
  // Premium Suite (1 Suite, 28 m²)
  {
    id: 'premium-suite',
    category: 'premium-suite',
    name: 'Premium Suite',
    shortDescription: 'Unsere stilvolle Premium Suite mit 28 m² bietet ein Doppelbett und ein Schlafsofa für bis zu 3 Personen.',
    description: 'Unsere Premium Suite bietet gehobenen Komfort auf 28 m² mit Doppelbett und einem zusätzlichen Schlafsofa für bis zu 3 Personen.',
    extendedDescription: 'Die geräumige Premium Suite besticht durch ihr elegantes Design und den zusätzlichen Wohnbereich. Das hochwertige Doppelbett und das bequeme Schlafsofa bieten Platz für bis zu 3 Personen. Genießen Sie den zusätzlichen Platz und die exklusiven Annehmlichkeiten.',
    price: 230,
    capacity: 3,
    size: 28,
    bed: 'Doppelbett + Schlafsofa',
    view: 'Stadt und Umgebung',
    images: [
      '/assets/premium-suite/bett3.png',
      '/assets/premium-suite/2bett3.png',
      '/assets/premium-suite/kleiderhaken3.png',
      '/assets/premium-suite/tisch3.png',
      '/assets/premium-suite/bad3.png'
    ],
    amenities: [
      'Kostenloses Highspeed-WLAN',
      'Klimaanlage',
      '42" Flachbild-TV',
      'Minibar',
      'Nespresso-Maschine',
      'Safe',
      'Premium Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Separater Wohnbereich',
      'Haartrockner',
      'Schreibtisch',
      'Bügeleisen und -brett'
    ]
  },
  
  // Premium Family Suite (1 Suite, größer)
  {
    id: 'premium-family-suite',
    category: 'premium-family',
    name: 'Premium Family Suite',
    shortDescription: 'Unsere großzügige Premium Family Suite bietet zwei Doppelbetten und ein Schlafsofa - ideal für Familien.',
    description: 'Die Premium Family Suite ist unsere geräumigste Unterkunft mit zwei separaten Doppelbetten und einem Schlafsofa, ideal für Familien oder kleine Gruppen.',
    extendedDescription: 'Die Premium Family Suite bietet großzügigen Platz für die ganze Familie oder kleine Gruppen. Mit zwei Doppelbetten und einem zusätzlichen Schlafsofa ist sie ideal für bis zu 6 Personen. Die Suite verfügt über einen separaten Wohnbereich und ein großzügiges Badezimmer mit Badewanne und Dusche.',
    price: 290,
    capacity: 6,
    size: 35,
    bed: '2 Doppelbetten + Schlafsofa',
    view: 'Stadt und Umgebung',
    images: [
      '/assets/premium-family-suite/bett4.png',
      '/assets/premium-family-suite/2bett4.png', 
      '/assets/premium-family-suite/bad4.png'
    ],
    amenities: [
      'Kostenloses Highspeed-WLAN',
      'Klimaanlage',
      'Zwei 42" Flachbild-TVs',
      'Minibar',
      'Nespresso-Maschine',
      'Safe',
      'Premium Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Separater Wohnbereich',
      'Haartrockner',
      'Schreibtisch',
      'Bügeleisen und -brett',
      'Spielecke für Kinder'
    ]
  }
];
