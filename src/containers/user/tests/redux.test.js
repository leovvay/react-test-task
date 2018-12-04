import * as redux from '../redux'
import * as utils from '../../../utils'

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
