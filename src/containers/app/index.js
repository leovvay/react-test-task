import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../main_page'
import UserPage from '../user_page'
import NotFoundPage from '../not_found_page'

const App = () => (
  <main className="my-5">
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/u/:user" component={UserPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </main>
)

export default App
