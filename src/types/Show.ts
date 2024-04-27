export type Show = {
  id: number;
  name: string;
  rating: number | null;
  started: string;
  ended: string;
  imageUrl: string;
  summary: string;
  genre: string[];
}
export type ShowItem = Pick<Show, 'id' | 'name' | 'imageUrl'>

export type ShowResponse = {
  id: number;
  name: string;
  rating: {
    average: number;
  }
  started: string;
  ended: string;
  image: ShowImageReponse | null;
  summary: string;
  genres: string[];
}

export type ShowImageReponse = {
  medium: string;
  original: string;
}

export type ShowsInGenre = {
  genreName: string;
  shows: ShowItem[];
}

export type SearchShowsResponse = {
  score: number;
  show: ShowResponse;
}
