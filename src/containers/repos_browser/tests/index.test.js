import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ReposBrowser } from '..'

Enzyme.configure({ adapter: new Adapter() })

describe('container', () => {
  it('should render full view', () => {
    const props = {
      match: {
        params: {
          user: 'user',
        }
      },
      dispatch: jest.fn(),
    }

    const enzymeWrapper = shallow(<ReposBrowser {...props} />)

    expect(props.dispatch.mock.calls.length).toBe(1)
    expect(enzymeWrapper.find('Route')).toHaveLength(2)
  })
})
