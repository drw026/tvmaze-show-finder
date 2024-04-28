import { useQuery } from '@tanstack/vue-query';
import { VITE_TVMAZE_API_URL } from '../../common/constants';
import { SearchShowsResponse } from '../../types/Show';
import { mapSearchShows } from '../mappers/mapSearchShows';
import { type Ref, toValue } from 'vue';

export function useSearchShows(searchQuery: Ref<string>) {
  const query = new URLSearchParams({
    q: toValue(searchQuery)
  }).toString();

  return useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      const response = await fetch(`${VITE_TVMAZE_API_URL}/search/shows?${query}`, {
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: SearchShowsResponse[] = await response.json();
      return mapSearchShows(data);
    }
  });
}
