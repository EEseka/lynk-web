import type { ImageMetadata } from 'astro';

import elegushiBeach from '../assets/spots/elegushi-beach.jpg';
import freedomPark from '../assets/spots/freedom-park.jpg';
import landmarkBeach from '../assets/spots/landmark-beach.jpg';
import lekkiConservationCentre from '../assets/spots/lekki-conservation-centre.jpg';
import lufasiNaturePark from '../assets/spots/lufasi-nature-park.jpg';
import muriOkunolaPark from '../assets/spots/muri-okunola-park.jpg';
import newAfrikaShrine from '../assets/spots/new-afrika-shrine.jpg';
import nikeArtGallery from '../assets/spots/nike-art-gallery.jpg';
import tarkwaBayBeach from '../assets/spots/tarkwa-bay-beach.jpg';
import thePlace from '../assets/spots/the-place.jpg';

type SpotCategory = 'Lounge' | 'Cafe' | 'Club' | 'Restaurant' | 'Activity' | 'Other';

export interface Spot {
  name: string;
  category: SpotCategory;
  area: string;
  distance: string;
  photo: ImageMetadata;
  credit: {
    file: string;
    author: string;
    license: string;
  };
}

export const LANDMARK_BEACH: Spot = {
  name: 'Landmark Beach',
  category: 'Activity',
  area: 'Oniru, Victoria Island',
  distance: '1.2 km',
  photo: landmarkBeach,
  credit: { file: 'Sunset at Landmark Beach.jpg', author: 'Kwadoskii', license: 'CC BY-SA 4.0' }
};

export const ELEGUSHI_BEACH: Spot = {
  name: 'Elegushi Beach',
  category: 'Activity',
  area: 'Lekki Phase 1',
  distance: '3.4 km',
  photo: elegushiBeach,
  credit: { file: 'Evening-at-elegushi-beach.jpg', author: 'S.aderogba', license: 'CC BY-SA 4.0' }
};

export const TARKWA_BAY_BEACH: Spot = {
  name: 'Tarkwa Bay Beach',
  category: 'Activity',
  area: 'Lagos Harbour',
  distance: '6.8 km',
  photo: tarkwaBayBeach,
  credit: { file: 'Tarkwa Bay Beach Front.jpg', author: 'Liesel81', license: 'CC BY-SA 4.0' }
};

export const TRENDING_SPOTS: Spot[] = [
  LANDMARK_BEACH,
  {
    name: 'Nike Art Gallery',
    category: 'Activity',
    area: 'Lekki Phase 1',
    distance: '4.1 km',
    photo: nikeArtGallery,
    credit: {
      file: 'Lagos Lekki Nike Art Gallery Aug 2026 IMG 6990b.jpg',
      author: 'FrankvEck',
      license: 'CC BY-SA 4.0'
    }
  },
  {
    name: 'The Place',
    category: 'Restaurant',
    area: 'Lekki',
    distance: '2.7 km',
    photo: thePlace,
    credit: { file: 'The Place Restaurant.jpg', author: 'Ernestblinqz', license: 'CC BY-SA 4.0' }
  },
  {
    name: 'Lekki Conservation Centre',
    category: 'Activity',
    area: 'Lekki',
    distance: '8.9 km',
    photo: lekkiConservationCentre,
    credit: { file: 'LEKKI CONSERVATION CENTRE (LCC) 10.jpg', author: 'Ashinze', license: 'CC BY-SA 4.0' }
  },
  {
    name: 'New Afrika Shrine',
    category: 'Club',
    area: 'Ikeja',
    distance: '19 km',
    photo: newAfrikaShrine,
    credit: { file: 'The New Afrika Shrine.jpg', author: 'Comradeayobami', license: 'CC BY-SA 4.0' }
  },
  ELEGUSHI_BEACH,
  {
    name: 'Freedom Park',
    category: 'Activity',
    area: 'Lagos Island',
    distance: '5.3 km',
    photo: freedomPark,
    credit: { file: 'Images of Freedom Park 23.jpg', author: 'ReoMartins', license: 'CC BY-SA 4.0' }
  },
  {
    name: 'Muri Okunola Park',
    category: 'Activity',
    area: 'Victoria Island',
    distance: '900 m',
    photo: muriOkunolaPark,
    credit: { file: 'Muri Okunola Park 08.jpg', author: 'ReoMartins', license: 'CC BY-SA 4.0' }
  },
  TARKWA_BAY_BEACH,
  {
    name: 'Lufasi Nature Park',
    category: 'Activity',
    area: 'Lekki-Epe Expressway',
    distance: '24 km',
    photo: lufasiNaturePark,
    credit: { file: 'Lufasi Nature Park, Lagos.jpg', author: 'Pharouk Damilola', license: 'CC BY-SA 4.0' }
  }
];
