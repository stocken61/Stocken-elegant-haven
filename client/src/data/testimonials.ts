export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Markus S.',
    location: 'Deutschland',
    rating: 5,
    comment: 'Ein wunderbares Hotel mit atemberaubender Aussicht und hervorragendem Service. Das Zimmer war geräumig und komfortabel, das Restaurant hervorragend. Wir kommen definitiv wieder!'
  },
  {
    id: 2,
    name: 'Claire B.',
    location: 'Frankreich',
    rating: 5,
    comment: 'Die perfekte Mischung aus Tradition und modernem Komfort. Das Restaurant bietet hervorragende regionale Küche. Die Lage ist ideal für Wanderer und Naturliebhaber.'
  },
  {
    id: 3,
    name: 'Robert J.',
    location: 'Schweiz',
    rating: 4.5,
    comment: 'Wir haben unseren Aufenthalt im Stocken sehr genossen. Das Personal war außerordentlich freundlich und hilfsbereit. Die umliegende Landschaft ist einfach atemberaubend.'
  },
  {
    id: 4,
    name: 'Anna M.',
    location: 'Österreich',
    rating: 5,
    comment: 'Das Stocken Hotel hat all unsere Erwartungen übertroffen. Die Alpine Suite war traumhaft schön mit einem unglaublichen Blick auf die Berge. Das Essen im Restaurant war exzellent.'
  },
  {
    id: 5,
    name: 'David L.',
    location: 'Vereinigtes Königreich',
    rating: 4,
    comment: 'Ein charmantes Boutique-Hotel mit hervorragendem Service. Die Zimmer sind elegant und sauber. Der einzige kleine Nachteil war, dass das WLAN in unserem Zimmer etwas langsam war.'
  },
  {
    id: 6,
    name: 'Sophia T.',
    location: 'Italien',
    rating: 5,
    comment: 'Eine Oase der Ruhe in St. Gallen. Das Personal kümmerte sich um jedes Detail und machte unseren Aufenthalt unvergesslich. Das Abendessen im Hotelrestaurant mit Blick auf die Stadt war ein Highlight.'
  }
];
