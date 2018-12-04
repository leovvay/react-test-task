import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFoundPage from '..'

Enzyme.configure({ adapter: new Adapter() })

describe('component', () => {
  it('should render full view', () => {
    const enzymeWrapper = shallow(<NotFoundPage />)

    expect(enzymeWrapper.find('Link').props().to).toBe('/')
  })
})
