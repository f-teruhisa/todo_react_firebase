import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import notice from './notice'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  firebase: firebaseReducer,
  notice,
  visibilityFilter
})
