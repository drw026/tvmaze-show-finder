import { useQuery } from '@tanstack/vue-query';
import { VITE_TVMAZE_API_URL } from '../../common/constants';
import { ShowResponse } from '../../types/Show';
import { mapShows } from '../mappers/mapShows';

export function useShows() {
  return useQuery({
    queryKey: ['shows'],
    queryFn: async () => {
      const response = await fetch(`${VITE_TVMAZE_API_URL}/shows?page=0`, {
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: ShowResponse[] = await response.json();
      return mapShows(data);
    }
  });
}
