import { getWeatherApi, getForecastApi } from '../api/index'

export const dataHasErrored = bool => {
  return {
    type: 'DATA_HAS_ERRORED',
    hasErrored: bool
  }
}
export const dataIsLoading = bool => {
  return {
    type: 'DATA_IS_LOADING',
    isLoading: bool
  }
}

export const weatherDataSuccess = payload => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload
  }
}

export const forecastDataSuccess = payload => {
  return {
    type: 'FETCH_FORECAST_DATA_SUCCESS',
    payload
  }
}

export const getWeatherInfo = (state="FL", city="Miami") => {
  return (dispatch) => {
    dispatch(dataIsLoading(true))
    getWeatherApi(state, city).then(resp => {
      dispatch(dataIsLoading(false))
      dispatch(weatherDataSuccess(resp.data))
    })
    .catch(() => dispatch(dataHasErrored(true)))
  }
}

export const getForecastInfo = (state="FL", city="Miami") => {
  return (dispatch) => {
    dispatch(dataIsLoading(true))
    getForecastApi(state, city).then(resp => {
      dispatch(dataIsLoading(false))
      dispatch(forecastDataSuccess(resp.data.forecast.simpleforecast.forecastday))
    })
    .catch(() => dispatch(dataHasErrored(true)))
  }
}
