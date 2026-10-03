import type { ImageMetadata } from 'astro';

import colourFestCap from '../assets/album/colour-fest-cap.jpg';
import colourFestCrowd from '../assets/album/colour-fest-crowd.jpg';
import colourFestDance from '../assets/album/colour-fest-dance.jpg';
import colourFestFacePaint from '../assets/album/colour-fest-face-paint.jpg';
import colourFestFriends from '../assets/album/colour-fest-friends.jpg';
import colourFestHeadscarf from '../assets/album/colour-fest-headscarf.jpg';
import colourFestHug from '../assets/album/colour-fest-hug.jpg';
import colourFestLaughing from '../assets/album/colour-fest-laughing.jpg';
import colourFestPowder from '../assets/album/colour-fest-powder.jpg';

export interface AlbumPhoto {
  photo: ImageMetadata;
  description: string;
  credit: {
    unsplashId: string;
    author: string;
  };
}

// One afternoon at a colour festival in Lagos, shown in the album demo
export const ALBUM_NAME = 'Colour Fest Saturday';

export const ALBUM_PHOTOS: AlbumPhoto[] = [
  {
    photo: colourFestFriends,
    description: 'Four friends covered in colour powder',
    credit: { unsplashId: 'j-8eSzoys0w', author: 'Ben Iwara' }
  },
  {
    photo: colourFestPowder,
    description: 'Two friends blowing colour powder at the camera',
    credit: { unsplashId: '1993JqoAeB0', author: 'Ben Iwara' }
  },
  {
    photo: colourFestFacePaint,
    description: 'A friend getting her face painted',
    credit: { unsplashId: 'ySOMIknDp60', author: 'Ben Iwara' }
  },
  {
    photo: colourFestHug,
    description: 'Two friends hugging at the festival',
    credit: { unsplashId: 'Hyhw1k25lJ0', author: 'Ben Iwara' }
  },
  {
    photo: colourFestLaughing,
    description: 'Two friends laughing with colour on their faces',
    credit: { unsplashId: 'QvuCtHez1Jo', author: 'Ben Iwara' }
  },
  {
    photo: colourFestCrowd,
    description: 'Friends in the festival crowd',
    credit: { unsplashId: 'EHOIzdWpdT4', author: 'Ben Iwara' }
  },
  {
    photo: colourFestCap,
    description: 'A friend in a paint splashed cap',
    credit: { unsplashId: 'oXa8Fawklro', author: 'Ben Iwara' }
  },
  {
    photo: colourFestHeadscarf,
    description: 'A friend in a headscarf covered in colour',
    credit: { unsplashId: 'o6uRkgJai7o', author: 'Ben Iwara' }
  },
  {
    photo: colourFestDance,
    description: 'Dancing in the crowd',
    credit: { unsplashId: 'h9JJTIWgjUo', author: 'Ben Iwara' }
  }
];
