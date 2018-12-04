import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Repo } from '..'

Enzyme.configure({ adapter: new Adapter() })

describe('container', () => {
  it('should render full view', () => {
    const props = {
      match: {params: {
        user: 'user',
        repo: 'repo',
      }},
      dispatch: jest.fn(),
      reposPulls: {
        repo: {
          data: 12,
          user: 'user',
        },
      },
      userRepos: {
        data: [{
          name: 'repo',
          description: 'description',
          forks_count: 13,
          stargazers_count: 14,
          open_issues: 15,
        }],
      },
    }

    const enzymeWrapper = shallow(<Repo {...props} />)

    expect(props.dispatch.mock.calls.length).toBe(1)
    expect(enzymeWrapper.find('Loader')).toHaveLength(0)
    expect(enzymeWrapper.find('ErrorMessage')).toHaveLength(0)
    expect(enzymeWrapper.find('.title').text()).toBe('user/repo')
    expect(enzymeWrapper.find('.forks').text()).toBe("13")
    expect(enzymeWrapper.find('.pulls').text()).toBe("12")
  })
})
