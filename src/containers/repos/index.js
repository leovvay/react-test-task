import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';

const Repos = ({match, repos}) => {
  const user = match.params.user
  let reposRender
  if (!repos)
    reposRender = <Loader />
  else if (repos.err)
    reposRender = <ErrorMessage err={repos.err} />
  else {
    reposRender = repos.data.map(repo => (
      <li key={repo.id}>
        <Link to={`/u/${user}/${repo.name}`}>{repo.full_name}</Link>
      </li>
    ))
    reposRender = <ul className="list-unstyled repositories">{reposRender}</ul>
  }

  return (
    <div>
      <h1 className="title">Repositories</h1>
      {reposRender}
    </div>
  )
}

Repos.propTypes = {
  match: PropTypes.object.isRequired,
  repos: PropTypes.object,
}

const mapStateToProps = state => ({
  repos: state.userRepos,
})

export { Repos }

export default withRouter(connect(
  mapStateToProps,
)(Repos))
