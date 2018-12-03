import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'
import { loadUserRepos, gotUserRepos, errUserRepos } from './redux'
import UserRepos from '../user_repos'
import Repo from '../repo'

class ReposBrowser extends React.Component {  
  componentWillMount() {
    const user = this.props.match.params.user
    if (this.props.usersRepos && this.props.usersRepos.data !== undefined)
      return

    let isOK = false
    this.props.dispatch(loadUserRepos())
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(res => {
        isOK = res.ok
        return res.json()
      })
      .then(res => {
        if (!isOK)
          throw new Error(JSON.stringify(res))
        this.props.dispatch(gotUserRepos(res))
      })
      .catch(err => {
        err = `Error when trying to get user repositories: ${err}`
        this.props.dispatch(errUserRepos(err))
      })
  }

  render() {
    return (
      <div>
        <Route exact path="/u/:user" component={UserRepos} />
        <Route exact path="/u/:user/:repo" component={Repo} />        
      </div>
    )
  }
}

ReposBrowser.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default withRouter(connect()(ReposBrowser))
