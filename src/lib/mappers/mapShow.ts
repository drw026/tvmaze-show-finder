import { Show, ShowResponse } from '../../types/Show';

export function mapShow(response: ShowResponse): Show {
  return {
    id: response.id,
    name: response.name || '',
    rating: response.rating?.average || null,
    started: response.started || '',
    ended: response.ended || '',
    imageUrl: response.image?.medium ?? response.image?.original ?? '',
    summary: response.summary || '',
    genre: response.genres || []
  }
}
