import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { User } from '..'

Enzyme.configure({ adapter: new Adapter() })

describe('container', () => {
  it('should render full view', () => {
    const props = {
      match: {
        params: {
          user: 'user',
        }
      },
      user: { data: { location: 'location', followers: 12 } },
      dispatch: jest.fn(),
    }

    const enzymeWrapper = shallow(<User {...props} />)
    expect(props.dispatch.mock.calls.length).toBe(1)
    expect(enzymeWrapper.find('.user-info > h2').text()).toBe(props.match.params.user)
    expect(enzymeWrapper.find('.email')).toHaveLength(0)
    expect(enzymeWrapper.find('.location').text()).toBe(props.user.data.location)
    expect(enzymeWrapper.find('.followers').text()).toBe(props.user.data.followers + '')
  })
})
