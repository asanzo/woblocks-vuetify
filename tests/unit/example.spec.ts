import { shallowMount } from '@vue/test-utils'
import HeaderContent from '@/components/HeaderContent.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Woblocks'
    const wrapper = shallowMount(HeaderContent, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
