import React from 'react'
import Footer from './Footer'
import NoticeForTodo from './NoticeForTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoComponent = () => (
  <div>
    <AddTodo />
    <NoticeForTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoComponent;
