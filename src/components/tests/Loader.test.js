import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Loader from '../Loader'

Enzyme.configure({ adapter: new Adapter() })

describe('component', () => {
  it('should render full view', () => {
    const enzymeWrapper = shallow(<Loader />)

    expect(enzymeWrapper.text()).toMatch(/.+/)
  })
})
