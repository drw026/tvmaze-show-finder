import { useQuery } from '@tanstack/vue-query';
import { VITE_TVMAZE_API_URL } from '../../common/constants';
import { ShowResponse } from '../../types/Show';
import { mapShow } from '../mappers/mapShow';

export function useShow(showId: string) {
  const url = new URL(showId, `${VITE_TVMAZE_API_URL}/shows/`);

  return useQuery({
    queryKey: ['show'],
    queryFn: async () => {
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: ShowResponse = await response.json();
      return mapShow(data);
    }
  })
}
