import { createStore, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { userReducer } from './containers/user/redux'
import { userReposReducer } from './containers/user_repos/redux'
import { repoPullsReducer } from './containers/repo/redux'

export const history = createHistory()

export default createStore(
  combineReducers({
    user: userReducer,
    userRepos: userReposReducer,
    repoPulls: repoPullsReducer,
  }),
)
