import React from 'react'
import WeatherCard from './WeatherCard'
import styles from './WeatherSearch.css'

const WeatherSearch = (props) => (
  <div>
    <div className={styles.searchBox}>
      <input
        type='text'
        placeholder='City'
        value={props.searchText}
        onChange={event => {
          props.actions.setSearchText(event.target.value)
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            props.actions.fetchWeather()
          }
        }}
      />

      <div>
        <button
          onClick={event => props.actions.fetchWeather()}
          disabled={props.loading}
        >
          {props.loading ? 'Loading...' : 'Get weather'}
        </button>
      </div>

      {props.error && <div>Error trying to fetch a forecast</div>}
    </div>
    {
      props.weatherList.map(weather => {
        return <WeatherCard key={weather.id} {...weather} />
      })
    }
  </div>
)

WeatherSearch.defaultProps = {
  weatherList: []
}

export default WeatherSearch
