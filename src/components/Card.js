import React, { useState } from 'react'
import { useWeather } from "../context/Weather";

const Card = () => {
    const [isCelcious, setIsCelcious] = useState(true);
    const weather = useWeather();
    const convertTemperature = () => {
        setIsCelcious(prevTemperature => !prevTemperature)
    }
    return (
        <div className="card">
            <img alt='#' src={weather?.data?.current?.condition?.icon} />
            {isCelcious ?
                (<h1>{weather.data?.current?.temp_c}°C</h1>)
                :
                (<h1>{weather.data?.current?.temp_f}°F</h1>)}
            <button onClick={convertTemperature}>{isCelcious ? "Fahrenheit" : "Celcious"}</button>
            <h1>
                {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
                {weather.data?.location?.country}
            </h1>
            <p>{
                weather.data?.forecast?.forecastday[0].hour.map((data, i) => {
                    return (
                        <>
                            <p key={i}>{data.temp_c}</p>
                        </>
                    )
                })
            }</p>
        </div>
    );
};


export default Card
