import React from 'react'
import Footer from './Footer'
import NoticeForTodo from './NoticeForTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {　connect　} from 'react-redux'
import PropTypes from 'prop-types'

let TodoComponent = ({ match: { params: { uid } } }) => (
  <div>
    <AddTodo uid={uid} />
    <NoticeForTodo />
    <VisibleTodoList uid={uid} />
    <Footer />
  </div>
)


TodoComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      uid: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

const mapStateToProps = (state) => ({
})

TodoComponent = connect(
  mapStateToProps
)(TodoComponent)

export default TodoComponent;
