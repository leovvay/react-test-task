import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadRepoPulls } from './redux'
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import BackButton from '../../components/BackButton';

class Repo extends React.Component {
  componentDidMount() {
    const params = this.props.match.params
    this.props.dispatch(loadRepoPulls(params.user, params.repo))
  }

  render() {
    const params = this.props.match.params
    let pulls = this.props.reposPulls[params.repo]
    let pullsRender
    if (!pulls)
      pullsRender = <Loader />
    else if (pulls.err)
      pullsRender = <ErrorMessage err={pulls.err} />
    else
      pullsRender = pulls.data

    const repos = this.props.userRepos
    let repoRender
    if (!repos)
      repoRender = <Loader />
    else if (repos.err)
      repoRender = <ErrorMessage err={repos.err} />
    else {
      const repo = repos.data.find(repo => repo.name == params.repo)
      if (!repo)
        repoRender = <ErrorMessage err={`Unknown repo name: ${params.repo}`} />
      else {
        repoRender = (
          <div>
            <h3><small className="text-muted">{repo.description}</small></h3>
            <dl className="row">
              <dt className="col-sm-2">Forks</dt>
              <dd className="col-sm-10 forks">{repo.forks_count}</dd>

              <dt className="col-sm-2">Stars</dt>
              <dd className="col-sm-10 stars">{repo.stargazers_count}</dd>

              <dt className="col-sm-2">Issues</dt>
              <dd className="col-sm-10 issues">{repo.open_issues}</dd>

              <dt className="col-sm-2">PRs</dt>
              <dd className="col-sm-10 pulls">{pullsRender}</dd>
            </dl>
          </div>
        )
      }
    }

    return (
      <div className="repo-info">
        <h3 className="title">
          <BackButton to={`/u/${params.user}`} />
          {params.user}/{params.repo}
        </h3>
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

export { Repo }

export default withRouter(connect(
  mapStateToProps,
)(Repo))
