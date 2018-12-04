import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserInfo from '../UserInfo'

Enzyme.configure({ adapter: new Adapter() })

describe('component', () => {
  it('should render full view', () => {
    const props = {name: 'name', user: {data: {location: 'location', followers: 12}}}

    const enzymeWrapper = shallow(<UserInfo {...props} />)

    expect(enzymeWrapper.find('.user-info > h2').text()).toBe(props.name)
    expect(enzymeWrapper.find('.email')).toHaveLength(0)
    expect(enzymeWrapper.find('.location').text()).toBe(props.user.data.location)
    expect(enzymeWrapper.find('.followers').text()).toBe(props.user.data.followers+'')
  })
})
