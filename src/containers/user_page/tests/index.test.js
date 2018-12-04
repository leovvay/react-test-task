import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { UserPage } from '..'

Enzyme.configure({ adapter: new Adapter() })

describe('container', () => {
  it('should render full view', () => {
    const enzymeWrapper = shallow(<UserPage />)

    expect(enzymeWrapper.find('Route')).toHaveLength(2)
  })
})
