import * as redux from '../redux'

describe('actions', () => {
  it('should create an action to clear current user', () => {
    const repo = 'test'
    const expected = {
      type: redux.LOAD_REPO_PULLS,
      repo
    }
    expect(redux.loadRepoPulls(repo)).toEqual(expected)
  })
})
