import { combineReducers } from 'redux'
import { userAuthorized, userRegistered, userInfo } from './verification'
import { dataHasErrored, dataIsLoading, weatherData, forecastData } from './weather'

const reducer =  combineReducers({
  userAuthorized,
  userRegistered,
  userInfo,
  dataHasErrored,
  dataIsLoading,
  weatherData,
  forecastData
})

export default reducer
