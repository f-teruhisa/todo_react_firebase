import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import NoticeForTodo from './NoticeForTodo'

const App = () => (
  <div>
  <AddTodo />
  <NoticeForTodo />
  <VisibleTodoList />
  <Footer />
  </div>
)

export default App;
