export type Show = {
  id: number;
  name: string;
  rating: number | null;
  ended: string;
  imageUrl: string;
  summary: string;
  genre: string[];
  started: string;
  status: string;
  type: string;
  language: string;
  cast: Cast[];
};

export type Cast = {
  character: {
    name: string;
  };
  person: {
    id: number;
    name: string;
    imageUrl: string;
  };
};

export type ShowItem = Pick<Show, 'id' | 'name' | 'imageUrl'>;

export type ShowResponse = {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  premiered: string;
  ended: string;
  image: ImageResponse | null;
  summary: string;
  genres: string[];
  status: string;
  type: string;
  language: string;
  _embedded: {
    cast: CastResponse[];
  };
};

export type ImageResponse = {
  medium: string;
  original: string;
};

export type ShowsInGenre = {
  genreName: string;
  shows: ShowItem[];
};

export type SearchShowsResponse = {
  score: number;
  show: ShowResponse;
};

export type CastResponse = {
  character: {
    name: string;
  };
  person: {
    id: number;
    name: string;
    image: ImageResponse | null;
  };
};
