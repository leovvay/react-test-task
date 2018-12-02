const GOT_USER_REPOS = 'app/home/GOT_USER_REPOS';

export const gotUserRepos = repos => ({
    type: GOT_USER_REPOS,
    repos,
})

export const userReposReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_USER_REPOS:
      return action.repos
    default:
      return state
  }
}
