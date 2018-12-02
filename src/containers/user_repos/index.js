import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { gotUserRepos } from './redux'

class UserRepos extends React.Component {  
  componentWillMount() {
    const user = this.props.match.params.user
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(res => res.json())
      .then(repos => this.props.dispatch(gotUserRepos(repos)))
  }

  render() {
    const repos = this.props.userRepos
    const user = this.props.match.params.user
    if (!repos)
      return <div>Loading user repositories...</div>
  
    const list = repos.map(repo => <li key={repo.id}><Link to={`/u/${user}/${repo.name}`}>{repo.full_name}</Link></li>)
    return <ul>{list}</ul>
  }
}

UserRepos.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  userRepos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  userRepos: state.userRepos,
})

export default withRouter(connect(
  mapStateToProps,
)(UserRepos))
