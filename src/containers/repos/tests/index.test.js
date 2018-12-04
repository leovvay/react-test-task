import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Repos } from '..'

Enzyme.configure({ adapter: new Adapter() })

describe('component', () => {
  it('should render full view', () => {
    const repo = {
      id: 'id',
      name: 'name',
      full_name: 'full_name',
    }
    const props = {match: {params: {user: 'user'}}, repos: {data: [repo]}}

    const enzymeWrapper = shallow(<Repos {...props} />)

    const list = enzymeWrapper.find('.repositories li')
    const link = list.at(0).find('Link')
    expect(enzymeWrapper.find('.title').text()).toMatch(/.+/)
    expect(list).toHaveLength(1)
    expect(list.at(0).key()).toBe(repo.id)
    expect(link.props().to).toContain(props.match.params.user)
    expect(link.props().to).toContain(repo.name)
  })
})
