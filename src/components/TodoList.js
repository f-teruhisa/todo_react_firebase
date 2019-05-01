import React from 'react'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  if (!isLoaded(todos)) {
    return <div>Loading task list… </div>
  }
  if (isEmpty(todos)) {
    return <div>Doesn't exist task</div>
  }

  return (
    <ul >
      {Object.keys(todos).map((key) => (
        <Todo key={key} {...todos[key]} onClick = {() => onTodoClick(key)}/>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.objectOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
