const LOAD_USER_REPOS = 'app/home/LOAD_USER_REPOS';
const GOT_USER_REPOS = 'app/home/GOT_USER_REPOS';
const ERR_USER_REPOS = 'app/home/ERR_USER_REPOS';

export const loadUserRepos = () => ({
    type: LOAD_USER_REPOS,
})

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
      return {user: action.user, data: action.repos}
    case ERR_USER_REPOS:
      return {user: action.user, err: action.err}
    default:
      return state
  }
}
