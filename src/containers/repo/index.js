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
        <h3>
          {repo.full_name}<br />
          <small className="text-muted">{repo.description}</small>
        </h3>
        <dl className="row">
          <dt className="col-sm-2">Forks</dt>
          <dd className="col-sm-10">{repo.forks_count}</dd>

          <dt className="col-sm-2">Stars</dt>
          <dd className="col-sm-10">{repo.stargazers_count}</dd>

          <dt className="col-sm-2">Issues</dt>
          <dd className="col-sm-10">{repo.open_issues}</dd>

          <dt className="col-sm-2">PRs</dt>
          <dd className="col-sm-10">{pulls}</dd>
        </dl>
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
