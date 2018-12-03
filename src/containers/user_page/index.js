import React from 'react'
import { Route } from 'react-router-dom'
import User from '../user'
import ReposBrowser from '../repos_browser'

const UserPage = () => (
  <div className="row">
    <div className="col">
      <Route path="/u/:user" component={User} />
    </div>
    <div className="col">
      <Route path="/u/:user" component={ReposBrowser} />
    </div>
  </div>
)

export default UserPage
