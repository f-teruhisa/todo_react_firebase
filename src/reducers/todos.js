const getStringForCompleted = (completed) => ( // #2
  completed ? '完了' : '未完了'
)

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO_REQUEST':
      return {...state, notice: 'Sending data...'}
    case 'ADD_TODO_SUCCESS':
      return {...state, notice: 'Complete'}
    case 'ADD_TODO_ERROR':
      return {...state, notice: 'Errror'}
    case 'TOGGLE_TODO_REQUEST':
      return {...state, notice:
          '"' + action.text + '"\'s Status"' +
          getStringForCompleted(action.completed) +
          '"changing...'
      }
    case 'TOGGLE_TODO_SUCCESS':
      return {
        ...state,
        notice: // #1
          '"' + action.text + '"\'s Status"' +
          getStringForCompleted(action.completed) +
          '"cahnged.'
      }
    case 'TOGGLE_TODO_ERROR':
      return {
        ...state,
        notice: // #1
          '"' + action.text + '"error occured'
      }
      // case 'TOGGLE_TODO’: は削除  // #3
    default:
      return state
  }
}

export default todos
