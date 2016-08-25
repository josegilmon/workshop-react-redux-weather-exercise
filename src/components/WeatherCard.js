import React, {PropTypes} from 'react'
import styles from './WeatherCard.css'

const WeatherCard = (props) => (
  <div className={styles.wrapper}>
    <img src={`images/weather/${props.icon}.svg`} />
    <h3>{`${props.description} ${props.temp} ºC`}</h3>
    <h1>{`${props.city}, ${props.country}`}</h1>
  </div>
)

export default WeatherCard
