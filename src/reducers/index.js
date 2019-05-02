import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import notice from './notice'
import visibilityFilter from './visibilityFilter'
import todoStatuses from './todoStatuses'

export default combineReducers({
  firebase: firebaseReducer,
  auth,
  notice,
  todoStatuses,
  visibilityFilter
})
