import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import User from '../user'
import ReposBrowser from '../repos_browser'

const App = () => (
  <main className="my-5 row">
    <div className="col">
      <Route exact path="/" component={Home} />
      <Route path="/u/:user" component={User} />
    </div>
    <div className="col">
      <Route path="/u/:user" component={ReposBrowser} />
    </div>
  </main>
)

export default App
