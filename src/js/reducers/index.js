import { combineReducers } from 'redux'
import { userAuthorized, userRegistered, userInfo } from './verification'

const reducer =  combineReducers({
  userAuthorized,
  userRegistered,
  userInfo
})

export default reducer
