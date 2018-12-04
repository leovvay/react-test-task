import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUser } from './redux'
import UserInfo from '../../components/UserInfo'

class User extends React.Component {
  componentDidMount() {
    const user = this.props.match.params.user
    this.props.dispatch(loadUser(user))
  }

  render() {
    const user = this.props.match.params.user
    return (
      <div>
        <UserInfo user={this.props.user} name={user} />
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

export default withRouter(connect(
  mapStateToProps,
)(User))
