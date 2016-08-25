import weatherActionTypes from '../constants/actions/weather'

const initialState = {
  searchText: '',
  weatherList: [],
  loading: false,
  error: null
}

function fetchWeather (state) {
  return {
    ...state,
    weatherList: [],
    loading: true,
    error: null
  }
}

function fetchWeatherSuccess (state, action) {
  return {
    ...state,
    weatherList: action.weatherList,
    loading: false,
    error: null
  }
}

function fetchWeatherError (state, action) {
  return {
    ...state,
    loading: false,
    error: action.error
  }
}

function setSearchText (state, action) {
  return {
    ...state,
    searchText: action.searchText
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case weatherActionTypes.FETCH_WEATHER:
      return fetchWeather(state, action)
    case weatherActionTypes.FETCH_WEATHER_SUCCESS:
      return fetchWeatherSuccess(state, action)
    case weatherActionTypes.FETCH_WEATHER_ERROR:
      return fetchWeatherError(state, action)
    case weatherActionTypes.SET_SEARCH_TEXT:
      return setSearchText(state, action)
    default:
      return state
  }
}
