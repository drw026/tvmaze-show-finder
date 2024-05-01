import { expect, it, describe } from 'vitest';
import { mapShows } from '../mapShows'
import { mockShowsResponse } from '@/mocks/mockShowsResponse';
import { mockShowsInGenre } from '@/mocks/mockShowsInGenre';
import { ShowResponse } from '@/types/Show';

describe('mapShows', () => {
  it('should map the raw data', () => {
    expect(mapShows(mockShowsResponse as unknown as ShowResponse[])).toEqual(mockShowsInGenre)
  })
});

