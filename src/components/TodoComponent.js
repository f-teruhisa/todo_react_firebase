import React from 'react'
import Footer from './Footer'
import NoticeForTodo from './NoticeForTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {　connect　} from 'react-redux'
import {　isEmpty,　isLoaded　} from 'react-redux-firebase'
import PropTypes from 'prop-types'

let TodoComponent = ({uid,　authenticating,　authenticated}) => {
    if (authenticating) {
      return <div> Now Login...</div>
    }
    if (!authenticated) {
      return <div>After login, you can see task list.</div>
    }
  return (
    <div>
      < AddTodo uid={uid} />
      <NoticeForTodo />
      <VisibleTodoList uid={uid} />
      <Footer />
    </div>
  )
}

TodoComponent.propTypes = {
  uid: PropTypes.string,
  authenticating: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ firebase: { auth, auth: { uid } } }) => ({
  uid,
  authenticating: !isLoaded(auth),
  authenticated: !isEmpty(auth)
})

TodoComponent = connect(
  mapStateToProps
)(TodoComponent)

export default TodoComponent;
