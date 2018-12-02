import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import User from '../user'
import UserRepos from '../user_repos'
import Repo from '../repo'

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route path="/u/:user" component={User} />
    <Route exact path="/u/:user" component={UserRepos} />
    <Route exact path="/u/:user/:repo" component={Repo} />
  </main>
)

export default App
