type Show = {
  id: number;
  name: string;
  rating: number;
  started: string;
  ended: string;
  imageUrl: string;
  summary: string;
}

type ShowItem = Pick<Show, 'id' | 'name' | 'imageUrl'>

type ShowResponse = {
  id: number;
  name: string;
  rating: number;
  started: string;
  ended: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
