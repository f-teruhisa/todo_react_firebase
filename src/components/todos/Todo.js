import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import green from '@material-ui/core/colors/green'
import Done from '@material-ui/icons/Done'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'

const CheckIcon = (isOwnTodos, completed) => {
  if (completed) {
    return (
      <ListItemIcon >
      <Done nativeColor = {green[500]}/>
      </ListItemIcon>
    )
  }
  if (isOwnTodos) {
    return (
      <ListItemIcon >
      <CheckBoxOutlineBlank />
      </ListItemIcon>
    )
  }
  return null
}

const Todo = ({isOwnTodos, onClick, completed, text}) => (
  <ListItem
    button={isOwnTodos}
    onClick={onClick}
  >
    {CheckIcon(isOwnTodos, completed)}
    <ListItemText inset>
      <span style = {{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
    </ListItemText>
  </ListItem>
)

Todo.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
