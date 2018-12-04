import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { MainPage } from '../'

Enzyme.configure({ adapter: new Adapter() })

describe('component', () => {
  it('should render full view and react to button click', () => {
    const props = {history: {push: jest.fn()}}

    const enzymeWrapper = mount(<MainPage {...props} />)

    const input = enzymeWrapper.find('input')
    const formProps = enzymeWrapper.find('form').props()
    input.instance().value = 'user'
    input.simulate('change')
    formProps.onSubmit({preventDefault: () => {}})
    expect(props.history.push).toBeCalledTimes(1)
    expect(enzymeWrapper.find('button')).toHaveLength(1)
  })
})
