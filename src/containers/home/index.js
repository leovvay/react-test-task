import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Home = ({ history }) => {  
  let input

  return (
    <div>
      <h1>Choose user</h1>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          history.push('/u/'+input.value)
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Find</button>
      </form>
    </div>
  )
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(
  mapStateToProps,
)(Home))
