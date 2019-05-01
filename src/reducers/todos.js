const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO_REQUEST':
      return {...state, notice: 'Sending data...'}
    case 'ADD_TODO_SUCCESS':
      return {...state, notice: 'Complete'}
    case 'ADD_TODO_ERROR':
      return {...state, notice: 'Errror'}
    default:
      return state
  }
}

export default todos
