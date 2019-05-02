import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { loginWithGoogle, logout } from '../../actions/authActions'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

let Login = ({ auth, loginWithGoogle, logout }) => {
    if (!isLoaded(auth)) {
      return <CircularProgress color = "inherit" />
      }
      if (isEmpty(auth)) {
        return (
          <Button variant="contained" color="primary" onClick = {loginWithGoogle}>Login with Google Account</Button>
        )
      }
  return (
    <div>
      {auth.displayName}
      <Button variant="contained" color="primary" onClick = {logout}>Logout</Button>
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
