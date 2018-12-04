import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUser } from './redux'
import Loader from '../../components/Loader'
import BackButton from '../../components/BackButton';

class User extends React.Component {
  componentDidMount() {
    const user = this.props.match.params.user
    this.props.dispatch(loadUser(user))
  }

  render() {
    const name = this.props.match.params.user
    const user = this.props.user
    let userRender
    if (!user)
      userRender = <Loader />
    else if (user.err)
      userRender = <ErrorMessage err={user.err} />
    else {
      const data = user.data
      userRender = (
        <div>
          <h2><small className="text-muted">{data.name}</small></h2>
          <img className="img-thumbnail" src={data.avatar_url} width="230" height="230" />
          <dl className="row">
            {data.email && <dt className="col-sm-2">Email</dt>}
            {data.email && <dd className="col-sm-10 email">{data.email}</dd>}

            {data.location && <dt className="col-sm-2">Location</dt>}
            {data.location && <dd className="col-sm-10 location">{data.location}</dd>}

            <dt className="col-sm-2">Followers</dt>
            <dd className="col-sm-10 followers">{data.followers}</dd>
          </dl>
        </div>
      )
    }

    return (
      <div className="user-info">
        <h2><BackButton to="/" /> {name}</h2>
        {userRender}
      </div>
    )
  }
}

User.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
}

const mapStateToProps = state => ({
  user: state.user,
})

export { User }

export default withRouter(connect(
  mapStateToProps,
)(User))
