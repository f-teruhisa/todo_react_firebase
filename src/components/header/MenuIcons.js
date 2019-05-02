import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import EditIcon from '@material-ui/icons/Edit'

const MenuIcons = ({ uid }) => (
  <React.Fragment>
    { uid &&
    <Tooltip title = "Edit" >
      <IconButton color="inherit" component={Link} to={`/users/${uid}/todos`} aria-label="Edit" >
        <EditIcon />
      </IconButton>
    </Tooltip>
    }
  </React.Fragment>
)

MenuIcons.propTypes = {
  uid: PropTypes.string
}

const mapStateToProps = state => (
  { uid: state.firebase.auth.uid }
)

export default connect(
  mapStateToProps
)(MenuIcons)
