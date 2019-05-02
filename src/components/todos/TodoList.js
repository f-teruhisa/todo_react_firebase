import React from 'react'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'
import List from '@material-ui/core/List'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

const TodoList = ({todos, isOwnTodos, onTodoClick}) => {
  if (!isLoaded(todos)) {
    return <CircularProgress />
  }
  if (isEmpty(todos)) {
    return <Typography variant="body1">No tasks.</Typography>
  }
  return (
    <List>
      {Object.keys(todos).map(
        (key) => (
          <Todo
            key={key}
            isOwnTodos={isOwnTodos}
            {...todos[key]}
            onClick={isOwnTodos ? (() => onTodoClick(key)) : (() => { })} />
        )
      )}
    </List>
  )
}

TodoList.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  todos: PropTypes.objectOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
