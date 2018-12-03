const LOAD_USER = 'app/home/LOAD_USER';
const GOT_USER = 'app/home/GOT_USER';
const ERR_USER = 'app/home/ERR_USER';

export const loadUser = () => ({
    type: LOAD_USER,
})

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
