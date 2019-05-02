import React from 'react'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({displayName, todos, isOwnTodos, onTodoClick }) => {
  if (!isLoaded(todos)) {
    return <div>Loading task list… </div>
  }
  if (isEmpty(todos)) {
    return <div>Doesn't exist task</div>
  }
  const name = isOwnTodos ? 'Your' : `${displayName}'s`;
  return (
    <div>
      {displayName && <div>{name} Task List</div>}
      <ul>
        {Object.keys(todos).map(
          (key) => (
            <Todo
              key={key}
              {...todos[key]}
              onClick = {isOwnTodos ? (() => onTodoClick(key)) : (() => {})}/>
          )
        )}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  displayName: PropTypes.string,
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