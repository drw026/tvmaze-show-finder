import { describe, it, expect, vi } from 'vitest';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ShowCard from '../ShowCard.vue';

describe('ShowCard', () => {
  it('should render without crashing', () => {
    const wrapper = shallowMount(ShowCard, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
      },
      props: {
        show: {
          id: 1,
          name: 'Test Show',
          imageUrl: 'test.jpg',
        },
      },
    });
  });

  it('should render with props', () => {
    const wrapper = shallowMount(ShowCard, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
      },
      props: {
        show: {
          id: 1,
          name: 'Test Show',
          imageUrl: 'test.jpg',
        },
      },
    });

    const image = wrapper.find('img');

    expect(wrapper.text()).toContain('Test Show');
    expect(image.attributes('src')).toEqual('test.jpg');
    expect(image.attributes('alt')).toEqual('Test Show');
    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: 'show',
      params: { id: 1 }
    })
  });

  it('should not render image when imageUrl is empty', () => {
    const wrapper = shallowMount(ShowCard, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
      },
      props: {
        show: {
          id: 1,
          name: 'Test Show',
          imageUrl: '',
        },
      },
    });

    expect(wrapper.find('img').exists()).toBe(false);
  })
});
