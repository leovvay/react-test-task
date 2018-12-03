import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadRepoPulls, gotRepoPulls, errRepoPulls } from './redux'
import ErrorMessage from '../../components/ErrorMessage';

class Repo extends React.Component {
  componentDidMount() {
    const params = this.props.match.params
    const pulls = this.props.reposPulls[params.repo]
    if (pulls && pulls.data !== undefined &&
      pulls.user == params.user) {
        return
    }

    let isOK = false
    this.props.dispatch(loadRepoPulls(params.repo))
    fetch(`https://api.github.com/repos/${params.user}/${params.repo}/pulls`)
      .then(res => {
        isOK = res.ok
        return res.json()
      })
      .then(res => {
        if (!isOK)
          throw new Error(JSON.stringify(res))
        this.props.dispatch(gotRepoPulls(params.user, params.repo, res.length))
      })
      .catch(err => {
        err = `Error when trying to get repository PRs: ${err}`
        this.props.dispatch(errRepoPulls(params.user, params.repo, err))
      })
  }

  render() {
    const params = this.props.match.params
    let pulls = this.props.reposPulls[params.repo]
    let pullsRender
    if (!pulls)
      pullsRender = 'Loading...'
    else if (pulls.err)
      pullsRender = <ErrorMessage err={pulls.err} />
    else
      pullsRender = pulls.data

    const repos = this.props.userRepos
    let repoRender
    if (!repos)
      repoRender = 'Loading...'
    else if (repos.err)
      repoRender = <ErrorMessage err={repos.err} />
    else {
      const repo = repos.data.find(repo => repo.name == params.repo)
      if (!repo)
        repoRender = `Unknown repo name: ${params.repo}`
      else {
        repoRender = (
          <div>
            <h3><small className="text-muted">{repo.description}</small></h3>
            <dl className="row">
              <dt className="col-sm-2">Forks</dt>
              <dd className="col-sm-10">{repo.forks_count}</dd>

              <dt className="col-sm-2">Stars</dt>
              <dd className="col-sm-10">{repo.stargazers_count}</dd>

              <dt className="col-sm-2">Issues</dt>
              <dd className="col-sm-10">{repo.open_issues}</dd>

              <dt className="col-sm-2">PRs</dt>
              <dd className="col-sm-10">{pullsRender}</dd>
            </dl>
          </div>
        )
      }
    }

    return (
      <div>
        <h3>{params.user}/{params.repo}</h3>
        {repoRender}
      </div>
    )
  }
}

Repo.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  userRepos: PropTypes.object,
  reposPulls: PropTypes.object,
}

const mapStateToProps = state => ({
  userRepos: state.userRepos,
  reposPulls: state.reposPulls,
})

export default withRouter(connect(
  mapStateToProps,
)(Repo))
