import { apiFetch } from '../../utils'

export const GOT_REPO_PULLS = 'app/home/GOT_REPO_PULLS';
export const ERR_REPO_PULLS = 'app/home/ERR_REPO_PULLS';

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

export function loadRepoPulls(user, repo) {
  return function (dispatch, getState) {
    const pulls = getState().reposPulls[repo]
    if (pulls && pulls.data !== undefined && pulls.user == user) {
        return
    }

    return apiFetch({
      url: `https://api.github.com/repos/${user}/${repo}/pulls`,
      onSuccess: res => dispatch(gotRepoPulls(user, repo, res.length)),
      onError: err => {
        err = `Error when trying to get repository PRs: ${err}`
        return dispatch(errRepoPulls(user, repo, err))
      },
    })
  };
}
