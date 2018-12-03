import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const Home = ({ history }) => {  
  let input

  return (
    <form className="form-inline" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        history.push('/u/'+input.value)
      }}
    >
      <div className="form-group mx-sm-3">
        <input className="form-control" placeholder="GitHub nickname"
          ref={node => input = node} />
      </div>
      <button type="submit" className="btn btn-primary">Find</button>
    </form>
  )
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(Home)
