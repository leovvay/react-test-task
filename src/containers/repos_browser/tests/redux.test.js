import * as redux from '../redux'
import * as utils from '../../../utils'

describe('actions', () => {
  it('should create an action to set user repos', () => {
    const user = 'user', repos = []
    const expected = {
      type: redux.GOT_USER_REPOS,
      user,
      repos,
    }
    expect(redux.gotUserRepos(user, repos)).toEqual(expected)
  })
  it('should create an action to set error for user repos', () => {
    const user = 'user', err = 'err'
    const expected = {
      type: redux.ERR_USER_REPOS,
      user,
      err,
    }
    expect(redux.errUserRepos(user, err)).toEqual(expected)
  })
})

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(redux.userReposReducer(undefined, {})).toEqual(null)
  })

  it('should handle GOT_USER_REPOS', () => {
    expect(
      redux.userReposReducer(null, {
        type: redux.GOT_USER_REPOS,
        user: 'user',
        repos: [],
      })
    ).toEqual({
      user: 'user',
      data: [],
    })

    expect(
      redux.userReposReducer({ user: 'user1', err: 'err' }, {
        type: redux.GOT_USER_REPOS,
        user: 'user',
        repos: [],
      })
    ).toEqual({
      user: 'user',
      data: [],
    })
  })

  it('should handle ERR_USER_REPOS', () => {
    expect(
      redux.userReposReducer(null, {
        type: redux.ERR_USER_REPOS,
        user: 'user',
        err: 'err',
      })
    ).toEqual({
      user: 'user',
      err: 'err',
    })

    expect(
      redux.userReposReducer({ user: 'user1', data: [] }, {
        type: redux.ERR_USER_REPOS,
        user: 'user',
        err: 'err',
      })
    ).toEqual({
      user: 'user',
      err: 'err',
    })
  })
})

describe('thunks', () => {
  let origFetch = utils.apiFetch

  afterEach(() => {
    utils.apiFetch = origFetch
  })

  it('should load user repos', async () => {
    const user = 'user', res = [{ result: 'result' }]
    utils.apiFetch = jest.fn(({ onSuccess }) => onSuccess(res))
    const dispatch = jest.fn()
    const getState = () => ({})
    await redux.loadUserRepos(user)(dispatch, getState)
    expect(dispatch).toBeCalledWith({ type: redux.GOT_USER_REPOS, user, repos: res })
  })
})
