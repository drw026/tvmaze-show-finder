import { useQuery } from '@tanstack/vue-query';
import { VITE_TVMAZE_API_URL } from '@/common/constants';
import { ShowResponse } from '@/types/Show';
import { mapShows } from '@/lib/mappers/mapShows';
import { sleep, timer } from '@/common/utils';

export function useShows() {
  const fetchTime = timer();

  return useQuery({
    queryKey: ['shows'],
    queryFn: async () => {
      fetchTime.start();
      const response = await fetch(`${VITE_TVMAZE_API_URL}/shows?page=0`, {
        headers: {
          Accept: 'application/json'
        }
      });
      const stopTime = fetchTime.stop();

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (stopTime < 500) await sleep(500 - stopTime);

      const data: ShowResponse[] = await response.json();
      return mapShows(data);
    }
  });
}
