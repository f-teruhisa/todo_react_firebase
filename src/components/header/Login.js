import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { loginWithGoogle, logout } from '../../actions/authActions'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const styles = { noTransform: {
    textTransform: 'none',
  },
}

class Login extends React.Component {
    state = {
      anchorEl: null,
    }

    handleClick = event => {
      this.setState({
        anchorEl: event.currentTarget
      })
    }

    handleClose = () => {
      this.setState({
        anchorEl: null
      })
    }

    render() {
        const { auth, loginWithGoogle, logout, classes } = this.props
        const { anchorEl } = this.state

        if (!isLoaded(auth)) {
          return <CircularProgress color = "inherit" />
        }
        if (isEmpty(auth)) {
          return (
            <Button variant="contained" color="primary" onClick={loginWithGoogle} className={classes.noTransform} >Sign in with Google Account</Button>
          )
        }
      return (
        <React.Fragment >
          <Button color = "inherit" aria-owns = {anchorEl ? 'user-menu' : undefined} aria-haspopup = "true"
            onClick={this.handleClick} className={classes.noTransform}>
            {auth.displayName}
          </Button>
          <Menu
            id = "user-menu"
            anchorEl = {anchorEl}
            open = {Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick = {logout}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
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

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(Login)
