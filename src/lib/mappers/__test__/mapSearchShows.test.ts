import { expect, describe, it } from 'vitest';
import { mapSearchShows } from '../mapSearchShows';
import { SearchShowsResponse, ShowResponse } from '../../../types/Show';
import { mockSearchShowsResponse } from '../../../mocks/mockSearchShowsResponse';
import { mockSearchShows } from '../../../mocks/mockSearchShows';

describe('mapShow', () => {
  it('should map the raw data', () => {
    expect(mapSearchShows(mockSearchShowsResponse as unknown as SearchShowsResponse[])).toEqual(mockSearchShows)
  });
});
