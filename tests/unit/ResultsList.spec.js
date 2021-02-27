import { shallowMount } from '@vue/test-utils';
import ResultsList from '@/components/ResultsList.vue';

describe('ResultsList.vue', () => {
  const data = ['dog', 'god'];

  it('should match snapshot', () => {
    const result = shallowMount(ResultsList, {
      propsData: {
        data,
      }
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('renders props.data when passed', () => {
    const wrapper = shallowMount(ResultsList, {
      propsData: {
        data
      }
    });

    expect(typeof wrapper.props().data).toBe('object');
    expect(wrapper.props().data).toBe(data);
    expect(wrapper.find('[data-test="result-data-item"]').text()).toEqual(
      'dog'
    );
  });
});
