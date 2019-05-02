import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import green from '@material-ui/core/colors/green'
import Done from '@material-ui/icons/Done'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
import Tooltip from '@material-ui/core/Tooltip'
import CallMade from '@material-ui/icons/CallMade'
import Error from '@material-ui/icons/Error'

const StatusIcon = (todoStatus) => {
  if (!todoStatus) {
    return null;
  }

  if (todoStatus.status === 'sending') {
    return (
      <Tooltip title="送信中">
        <CallMade />
      </Tooltip>
    )
  }
  if (todoStatus.status === 'error') {
    return (
      <Tooltip title="エラー">
        <Error />
      </Tooltip>
    )
  }
  return null
}

const Todo = ({isOwnTodos, onClick, completed, text, todoStatus}) => (
  <ListItem
    button={isOwnTodos}
    onClick={onClick}
  >
    {CheckIcon(isOwnTodos, completed)}
    <ListItemText inset>
      <span style = {{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
    </ListItemText>
    {StatusIcon(todoStatus)}
  </ListItem>
)

Todo.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  todoStatus: PropTypes.shape({
    status: PropTypes.oneOf(['sending', 'success', 'error']).isRequired
  })
}

export default Todo
