import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  firebaseConnect,
  isEmpty,
  isLoaded
} from 'react-redux-firebase'
import PropTypes from 'prop-types'
import UserUpdatedTodos from './UserUpdatedTodo'

const RecentUpdatedList = (todos) => {
  if (!isLoaded(todos)) {
    return <div> Loading… </div>
  }
  if (isEmpty(todos)) {
    return <div>No data.</div>
  }
  return (
    <ul>
      {todos.map(({key, value: todo}) =>
        <UserUpdatedTodos key = {key} {...todo}/>
      )}
    </ul>
  )
}

let RecentUpdatedTodos = ({
  todos
}) => {
  return (
    <div>
      <h1>Recently Updated</h1>
      {RecentUpdatedList(todos)}
    </div>
  )
}
RecentUpdatedTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.object.isRequired,
    })
  ),
}

const firebaseQueries = ({uid}) => (
  [
    {path: `recentUpdatedTodos`, type: 'once', queryParams: ['orderByChild=_updatedAt', 'limitToLast=10']}
  ]
)

const mapStateToProps = ({firebase: {ordered: {recentUpdatedTodos}}}) => {
  return {
    todos: recentUpdatedTodos && recentUpdatedTodos.reverse()
  }
}

RecentUpdatedTodos = compose(
  firebaseConnect(firebaseQueries),
  connect(
    mapStateToProps
  ))(RecentUpdatedTodos)

export default RecentUpdatedTodos;
