export interface Hero {
  small: string;
  large: string;
}

export interface Image {
  thumbnail: string;
  hero: Hero;
  gallery: string;
}

export interface Artist {
  name: string;
  image: string;
}

export interface Painting {
  slug: string;
  name: string;
  year: number;
  description: string;
  source: string;
  artist: Artist;
  images: Image;
}
