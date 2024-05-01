import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils'
import HomeButton from '@/components/HomeButton.vue';

describe('HomeButton', () => {
  it('should render without crashing', () => {
    shallowMount(HomeButton)
  });

  it('should render the home button', () => {
    const component = shallowMount(HomeButton);

    expect(component.attributes('aria-label')).toBe('go back to home overview')
  })
});
