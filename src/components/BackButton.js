import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ to }) => (
  <Link to={to} style={{ transform: 'scale(-1, 1)', display: 'inline-block' }}>➔</Link>
)

export default BackButton
