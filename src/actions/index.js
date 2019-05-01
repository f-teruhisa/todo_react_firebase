export const addTodo = text => {
  return (dispatch, getState, {getFirebase}) => {
    dispatch({ type: 'ADD_TODO_REQUEST' });
    const firebase = getFirebase();
    firebase.push('todos', {completed: false, text})
    .then(() => {
      dispatch({ type: 'ADD_TODO_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ADD_TODO_ERROR', err });
    });
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
