import { SearchShowsResponse, ShowItem } from '../../types/Show';

export function mapSearchShows(response: SearchShowsResponse[]): ShowItem[] {
  return response.map((item) => {
    return {
      id: item.show.id,
      name: item.show.name,
      imageUrl: item.show.image?.medium ?? ''
    }
  });
}
