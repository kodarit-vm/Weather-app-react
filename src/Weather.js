import React, { useState, useEffect } from 'react'
import { getForecast } from './request'

const Weather = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        getForecast().then((response) => {
            console.log('response', response)
        })
    }, [])

    console.log('rendering')
    return (
        <div>
            Tässä on luku mikä on "value": {value}
            <button onClick={() => setValue()}> Tässä on nappi </button>
        </div>
    )
}

export default Weather