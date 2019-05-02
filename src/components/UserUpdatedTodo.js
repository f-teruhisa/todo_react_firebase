import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/ja'
import PropTypes from 'prop-types'

const UserUpdatedTodo = ({ text, eventType, uid, displayName, _updatedAt }) => (
  <li>
    <Link to={`/users/${uid}/todos`} > {displayName} </Link> was {text}  {eventType === 'CREATE' ? 'created' : 'updated'}
    ({moment(_updatedAt).fromNow()})
  </li>
)

UserUpdatedTodo.propTypes = {
  text: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  _updatedAt: PropTypes.number.isRequired
}

export default UserUpdatedTodo;
