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
import List from '@material-ui/core/List'

let RecentUpdatedTodos = ({ todos }) => {
  const header = (<h1>Recently Updated</h1>)
  if (!isLoaded(todos)) {
    return (
      <div>
        <div>{header}</div>
        <div> Loading… </div>
      </div>
    )
  }
  if (isEmpty(todos)) {
    return (
      <div>
        <div>{header}</div>
        <div>No data.</div>
      </div>
    )
  }
  return (
    <div>
      <List>
        {todos.map(({key, value: todo}) =>
            <UserUpdatedTodos key={key} {...todo} />
        )}
      </List>
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
