import { describe, expect, it, vi, beforeEach } from 'vitest'
import { Show } from '@/types/Show';
import { mount, shallowMount } from '@vue/test-utils';
import ShowDetails from '@/components/ShowDetails/ShowDetails.vue';
import { getMockShow, mockShow } from '@/mocks/mockShow';

const mockUseShow = vi.hoisted(
  (): { isLoading: boolean; data: Show | null } => ({
    isLoading: false,
    data: null,
  }),
);

const mockUseRoute = vi.hoisted(() => ({
  params: {
    id: '',
  },
}));

vi.mock('@/lib/services/useShow', () => ({
  useShow: () => {
    return {
      isLoading: mockUseShow.isLoading,
      data: mockUseShow.data,
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

describe('ShowDetail', () => {
  beforeEach(() => {
    mockUseShow.data = null;
    mockUseShow.isLoading = false;
    vi.clearAllMocks();
    vi.resetAllMocks();
  })

  it('should render without crashing', () => {
    shallowMount(ShowDetails);
  });

  it('should show loading spinner when loading', () => {
    mockUseShow.isLoading = true;

    const wrapper = mount(ShowDetails);

    expect(wrapper.text()).toContain('Loading...');
  });

  it('should show "no data" when not loading and data is empty', () => {
    // mockUseShow.isLoading = false;
    mockUseShow.data = null;

    const wrapper = shallowMount(ShowDetails);

    expect(wrapper.text()).toContain('No data');
  });

  it('should show show data', () => {
    mockUseShow.data = getMockShow({
        id: 1,
        name: "The Test Show",
        rating: 8.5,
        started: "2005-03-24",
        ended: "",
        imageUrl: "path/to/image",
        summary: "<p>The Test Show summary</p>",
        genre: [
          "Comedy",
        ],
        status: "Running",
        type: "Scripted",
        language: "English",
    });

    const wrapper = shallowMount(ShowDetails);
    const generalInformation = wrapper.find('#general-show-information');

    expect(wrapper.find('h1').text()).toBe('The Test Show');
    expect(wrapper.find('img').attributes('src')).toBe('path/to/image');
    expect(wrapper.find('img').attributes('alt')).toBe('The Test Show');
    expect(wrapper.find('article').html()).toContain('<p>The Test Show summary</p>')

    expect(generalInformation.find('h2').text()).toBe('Show Info');
    expect(generalInformation.text()).toContain('2005-03-24');
    expect(generalInformation.text()).toContain('Running');
    expect(generalInformation.text()).toContain('Comedy');
    expect(generalInformation.text()).toContain('Scripted');
    expect(generalInformation.text()).toContain('English');

    expect(wrapper.find('#cast').exists()).toBe(true);
  });

  it('should show unknown when started is empty', () => {
    mockUseShow.data = getMockShow({
      started: ''
    })

    const wrapper = shallowMount(ShowDetails);
    const generalInformation = wrapper.find('#general-show-information');

    expect(generalInformation.text()).toContain('unknown');
  });

  it('should show end date', () => {
    mockUseShow.data = getMockShow({
      status: 'Ended',
      ended: '2024-01-01'
    })

    const wrapper = shallowMount(ShowDetails);
    const generalInformation = wrapper.find('#general-show-information');

    expect(generalInformation.text()).toContain('Ended (2024-01-01)');
  });

  it('should show multiple genres', () => {
    mockUseShow.data = getMockShow({
      genre: ['Action', 'Comedy', 'Drama']
    })

    const wrapper = shallowMount(ShowDetails);
    const generalInformation = wrapper.find('#general-show-information');

    expect(generalInformation.text()).toContain('Action / Comedy / Drama')
  });

  it('should not show Cast when there are no cast', () => {
    mockUseShow.data = getMockShow({
      cast: []
    })

    const wrapper = shallowMount(ShowDetails);
    expect(wrapper.find('#cast').exists()).toBe(false);
  });
});
