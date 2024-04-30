import { describe, it, expect, vi } from 'vitest';
import { ShowItem, ShowsInGenre } from '../../../types/Show';
import { mount, shallowMount } from '@vue/test-utils';
import SearchOverview from '../SearchOverview.vue';

const mockUseSearchShows = vi.hoisted(
  (): { isLoading: boolean; data: ShowItem[] | null } => ({
    isLoading: false,
    data: [],
  }),
);

const mockUseRoute = vi.hoisted(() => ({
  params: {
    query: '',
  },
}));

vi.mock('../../../lib/services/useSearchShows', () => ({
  useSearchShows: () => {
    return {
      isLoading: mockUseSearchShows.isLoading,
      data: mockUseSearchShows.data,
    };
  },
}));

vi.mock('vue-router', () => ({
  useRoute: () => {
    return {
      params: mockUseRoute.params,
    };
  },
}));

describe('SearchOverview', () => {
  it('should render without crashing', () => {
    shallowMount(SearchOverview);
  });

  it('should show loading spinner when loading', () => {
    mockUseSearchShows.isLoading = true;

    const wrapper = mount(SearchOverview);

    expect(wrapper.text()).toContain('Loading...');
  });

  it('should show "no data" when not loading and data is empty', () => {
    mockUseSearchShows.isLoading = false;
    mockUseSearchShows.data = null;

    const wrapper = shallowMount(SearchOverview);

    expect(wrapper.text()).toContain('No shows found');
  });

  it('should show data in results', () => {
    mockUseSearchShows.isLoading = false;
    mockUseSearchShows.data = [{
      id: 1,
      name: 'Show',
      imageUrl: 'imageurl'
    }];

    const wrapper = shallowMount(SearchOverview);

    expect(wrapper.find('section#results').exists()).toBe(true);
  });
});
