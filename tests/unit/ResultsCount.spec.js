import { shallowMount } from '@vue/test-utils';
import ResultsCount from '@/components/ResultsCount.vue';

describe('ResultsCount.vue', () => {
  it('should match snapshot', () => {
    const result = shallowMount(ResultsCount, {
      propsData: {
        count: 2
      }
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('renders props.count when passed', () => {
    const count = 2;
    const wrapper = shallowMount(ResultsCount, {
      propsData: {
        count
      }
    });

    expect(typeof wrapper.props().count).toBe('number');
    expect(wrapper.props().count).toBe(count);
    expect(wrapper.find('[data-test="results-count"]').text()).toEqual(
      '2 results'
    );
  });
});
