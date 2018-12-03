export const LOAD_REPO_PULLS = 'app/home/LOAD_REPO_PULLS';
export const GOT_REPO_PULLS = 'app/home/GOT_REPO_PULLS';
export const ERR_REPO_PULLS = 'app/home/ERR_REPO_PULLS';

export const loadRepoPulls = repo => ({
    type: LOAD_REPO_PULLS,
    repo,
})

export const gotRepoPulls = (user, repo, pulls) => ({
    type: GOT_REPO_PULLS,
    user,
    repo,
    pulls,
})

export const errRepoPulls = (user, repo, err) => ({
    type: ERR_REPO_PULLS,
    user,
    repo,
    err,
})

export const reposPullsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_REPO_PULLS:
      return Object.assign({}, state, {
        [action.repo]: null
      })
    case GOT_REPO_PULLS:
      return Object.assign({}, state, {
        [action.repo]: {user: action.user, data: action.pulls}
      }) 
    case ERR_REPO_PULLS:
      return Object.assign({}, state, {
        [action.repo]: {user: action.user, err: action.err}
      })
    default:
      return state
  }
}
