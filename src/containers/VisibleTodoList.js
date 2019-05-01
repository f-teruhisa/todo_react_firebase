import { compose } from 'redux'
import { firebaseConnect} from 'react-redux-firebase'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todoActions'

const getVisibleTodos = (todos, filter) => {
  if (!todos) return todos
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return Object.keys(todos)
        .filter(key => todos[key].completed)
        .reduce((filtered, key) => {
          filtered[key] = todos[key];
          return filtered;
        }, {})
    case 'SHOW_ACTIVE':
      return Object.keys(todos)
        .filter(key => !todos[key].completed)
        .reduce((filtered, key) => {
          filtered[key] = todos[key];
          return filtered;
        }, {})
    default:
      return todos;
  }
}

const firebaseQueries = ({uid}) => (
  [`todos/${uid}`]
)

const mapStateToProps = ({visibilityFilter, firebase: {data: {todos}}}, {uid}) => {
  return {
    todos: getVisibleTodos(todos && todos[uid], visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

const VisibleTodoList = compose(
  firebaseConnect(firebaseQueries),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ))(TodoList)
