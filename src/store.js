import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createBrowserHistory, createHashHistory } from 'history'
import thunk from 'redux-thunk';
import { userReducer } from './containers/user/redux'
import { userReposReducer } from './containers/repos_browser/redux'
import { reposPullsReducer } from './containers/repo/redux'

export const history = WP_CONF_HISTORY_METHOD == 'browser' ?
  createBrowserHistory() :
  createHashHistory()

export default createStore(
  combineReducers({
    user: userReducer,
    userRepos: userReposReducer,
    reposPulls: reposPullsReducer,
  }),
  applyMiddleware(thunk),
)
