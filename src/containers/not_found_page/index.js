import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="alert alert-warning" role="alert">
      <h4 className="alert-heading">404</h4>
      <p>This page does not exist. Go to <Link to="/">main</Link>.</p>
    </div>
  )
}

export default NotFoundPage
