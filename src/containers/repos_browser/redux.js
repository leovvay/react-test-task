const LOAD_USER_REPOS = 'app/home/LOAD_USER_REPOS';
const GOT_USER_REPOS = 'app/home/GOT_USER_REPOS';
const ERR_USER_REPOS = 'app/home/ERR_USER_REPOS';

export const loadUserRepos = () => ({
    type: LOAD_USER_REPOS,
})

export const gotUserRepos = repos => ({
    type: GOT_USER_REPOS,
    repos,
})

export const errUserRepos = err => ({
    type: ERR_USER_REPOS,
    err,
})

export const userReposReducer = (state = null, action) => {
  switch (action.type) {
    case GOT_USER_REPOS:
      state = {data: action.repos}
    case ERR_USER_REPOS:
      state = {err: action.err}
  }
  return state
}
