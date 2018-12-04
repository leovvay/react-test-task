import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from './ErrorMessage'

const User = ({ name, user }) => {
  let userRender
  if (!user)
    userRender = 'Loading user...'
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
      <h2>{name}</h2>
      {userRender}
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.object,
}

export default User
