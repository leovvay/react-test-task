import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user }) => {  
  if (!user)
    return <div>Loading user...</div>
  
  const email = user.email || "Unknown"

  return (
    <div>
      <h1>{user.login}</h1>
      <div>Name: {user.name}</div>
      <div>Email: {email}</div>
      <div>Location: {user.location}</div>
      <div>Followers: {user.followers}</div>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
