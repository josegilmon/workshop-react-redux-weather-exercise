import { takeEvery } from 'redux-saga'
import {call, put, select} from 'redux-saga/effects'
import fetchWeatherService from '../services/fetchWeather'
import weatherSelector from '../selectors/weather'
import weatherActions from '../actions/weather'
import weatherActionTypes from '../constants/actions/weather'

export function * fetchWeather () {
  const searchText = yield select(weatherSelector.getSearchText)

  try {
    const response = yield call(fetchWeatherService, searchText)
    yield put(weatherActions.fetchWeatherSuccess(response))

  } catch (error) {
    yield put(weatherActions.fetchWeatherError(error))
  }
}

export function * watchFetchWeather () {
  yield * takeEvery(weatherActionTypes.FETCH_WEATHER, fetchWeather)
}
