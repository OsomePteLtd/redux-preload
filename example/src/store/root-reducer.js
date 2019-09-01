import { combineReducers } from 'redux'
import { LOAD_DOCUMENT } from './action'

const document = (state = [], action) =>
  action.type !== LOAD_DOCUMENT ? state : [...state, action.document]

export default combineReducers({
  document
})
