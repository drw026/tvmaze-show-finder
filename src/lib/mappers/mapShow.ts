import { Show, ShowResponse } from '../../types/Show';

export function mapShow(response: ShowResponse): Show {
  const cast = response._embedded.cast.map((item) => {
    return {
      character: {
        name: item.character.name || '',
      },
      person: {
        id: item.person.id,
        name: item.person.name || '',
        imageUrl:
          item.person.image?.medium ?? item.person.image?.original ?? '',
      },
    };
  });

  return {
    id: response.id,
    name: response.name || '',
    rating: response.rating?.average || null,
    started: response.premiered || '',
    ended: response.ended || '',
    imageUrl: response.image?.medium ?? response.image?.original ?? '',
    summary: response.summary || '',
    genre: response.genres || [],
    status: response.status || '',
    type: response.type || '',
    language: response.language || '',
    cast,
  };
}
