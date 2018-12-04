import * as redux from '../redux'
import * as utils from '../../../utils'

describe('actions', () => {
  it('should create an action to set user', () => {
    const user = 'user', info = {}
    const expected = {
      type: redux.GOT_USER,
      user,
      info,
    }
    expect(redux.gotUser(user, info)).toEqual(expected)
  })
  it('should create an action to set error for user', () => {
    const user = 'user', err = 'err'
    const expected = {
      type: redux.ERR_USER,
      user,
      err,
    }
    expect(redux.errUser(user, err)).toEqual(expected)
  })
})

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(redux.userReducer(undefined, {})).toEqual(null)
  })

  it('should handle GOT_USER', () => {
    expect(
      redux.userReducer(null, {
        type: redux.GOT_USER,
        user: 'user',
        info: {},
      })
    ).toEqual({
      user: 'user',
      data: {},
    })

    expect(
      redux.userReducer({user: 'user1', err: 'err'}, {
        type: redux.GOT_USER,
        user: 'user',
        info: {},
      })
    ).toEqual({
      user: 'user',
      data: {},
    })
  })

  it('should handle ERR_USER', () => {
    expect(
      redux.userReducer(null, {
        type: redux.ERR_USER,
        user: 'user',
        err: 'err',
      })
    ).toEqual({
      user: 'user',
      err: 'err',
    })

    expect(
      redux.userReducer({user: 'user1', data: {}}, {
        type: redux.ERR_USER,
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

  it('should load user', async () => {
    const user = 'user', res = {result: 'result'}
    utils.apiFetch = jest.fn(({ onSuccess }) => onSuccess(res))
    const dispatch = jest.fn()
    const getState = () => ({})
    await redux.loadUser(user)(dispatch, getState)
    expect(dispatch).toBeCalledWith({type: redux.GOT_USER, user, info: res})
  })
})
