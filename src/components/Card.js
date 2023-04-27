import React from 'react'
import { useWeather } from "../context/Weather";

const Card = () => {
    const weather = useWeather();
    return (
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} />
            <h1>{weather.data?.current?.temp_c}°C</h1>
            <h1>
                {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
                {weather.data?.location?.country}
            </h1>
        </div>
    );
};


export default Card
