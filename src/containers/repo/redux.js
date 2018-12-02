const GOT_REPO_PULLS = 'app/home/GOT_REPO_PULLS';

export const gotRepoPulls = pulls => ({
    type: GOT_REPO_PULLS,
    pulls,
})

export const repoPullsReducer = (state = null, action) => {
  switch (action.type) {
    case GOT_REPO_PULLS:
      return action.pulls.length
    default:
      return state
  }
}
