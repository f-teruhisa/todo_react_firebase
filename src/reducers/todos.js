import {
  LOCATION_CHANGE_ON_TODOS,
  LOGOUT_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
   NOT_AUTHENTICATED_ON_TODO_ACTION
}
from '../actions/'

const getStringForCompleted = (completed) => (
  completed ? '完了' : '未完了'
)

const todos = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {...state, notice: 'Sending data...'}
    case ADD_TODO_SUCCESS:
      return {...state, notice: 'Complete'}
    case ADD_TODO_ERROR:
      return {...state, notice: 'Errror'}
    case TOGGLE_TODO_REQUEST:
      return {...state, notice:
          '"' + action.text + '"\'s Status"' +
          getStringForCompleted(action.completed) +
          '"changing...'
      }
    case TOGGLE_TODO_SUCCESS:
      return {...state, notice:
          '"' + action.text + '"\'s Status"' +
          getStringForCompleted(action.completed) +
          '"cahnged.'
      }
    case TOGGLE_TODO_ERROR:
      return {...state, notice:
          '"' + action.text + '"error occured'
      }
    case LOCATION_CHANGE_ON_TODOS:
    case LOGOUT_SUCCESS:
      return {}
     case NOT_AUTHENTICATED_ON_TODO_ACTION:
       return {...state, notice: 'You must login to add & update tasks'
      }
    default:
      return state
  }
}

export default todos;
