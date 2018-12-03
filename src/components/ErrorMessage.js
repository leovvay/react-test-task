import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ err }) => {
  return <div className="alert alert-warning">{err}</div>
}

ErrorMessage.propTypes = {
  err: PropTypes.string.isRequired,
}

export default ErrorMessage
