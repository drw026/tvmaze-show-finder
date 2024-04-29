import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CastCard from '../CastCard.vue';

describe('CastCard', () => {
  it('should render without crashing', () => {
    const wrapper = mount(CastCard, {
      props: {
        cast: {
          person: {
            id: 1,
            imageUrl: 'link/to/image',
            name: 'John Doe'
          },
          character: {
            name: 'Dwight Schrute'
          }
        }
      }
    });
  });

  it('should render with props', () => {
    const wrapper = mount(CastCard, {
      props: {
        cast: {
          person: {
            id: 1,
            imageUrl: 'link/to/image',
            name: 'John Doe'
          },
          character: {
            name: 'Dwight Schrute'
          }
        }
      }
    });

    const image = wrapper.find('img');

    expect(wrapper.text()).toContain('John Doe');
    expect(wrapper.text()).toContain('Dwight Schrute');
    expect(image.attributes('src')).toEqual('link/to/image');
    expect(image.attributes('alt')).toEqual('John Doe');
  })

  it('should not render the image when imageUrl is empty', () => {
    const wrapper = mount(CastCard, {
      props: {
        cast: {
          person: {
            id: 1,
            imageUrl: '',
            name: 'John Doe'
          },
          character: {
            name: 'Dwight Schrute'
          }
        }
      }
    });

    expect(wrapper.find('img').exists()).toBe(false);
  })
});
