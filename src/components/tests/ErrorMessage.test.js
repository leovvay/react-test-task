import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ErrorMessage from '../ErrorMessage'

Enzyme.configure({ adapter: new Adapter() })

describe('component', () => {
  it('should render full view', () => {
    const props = {err: 'err'}

    const enzymeWrapper = shallow(<ErrorMessage {...props} />)

    expect(enzymeWrapper.text()).toBe(props.err)
  })
})
