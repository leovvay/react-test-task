import * as redux from '../redux'
import * as utils from '../../../utils'

describe('actions', () => {
  it('should create an action to set repo pulls', () => {
    const user = 'user', repo = 'repo', pulls = 0
    const expected = {
      type: redux.GOT_REPO_PULLS,
      user,
      repo,
      pulls,
    }
    expect(redux.gotRepoPulls(user, repo, pulls)).toEqual(expected)
  })
  it('should create an action to set error for repo pulls', () => {
    const user = 'user', repo = 'repo', err = 'err'
    const expected = {
      type: redux.ERR_REPO_PULLS,
      user,
      repo,
      err,
    }
    expect(redux.errRepoPulls(user, repo, err)).toEqual(expected)
  })
})

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(redux.reposPullsReducer(undefined, {})).toEqual({})
  })

  it('should handle GOT_REPO_PULLS', () => {
    expect(
      redux.reposPullsReducer({}, {
        type: redux.GOT_REPO_PULLS,
        user: 'user',
        repo: 'repo',
        pulls: 12,
      })
    ).toEqual({
      repo: {
        user: 'user',
        data: 12,
      },
    })

    expect(
      redux.reposPullsReducer({ repo1: null }, {
        type: redux.GOT_REPO_PULLS,
        user: 'user',
        repo: 'repo',
        pulls: 12,
      })
    ).toEqual({
      repo: {
        user: 'user',
        data: 12,
      },
      repo1: null,
    })
  })

  it('should handle ERR_REPO_PULLS', () => {
    expect(
      redux.reposPullsReducer({}, {
        type: redux.ERR_REPO_PULLS,
        user: 'user',
        repo: 'repo',
        err: 'err',
      })
    ).toEqual({
      repo: {
        user: 'user',
        err: 'err',
      },
    })

    expect(
      redux.reposPullsReducer({ repo1: null }, {
        type: redux.ERR_REPO_PULLS,
        user: 'user',
        repo: 'repo',
        err: 'err',
      })
    ).toEqual({
      repo: {
        user: 'user',
        err: 'err',
      },
      repo1: null,
    })
  })
})

describe('thunks', () => {
  let origFetch = utils.apiFetch

  afterEach(() => {
    utils.apiFetch = origFetch
  })

  it('should load repo', async () => {
    const user = 'user', repo = 'repo', res = 12
    utils.apiFetch = jest.fn(({ onSuccess }) => onSuccess(res))
    const dispatch = jest.fn()
    const getState = () => ({ reposPulls: {} })
    await redux.loadRepoPulls(user, repo)(dispatch, getState)
    expect(dispatch).toBeCalledWith({ type: redux.GOT_REPO_PULLS, user, repo, pulls: res.length })
  })
})
