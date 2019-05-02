import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

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
        <Button variant="contained" color="secondary" type="submit">Add Todo</Button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  uid: PropTypes.string.isRequired,
}

export default connect()(AddTodo)
