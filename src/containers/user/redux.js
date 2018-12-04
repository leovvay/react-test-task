import { apiFetch } from '../../utils'

export const GOT_USER = 'app/home/GOT_USER';
export const ERR_USER = 'app/home/ERR_USER';

export const gotUser = (user, info) => ({
    type: GOT_USER,
    user,
    info,
})

export const errUser = (user, err) => ({
    type: ERR_USER,
    user,
    err,
})

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case GOT_USER:
      return {user: action.user, data: action.info}
    case ERR_USER:
      return {user: action.user, err: action.err}
    default:
      return state
  }
}

export function loadUser(user) {
  return function (dispatch, getState) {
    const userInfo = getState().user
    if (userInfo && userInfo.data !== undefined && userInfo.user == user) {
        return
    }

    return apiFetch({
      url: `https://api.github.com/users/${user}`,
      onSuccess: res => dispatch(gotUser(user, res)),
      onError: err => {
        err = `Error when trying to get user info: ${err}`
        return dispatch(errUser(user, err))
      },
    })
  };
}
