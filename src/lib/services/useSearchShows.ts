import { useQuery } from '@tanstack/vue-query';
import { VITE_TVMAZE_API_URL } from '../../common/constants';
import { SearchShowsResponse } from '../../types/Show';
import { mapSearchShows } from '../mappers/mapSearchShows';
import { type Ref, toValue } from 'vue';
import { sleep, timer } from '../../common/utils';

export function useSearchShows(searchQuery: Ref<string>) {
  const query = new URLSearchParams({
    q: toValue(searchQuery)
  }).toString();
  const fetchTime = timer();

  return useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      fetchTime.start();
      const response = await fetch(`${VITE_TVMAZE_API_URL}/search/shows?${query}`, {
        headers: {
          Accept: 'application/json'
        }
      });
      const stopTime = fetchTime.stop();

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (stopTime < 500) await sleep(500 - stopTime);

      const data: SearchShowsResponse[] = await response.json();
      return mapSearchShows(data);
    }
  });
}
