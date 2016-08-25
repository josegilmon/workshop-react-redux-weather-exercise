import weatherActionTypes from '../constants/actions/weather'

export default {
  fetchWeather: () => ({ type: weatherActionTypes.FETCH_WEATHER }),
  fetchWeatherError: error => ({ type: weatherActionTypes.FETCH_WEATHER_ERROR, error }),
  fetchWeatherSuccess: weatherList => ({ type: weatherActionTypes.FETCH_WEATHER_SUCCESS, weatherList }),
  setSearchText: searchText => ({ type: weatherActionTypes.SET_SEARCH_TEXT, searchText })
}
