import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUser, gotUser, errUser } from './redux'
import UserInfo from '../../components/UserInfo'

class User extends React.Component {
  componentDidMount() {
    const user = this.props.match.params.user
    if (this.props.user && this.props.user.data !== undefined &&
      this.props.user.user == user) {
        return
    }

    let isOK = false
    this.props.dispatch(loadUser())
    fetch(`https://api.github.com/users/${user}`)
      .then(res => {
        isOK = res.ok
        return res.json()
      })
      .then(res => {
        if (!isOK)
          throw new Error(JSON.stringify(res))
        this.props.dispatch(gotUser(user, res))
      })
      .catch(err => {
        err = `Error when trying to get user info: ${err}`
        this.props.dispatch(errUser(user, err))
      })
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
