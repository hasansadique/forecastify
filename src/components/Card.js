import React, { useState } from 'react'
import { useWeather } from "../context/Weather";

const Card = () => {
    const [isCelcious, setIsCelcious] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const weather = useWeather();
    const convertTemperature = () => {
        setIsActive(prev => !prev)
        setIsCelcious(prevTemperature => !prevTemperature)
    }

    return (
        <>
            <div className="card">
                <div className="card_left">
                    <div>
                        <img alt='#' src={weather?.data?.current?.condition?.icon} />
                        {weather.data?.current && <h1 className='h1_left'>{weather.data?.current[isCelcious ? 'temp_c' : 'temp_f']}°{isCelcious ? 'C' : 'F'}</h1>}
                        <h2 className='h2_left'>
                            {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
                            {weather.data?.location?.country}
                        </h2>
                    </div>
                </div>

                <button onClick={convertTemperature} className={`${isActive ? "toggle-button" : ""} bg-transparent border border-collapse rounded-full`}>Celcious</button>
                <button onClick={convertTemperature} className={`${isActive ? "" : "toggle-button"} bg-transparent border border-collapse rounded-full`}  >Fahrenheit</button>

                {/* <button onClick={convertTemperature}>{isCelcious ? "Fahrenheit" : "Celcious"}</button> */}

                <section>{
                    weather.data?.forecast?.forecastday[0]?.hour.map((data, i) => {
                        return (
                            <p key={i}>{data.temp_c}</p>
                        )
                    })
                }</section>
                <section>
                    5 day Data
                    {
                        weather.data?.forecast?.forecastday.map((data, i) => {
                            return (
                                <p key={i} >{data.day.avgtemp_c}</p>
                            )
                        })
                    }
                </section>
            </div>
        </>
    );
};


export default Card
