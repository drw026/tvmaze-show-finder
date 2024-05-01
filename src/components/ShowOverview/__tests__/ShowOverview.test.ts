import { vi, it, describe, expect, beforeEach } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';
import ShowOverview from '../ShowOverview.vue';
import { ShowsInGenre } from '../../../types/Show';

const mockUseShows = vi.hoisted(
  (): { isLoading: boolean; data: ShowsInGenre[] | null } => ({
    isLoading: false,
    data: [],
  }),
);

vi.mock('../../../lib/services/useShows', () => ({
  useShows: () => {
    return {
      isLoading: mockUseShows.isLoading,
      data: mockUseShows.data,
    };
  },
}));

describe('ShowOverview', () => {
  beforeEach(() => {
    mockUseShows.data = null;
    mockUseShows.isLoading = false;
    vi.clearAllMocks();
    vi.resetAllMocks();
  })

  it('should render without crashing', () => {
    mount(ShowOverview);
  });

  it('should show loading spinner when loading', () => {
    mockUseShows.isLoading = true;

    const wrapper = mount(ShowOverview);

    expect(wrapper.text()).toContain('Loading...');
  });

  it('should show "no data" when not loading and data is empty', () => {
    mockUseShows.isLoading = false;
    mockUseShows.data = null;

    const wrapper = shallowMount(ShowOverview);

    expect(wrapper.text()).toContain('No data');
  });

  it('should show data genre with a show card', () => {
    mockUseShows.isLoading = false;
    mockUseShows.data = [
      {
        genreName: 'Genre',
        shows: [
          {
            id: 1,
            name: 'Show',
            imageUrl: 'imageUrl',
          },
        ],
      },
    ];

    const wrapper = shallowMount(ShowOverview);
    const genre = wrapper.find('h2');

    expect(genre.text()).toBe('Genre');
  });
});
