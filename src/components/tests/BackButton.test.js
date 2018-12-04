import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BackButton from '../BackButton'

Enzyme.configure({ adapter: new Adapter() })

describe('component', () => {
  it('should render full view', () => {
    const props = { to: '/test' }

    const enzymeWrapper = shallow(<BackButton {...props} />)

    expect(enzymeWrapper.props().to).toBe(props.to)
  })
})
