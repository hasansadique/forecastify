import React from 'react'
import { useWeather } from '../context/Weather'

const Input = () => {
    const weather = useWeather()
    console.log(weather)
    return (
        <div>
            <input type='text' value={weather.searchCity} onChange={(e) => weather.setSearchCity(e.target.value)} />
        </div>
    )
}

export default Input
