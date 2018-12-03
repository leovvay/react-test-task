const LOAD_USER = 'app/home/LOAD_USER';
const GOT_USER = 'app/home/GOT_USER';
const ERR_USER = 'app/home/ERR_USER';

export const loadUser = () => ({
    type: LOAD_USER,
})

export const gotUser = info => ({
    type: GOT_USER,
    info,
})

export const errUser = err => ({
    type: ERR_USER,
    err,
})

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case GOT_USER:
      state = {data: action.info}
    case ERR_USER:
      state = {err: action.err}
  }
  return state
}
