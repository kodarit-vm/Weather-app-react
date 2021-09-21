import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getForecast } from './request'
import { formatTime } from './utils/formatTime'

const useStyles = makeStyles(() => ({
    
}))

const Weather = () => {
    const [forecasts, setForecast] = useState([])
    const [focusedForecastDT, setFocusedForecastDT] = useState()

    useEffect(() => {
        getForecast().then((response) => {
            setForecast(response);
            setFocusedForecastDT(response.list[0].dt)
        })
    }, [])
    console.log('rendering', forecasts)

    if (!forecasts || !focusedForecastDT) return null

    const selectedForecast = forecasts.list.find(f => f.dt === focusedForecastDT)

    return (
        <div>
          <div>
            {forecasts.city.name}
          </div>
          <div>
            Aurinko nousee klo: {formatTime(forecasts.city.sunrise)}
          </div>
          <div>
            Aurinko laskee klo: {formatTime(forecasts.city.sunset)}
          </div>
        </div>
    )
}

export default Weather