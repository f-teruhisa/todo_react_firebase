import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { loginWithGoogle, logout } from '../actions/authActions'

let Login = ({ auth, loginWithGoogle, logout }) => {
    if (!isLoaded(auth)) {
      return ( <div> Now Login... </div>);
      }
      if (isEmpty(auth)) {
        return (
          <button onClick = {loginWithGoogle}>Login with Google Account</button>
        )
      }
  return (
    <div>
      {auth.displayName}
      <button onClick = {logout}>Logout</button>
    </div>
  );
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => (
  { auth: state.firebase.auth }
)

const mapDispatchToProps = dispatch => {
  return {
    loginWithGoogle: () => dispatch(loginWithGoogle()),
    logout: () => {
      dispatch(logout())
    }
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default Login;
