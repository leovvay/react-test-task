import { apiFetch } from '../../utils'

export const GOT_USER_REPOS = 'app/home/GOT_USER_REPOS';
export const ERR_USER_REPOS = 'app/home/ERR_USER_REPOS';

export const gotUserRepos = (user, repos) => ({
  type: GOT_USER_REPOS,
  user,
  repos,
})

export const errUserRepos = (user, err) => ({
  type: ERR_USER_REPOS,
  user,
  err,
})

export const userReposReducer = (state = null, action) => {
  switch (action.type) {
    case GOT_USER_REPOS:
      return { user: action.user, data: action.repos }
    case ERR_USER_REPOS:
      return { user: action.user, err: action.err }
    default:
      return state
  }
}

export function loadUserRepos(user) {
  return function (dispatch, getState) {
    const repos = getState().userRepos
    if (repos && repos.data !== undefined && repos.user == user) {
      return
    }

    return apiFetch({
      url: `https://api.github.com/users/${user}/repos`,
      onSuccess: res => dispatch(gotUserRepos(user, res)),
      onError: err => {
        err = `Error when trying to get user repositories: ${err}`
        return dispatch(errUserRepos(user, err))
      },
    })
  };
}
