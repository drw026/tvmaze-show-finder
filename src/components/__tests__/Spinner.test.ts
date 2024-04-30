import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Spinner from '../Spinner.vue';

describe('Spinner', () => {
  it('should render without crashing', () => {
    shallowMount(Spinner);
  });

  it('should display spinner with hidden loading text', () => {
    const wrapper = shallowMount(Spinner);
    expect(wrapper.find('[role="status"]').html()).toContain('Loading...');
  });
});

