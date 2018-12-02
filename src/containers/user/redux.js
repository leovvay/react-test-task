const GOT_USER = 'app/home/GOT_USER';

export const gotUser = info => ({
    type: GOT_USER,
    info,
})

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_USER:
      return action.info
    default:
      return state
  }
}
