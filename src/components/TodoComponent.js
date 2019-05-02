import React from 'react'
import Footer from './Footer'
import NoticeForTodo from './NoticeForTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {　connect　} from 'react-redux'
import PropTypes from 'prop-types'

let TodoComponent = ({isOwnTodos,match: {params: {uid}}}) => (
  <div>
    {isOwnTodos && <AddTodo/>}
    <NoticeForTodo />
    <VisibleTodoList uid={uid} isOwnTodos = {isOwnTodos} />
    <Footer />
  </div>
)


TodoComponent.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      uid: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

const mapStateToProps = ({ firebase: { auth } }, { match }) => ({
  isOwnTodos: auth.uid === match.params.uid,
})

TodoComponent = connect(
  mapStateToProps
)(TodoComponent)

export default TodoComponent;
