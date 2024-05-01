import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Search from '@/components/Search.vue';
import router from '@/router';

describe('Search component', () => {
  it('should render without crashing', () => {
    mount(Search, {
      global: {
        plugins: [router]
      },
    });
  });

  it('should render button and empty input', () => {
    const wrapper = mount(Search, {
      global: {
        plugins: [router]
      },
    });
    const button = wrapper.find('button');
    const input = wrapper.find('input');

    expect(button.text()).toBe('Search');
    expect(input.element.value).toBe('');
  });
});
