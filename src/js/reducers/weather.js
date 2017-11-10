export const dataHasErrored = (state = false, action) => {
  switch (action.type) {
  case 'DATA_HAS_ERRORED':
    return action.hasErrored
  default:
    return state
  }
}

export const dataIsLoading = (state = false, action) => {
  switch (action.type) {
  case 'DATA_IS_LOADING':
    return action.isLoading
  default:
    return state
  }
}

export const weatherData = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_DATA_SUCCESS':
    return [action.payload]
  default:
    return state
  }
}

export const forecastData = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_FORECAST_DATA_SUCCESS':
    return action.payload
  default:
    return state
  }
}
