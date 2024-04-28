import { useQuery } from '@tanstack/vue-query';
import { VITE_TVMAZE_API_URL } from '../../common/constants';
import { ShowResponse } from '../../types/Show';
import { mapShow } from '../mappers/mapShow';
import { sleep, timer } from '../../common/utils';

export function useShow(showId: string) {
  const url = new URL(showId, `${VITE_TVMAZE_API_URL}/shows/`);
  url.searchParams.append('embed', 'cast')
  const fetchTime = timer();

  return useQuery({
    queryKey: ['show'],
    queryFn: async () => {
      fetchTime.start();
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json'
        }
      });
      const stopTime = fetchTime.stop();

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (stopTime < 500) await sleep(500 - stopTime);

      const data: ShowResponse = await response.json();
      return mapShow(data);
    }
  })
}
