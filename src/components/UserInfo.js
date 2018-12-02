import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user }) => {  
  if (!user)
    return <div>Loading user...</div>

  return (
    <div>
      <img className="img-thumbnail" src={user.avatar_url} width="230" height="230" />
      <h2>
        {user.name}<br />
        <small className="text-muted">{user.login}</small>
      </h2>
      <dl className="row">
        {user.email && <dt className="col-sm-2">Email</dt>}
        {user.email && <dt className="col-sm-10">{user.email}</dt>}

        {user.location && <dt className="col-sm-2">Location</dt>}
        {user.location && <dt className="col-sm-10">{user.location}</dt>}

        <dt className="col-sm-2">Followers</dt>
        <dd className="col-sm-10">{user.followers}</dd>
      </dl>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
