import { createStore, combineReducers } from 'redux'
import { createBrowserHistory, createHashHistory } from 'history'
import { userReducer } from './containers/user/redux'
import { userReposReducer } from './containers/user_repos/redux'
import { repoPullsReducer } from './containers/repo/redux'

const historyParams = {basename: WP_CONF_BASE_NAME}
export const history = WP_CONF_HISTORY_METHOD == 'browser' ?
  createBrowserHistory(historyParams) :
  createHashHistory(historyParams)

export default createStore(
  combineReducers({
    user: userReducer,
    userRepos: userReposReducer,
    repoPulls: repoPullsReducer,
  }),
)
