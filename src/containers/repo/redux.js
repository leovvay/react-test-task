const LOAD_REPO_PULLS = 'app/home/LOAD_REPO_PULLS';
const GOT_REPO_PULLS = 'app/home/GOT_REPO_PULLS';
const ERR_REPO_PULLS = 'app/home/ERR_REPO_PULLS';

export const loadRepoPulls = repo => ({
    type: LOAD_REPO_PULLS,
    repo,
})

export const gotRepoPulls = (repo, pulls) => ({
    type: GOT_REPO_PULLS,
    repo,
    pulls,
})

export const errRepoPulls = (repo, err) => ({
    type: ERR_REPO_PULLS,
    repo,
    err,
})

export const reposPullsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_REPO_PULLS:
      state = Object.assign({}, state, {
        [action.repo]: null
      })
    case ERR_REPO_PULLS:
    case GOT_REPO_PULLS:
      state = Object.assign({}, state, {
        [action.repo]: {data: action.pulls}
      })  
    case ERR_REPO_PULLS:
      state = Object.assign({}, state, {
        [action.repo]: {err: action.err}
      })  
  }
  return state
}
