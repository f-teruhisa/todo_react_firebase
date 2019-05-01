import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'
import PropTypes from 'prop-types'

let AddTodo = ({ uid, dispatch}) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(uid, input.value))
        input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type = "submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  uid: PropTypes.string.isRequired,
}

export default connect()(AddTodo)
