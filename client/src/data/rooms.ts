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
  // Komfort Zimmer (3 Zimmer, 18 m²)
  {
    id: 'comfort-room-1',
    category: 'comfort',
    name: 'Komfort Zimmer',
    shortDescription: 'Unser Komfort Zimmer mit 18 m²',
    description: 'Unser gemütliches Komfort Zimmer bietet Ihnen alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    extendedDescription: 'Das Komfort Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das komfortable Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt.',
    price: 150,
    capacity: 2,
    size: 18,
    bed: 'Doppelbett',
    view: 'Stadt',
    images: [
      '/images/zimmer1.webp',
      '/images/2bett3.webp',
      '/images/2bett4.webp',
      '/images/bad1.webp',
      '/images/bathroom.webp'
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
    id: 'comfort-room-2',
    category: 'comfort',
    name: 'Komfort Zimmer',
    shortDescription: 'Unser Komfort Zimmer mit 18 m²',
    description: 'Unser gemütliches Komfort Zimmer bietet Ihnen alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    extendedDescription: 'Das Komfort Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das komfortable Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt.',
    price: 150,
    capacity: 2,
    size: 18,
    bed: 'Doppelbett',
    view: 'Stadt',
    images: [
      '/images/room_main.webp',
      '/images/restaurant.webp',
      '/images/hero_main.webp',
      '/images/facade.webp'
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
    id: 'comfort-room-3',
    category: 'comfort',
    name: 'Komfort Zimmer',
    shortDescription: 'Unser Komfort Zimmer mit 18 m²',
    description: 'Unser gemütliches Komfort Zimmer bietet Ihnen alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    extendedDescription: 'Das Komfort Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das komfortable Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt.',
    price: 150,
    capacity: 2,
    size: 18,
    bed: 'Doppelbett',
    view: 'Stadt',
    images: [
      '/images/room_main.webp',
      '/images/restaurant.webp',
      '/images/hero_main.webp',
      '/images/facade.webp'
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
    name: 'Deluxe Zimmer',
    shortDescription: 'Unser Deluxe Zimmer mit 23 m²',
    description: 'Unser Deluxe Zimmer bietet alles für einen angenehmen Aufenthalt mit hochwertigem Komfort und 23 m² Wohnfläche.',
    extendedDescription: 'Das Deluxe Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt oder Umgebung.',
    price: 195,
    capacity: 2,
    size: 23,
    bed: 'Doppelbett',
    view: 'Stadt oder Garten',
    images: [
      '/images/deluxe/zimmer1.webp',
      '/images/deluxe/zimmer1bett.webp',
      '/images/deluxe/kategorie1und2 front.webp',
      '/images/deluxe/kategorie 1und2kleider.webp',
      '/images/deluxe/bad1.webp'
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
    name: 'Deluxe Zimmer',
    shortDescription: 'Unser Deluxe Zimmer mit 23 m²',
    description: 'Unser Deluxe Zimmer bietet alles für einen angenehmen Aufenthalt mit hochwertigem Komfort und 23 m² Wohnfläche.',
    extendedDescription: 'Das Deluxe Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt oder Umgebung.',
    price: 195,
    capacity: 2,
    size: 23,
    bed: 'Doppelbett',
    view: 'Stadt oder Garten',
    images: [
      '/images/deluxe/zimmer1.webp',
      '/images/deluxe/zimmer1bett.webp',
      '/images/deluxe/kategorie1und2 front.webp',
      '/images/deluxe/kategorie 1und2kleider.webp',
      '/images/deluxe/bad1.webp'
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
    name: 'Deluxe Zimmer',
    shortDescription: 'Unser Deluxe Zimmer mit 23 m²',
    description: 'Unser Deluxe Zimmer bietet alles für einen angenehmen Aufenthalt mit hochwertigem Komfort und 23 m² Wohnfläche.',
    extendedDescription: 'Das Deluxe Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse Doppelbett verspricht erholsamen Schlaf nach einem Tag in der Stadt oder Umgebung.',
    price: 195,
    capacity: 2,
    size: 23,
    bed: 'Doppelbett',
    view: 'Stadt oder Garten',
    images: [
      '/images/deluxe/zimmer1.webp',
      '/images/deluxe/zimmer1bett.webp',
      '/images/deluxe/kategorie1und2 front.webp',
      '/images/deluxe/kategorie 1und2kleider.webp',
      '/images/deluxe/bad1.webp'
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
    shortDescription: 'Unsere Premium Suite mit 28 m²',
    description: 'Unsere Premium Suite bietet gehobenen Komfort auf 28 m² mit Doppelbett und einem zusätzlichen Schlafsofa für bis zu 3 Personen.',
    extendedDescription: 'Die geräumige Premium Suite besticht durch ihr elegantes Design und den zusätzlichen Wohnbereich. Das hochwertige Doppelbett und das bequeme Schlafsofa bieten Platz für bis zu 3 Personen. Genießen Sie den zusätzlichen Platz und die exklusiven Annehmlichkeiten.',
    price: 230,
    capacity: 3,
    size: 28,
    bed: 'Doppelbett + Schlafsofa',
    view: 'Stadt & Umgebung',
    images: [
      '/images/premium-suite/bett3.webp',
      '/images/premium-suite/2bett3.webp',
      '/images/premium-suite/kleiderhaken3.webp',
      '/images/premium-suite/tisch3.webp',
      '/images/premium-suite/bad3.webp'
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
    name: 'Familien Suite',
    shortDescription: 'Unsere Familien Suite mit 49 m²',
    description: 'Die Premium Familien Suite ist unsere geräumigste Unterkunft mit zwei separaten Doppelbetten und einem Schlafsofa, ideal für Familien oder kleine Gruppen.',
    extendedDescription: 'Die Premium Familien Suite bietet großzügigen Platz für die ganze Familie oder kleine Gruppen. Mit zwei Doppelbetten und einem zusätzlichen Schlafsofa ist sie ideal für bis zu 6 Personen. Die Suite verfügt über einen separaten Wohnbereich und ein großzügiges Badezimmer mit Badewanne und Dusche.',
    price: 290,
    capacity: 6,
    size: 49,
    bed: '2 Doppelbetten + Schlafsofa',
    view: 'Stadt & Umgebung',
    images: [
      '/images/premium-family-suite/family_room.webp',
      '/images/premium-family-suite/2bett4.webp',
      '/images/premium-family-suite/bad4.webp'
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
