import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { gotRepoPulls } from './redux'

class Repo extends React.Component {  
  componentWillMount() {
    let params = this.props.match.params
    fetch(`https://api.github.com/repos/${params.user}/${params.repo}/pulls`)
      .then(res => res.json())
      .then(pulls => this.props.dispatch(gotRepoPulls(pulls)))
  }

  render() {
    const pulls = this.props.pulls === null ?
      'Loading...' : this.props.pulls
    const name = this.props.match.params.repo
    const repo = this.props.repos.find(repo => repo.name == name)

    return (
      <div>
        <h1>{repo.full_name}</h1>
        <div>Description: {repo.description}</div>
        <div>Forks: {repo.forks_count}</div>
        <div>Stars: {repo.stargazers_count}</div>
        <div>Issues: {repo.open_issues}</div>
        <div>PRs: {pulls}</div>
      </div>
    )
  }
}

Repo.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  pulls: PropTypes.number,
}

const mapStateToProps = state => ({
  repos: state.userRepos,
  pulls: state.repoPulls,
})

export default withRouter(connect(
  mapStateToProps,
)(Repo))
