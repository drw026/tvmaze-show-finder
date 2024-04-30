import { describe, it, expect } from 'vitest';
import Page from '../Page.vue';
import { mount } from '@vue/test-utils';

describe('Page', () => {
  it('should render page with slots', () => {
    const wrapper = mount(Page, {
      slots: {
        default: '<div>main content</div>',
        search: '<div>search</div>'
      }
    });

    expect(wrapper.html()).toContain('<div>main content</div>');
    expect(wrapper.html()).toContain('<div>search</div>');
  });
});
