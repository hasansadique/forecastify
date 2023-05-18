import React from 'react'
import { useWeather } from '../context/Weather'

const Input = () => {
    const weather = useWeather()
    console.log(weather)
    const { searchCity, setSearchCity, getData } = weather
    return (
        <div className="relative">
            <input type="text" className="md:h-14 h-10 md:w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Search the city" value={searchCity} onChange={(e) => setSearchCity(e.target.value)}
            />
            <div className="absolute md:top-2 top-1 md:right-[36rem] right-10">
                <button className="md:h-10 h-8 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
                    onClick={getData}>Search</button>
            </div>
        </div>
    )
}

export default Input
