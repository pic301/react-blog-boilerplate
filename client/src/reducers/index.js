import { combineReducers } from 'redux'
import chat from './chat_reducer'
import user from './user_reducer'

const rootReducer = combineReducers(user,chat)

export default rootReducer;