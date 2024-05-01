import { expect, describe, it } from 'vitest';
import { mapShow } from '../mapShow';
import { mockShowResponse } from '@/mocks/mockShowResponse';
import { mockShow } from '@/mocks/mockShow';
import { ShowResponse } from '@/types/Show';

describe('mapShow', () => {
  it('should map the raw data', () => {
    expect(mapShow(mockShowResponse as unknown as ShowResponse)).toEqual(mockShow)
  });
});
