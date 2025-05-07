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
  {
    id: 'standard-room',
    category: 'standard',
    name: 'Standard Zimmer',
    shortDescription: 'Unser gemütliches Standardzimmer bietet alles, was Sie für einen angenehmen Aufenthalt benötigen. Mit Blick auf den Garten.',
    description: 'Unser gemütliches Standardzimmer bietet Ihnen alles, was Sie für einen angenehmen Aufenthalt benötigen.',
    extendedDescription: 'Das Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse Queen-Size-Bett verspricht erholsamen Schlaf nach einem Tag in der Natur.',
    price: 180,
    capacity: 2,
    size: 25,
    bed: 'Queen-Bett',
    view: 'Garten',
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
    id: 'deluxe-room',
    category: 'deluxe',
    name: 'Deluxe Zimmer mit Bergblick',
    shortDescription: 'Unser großzügiges Deluxe-Zimmer mit eigenem Balkon bietet einen herrlichen Blick auf die Berge und gehobenen Komfort.',
    description: 'Unser Deluxe Zimmer bietet alles für einen angenehmen Aufenthalt mit hochwertigem Komfort. Genießen Sie den atemberaubenden Blick auf die Schweizer Alpen von Ihrem privaten Balkon aus.',
    extendedDescription: 'Das Zimmer ist mit hochwertigen Materialien ausgestattet und verbindet traditionelles Schweizer Design mit modernem Komfort. Das luxuriöse King-Size-Bett verspricht erholsamen Schlaf nach einem Tag in der Natur.',
    price: 240,
    capacity: 2,
    size: 35,
    bed: 'King-Bett',
    view: 'Berge',
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
      'Balkon mit Bergblick',
      'Regionale Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Haartrockner',
      'Schreibtisch'
    ]
  },
  {
    id: 'alpine-suite',
    category: 'suite',
    name: 'Alpine Suite',
    shortDescription: 'Unsere luxuriöse Suite bietet separaten Wohnbereich, Premium-Annehmlichkeiten und einen atemberaubenden Panoramablick.',
    description: 'Unsere luxuriöse Alpine Suite bietet Ihnen separaten Wohnbereich, Premium-Annehmlichkeiten und einen atemberaubenden Panoramablick auf die Schweizer Alpen.',
    extendedDescription: 'Die geräumige Suite besticht durch ihren separaten Wohnbereich und das elegante Dekor, das Alpencharme mit modernem Luxus verbindet. Vom eigenen großzügigen Balkon aus genießen Sie einen spektakulären Panoramablick auf die umliegende Berglandschaft.',
    price: 320,
    capacity: 4,
    size: 50,
    bed: 'King-Bett + Schlafsofa',
    view: 'Panorama-Bergblick',
    images: [
      '/assets/room_main.webp',
      '/assets/restaurant.webp',
      '/assets/hero_main.png',
      '/assets/facade.webp'
    ],
    amenities: [
      'Kostenloses Highspeed-WLAN',
      'Klimaanlage',
      '55" Flachbild-TV',
      'Minibar',
      'Nespresso-Maschine',
      'Safe',
      'Großer Balkon mit Panoramablick',
      'Premium Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Separater Wohnbereich',
      'Haartrockner',
      'Schreibtisch',
      'Bügeleisen und -brett'
    ]
  },
  {
    id: 'family-room',
    category: 'deluxe',
    name: 'Familienzimmer',
    shortDescription: 'Unser geräumiges Familienzimmer bietet genug Platz für die ganze Familie mit zwei verbundenen Räumen.',
    description: 'Unser geräumiges Familienzimmer bietet ausreichend Platz für bis zu 4 Personen und besteht aus zwei miteinander verbundenen Räumen.',
    extendedDescription: 'Das Familienzimmer ist ideal für Familien oder kleine Gruppen. Es besteht aus einem Hauptzimmer mit einem King-Size-Bett und einem zweiten Raum mit zwei Einzelbetten. Beide Räume teilen sich ein großes Badezimmer mit Badewanne und Dusche.',
    price: 280,
    capacity: 4,
    size: 45,
    bed: 'King-Bett + 2 Einzelbetten',
    view: 'Garten und Berge',
    images: [
      '/assets/room_main.webp',
      '/assets/restaurant.webp',
      '/assets/hero_main.png',
      '/assets/facade.webp'
    ],
    amenities: [
      'Kostenloses WLAN',
      'Klimaanlage',
      'Zwei Flachbild-TVs',
      'Minibar',
      'Kaffee-/Teemaschine',
      'Safe',
      'Balkon mit Bergblick',
      'Regionale Naturprodukte im Bad',
      'Bademantel und Hausschuhe',
      'Haartrockner',
      'Spielecke für Kinder'
    ]
  },
  {
    id: 'panorama-suite',
    category: 'suite',
    name: 'Panorama Suite',
    shortDescription: 'Unsere exklusive Panorama Suite bietet ultimativen Luxus mit eigenem Whirlpool, Kamin und spektakulärem Blick.',
    description: 'Die exklusive Panorama Suite repräsentiert den Höhepunkt des Luxus im Stocken Hotel mit eigenem Whirlpool und Kamin.',
    extendedDescription: 'Diese luxuriöse Suite bietet einen atemberaubenden 180-Grad-Blick auf die Alpenberge. Genießen Sie den privaten Whirlpool auf Ihrer Terrasse, entspannen Sie vor dem echten Kamin im eleganten Wohnbereich oder verwöhnen Sie sich mit einem Bad in der freistehenden Badewanne mit Bergblick.',
    price: 450,
    capacity: 2,
    size: 75,
    bed: 'Super-King-Bett',
    view: '180° Panorama-Bergblick',
    images: [
      '/assets/room_main.webp',
      '/assets/restaurant.webp',
      '/assets/hero_main.png',
      '/assets/facade.webp'
    ],
    amenities: [
      'Kostenloses Highspeed-WLAN',
      'Klimaanlage',
      '65" OLED-TV',
      'Premium-Minibar',
      'Nespresso-Maschine & Teebar',
      'Safe',
      'Große Terrasse mit privatem Whirlpool',
      'Luxuriöse Bio-Pflegeprodukte',
      'Echter Kamin',
      'Freistehende Badewanne mit Bergblick',
      'Separater Wohn- und Essbereich',
      'Begehbarer Kleiderschrank',
      'Bügeleisen und -brett',
      'Digitaler Concierge-Service'
    ]
  },
  {
    id: 'single-room',
    category: 'standard',
    name: 'Einzelzimmer',
    shortDescription: 'Unser komfortables Einzelzimmer ist ideal für Alleinreisende und bietet alle wesentlichen Annehmlichkeiten.',
    description: 'Unser komfortables Einzelzimmer ist ideal für Geschäftsreisende oder Alleinreisende und bietet alle wesentlichen Annehmlichkeiten für einen angenehmen Aufenthalt.',
    extendedDescription: 'Obwohl kompakter im Vergleich zu unseren anderen Zimmern, wurde das Einzelzimmer sorgfältig gestaltet, um Komfort und Funktionalität zu gewährleisten. Es verfügt über ein komfortables Einzelbett mit hochwertiger Matratze, einen Arbeitsbereich und ein modernes Badezimmer.',
    price: 150,
    capacity: 1,
    size: 18,
    bed: 'Queen-Einzelbett',
    view: 'Dorf',
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
      'Schreibtisch',
      'Verdunkelungsvorhänge'
    ]
  }
];
