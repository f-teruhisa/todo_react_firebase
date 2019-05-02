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
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

const RecentUpdatedList = (todos) => {
  if (!isLoaded(todos)) {
    return <CircularProgress/>
  }
  if (isEmpty(todos)) {
    return <Typography variant = "body1" > No data.</Typography>
  }
  return (
    <List>
      {todos.map(({key, value: todo}) =>
        <UserUpdatedTodos key = {key} {...todo} />
      )
    }
    </List>
  )
}

let RecentUpdatedTodos = ({todos}) => {
  return (
    <div>
      <Typography variant="h5" >Recently Updated</Typography>
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
