import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'
import { loadUserRepos } from './redux'
import Repos from '../repos'
import Repo from '../repo'

class ReposBrowser extends React.Component {
  componentDidMount() {
    const user = this.props.match.params.user
    this.props.dispatch(loadUserRepos(user))
  }

  render() {
    return (
      <div>
        <Route exact path="/u/:user" component={Repos} />
        <Route exact path="/u/:user/:repo" component={Repo} />
      </div>
    )
  }
}

ReposBrowser.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  repos: PropTypes.object,
}

const mapStateToProps = state => ({
  repos: state.userRepos,
})

export { ReposBrowser }

export default withRouter(connect(
  mapStateToProps,
)(ReposBrowser))
