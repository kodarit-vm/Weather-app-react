import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getForecast } from './request'
import { formatTime } from './utils/formatTime'
import WeatherCard from './WeatherCard'

const useStyles = makeStyles(() => ({
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    biggerFont: {
      fontSize: '5vw'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
}))

const Weather = () => {
    const [forecasts, setForecast] = useState([])
    const [focusedForecastDT, setFocusedForecastDT] = useState()
    const classes = useStyles()

    useEffect(() => {
        getForecast().then((response) => {
            setForecast(response);
            setFocusedForecastDT(response.list[0].dt)
        })
    }, [])
    console.log('rendering', forecasts)

    if (!forecasts || !focusedForecastDT) return null

    const selectedForecast = forecasts.list.find(f => f.dt === focusedForecastDT)

    const renderWeatherItem = (forecast) => {
      return (
        <div style={{ padding: 10 }} key={forecast.dt}>
          <WeatherCard forecast={forecast}/>
        </div>
      )
    }

    return (
      <div>
        <div>
          <div className={`${classes.center} ${classes.biggerFont}`}>
            {forecasts.city.name}
          </div>
          <div className={classes.center}>
            Aurinko nousee klo: {formatTime(forecasts.city.sunrise)}
          </div>
          <div className={classes.center}>
            Aurinko laskee klo: {formatTime(forecasts.city.sunset)}
          </div>
        </div>
        <div className={classes.row}>
          {forecasts.list.map(forecast => renderWeatherItem(forecast))}
        </div>
      </div>
    )
}

export default Weather