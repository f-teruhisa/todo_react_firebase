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

export const toggleTodo = id => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const state = getState();
    const todo = state.firebase.data.todos[id];
    dispatch({ type: 'TOGGLE_TODO_REQUEST', text: todo.text, completed: !todo.completed });
    firebase.update(`todos/${id}`, {completed: !todo.completed})
    .then(() => {
      dispatch({ type: 'TOGGLE_TODO_SUCCESS', text: todo.text, completed: !todo.completed });
    }).catch(err => {
      dispatch({ type: 'TOGGLE_TODO_ERROR', text: todo.text, completed: !todo.completed, err });
    });
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
