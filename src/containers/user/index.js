import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { gotUser } from './redux'
import UserInfo from '../../components/UserInfo'

class User extends React.Component {  
  componentWillMount() {
    const user = this.props.match.params.user
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(info => this.props.dispatch(gotUser(info)))
  }

  render() {
    return (
      <div>
        <UserInfo user={this.props.user} />
      </div>
    )
  }
}

User.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(
  mapStateToProps,
)(User))
