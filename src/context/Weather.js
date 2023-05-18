import { createContext, useContext, useState } from "react";
import { getWeatherDataCity, getWeatherDataLoaction } from "../api";

const WeatherContext = createContext()
const useWeather = () => { //Custom Hook for passing data
    return useContext(WeatherContext)
}

const WeatherProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [searchCity, setSearchCity] = useState('') //state for searching city
    const getData = async () => {
        if (!searchCity) {
            alert("Enter the City")
            return
        }
        const cities = await getWeatherDataCity(searchCity)
        setData(cities)
    }
    const getCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataLoaction(
                position.coords.latitude,
                position.coords.longitude
            ).then((data) => setData(data));
        });
    };
    return (
        <WeatherContext.Provider value={{
            searchCity,
            data,
            setSearchCity,
            getData,
            getCurrentLocationData,
        }}
        >
            {children}
        </WeatherContext.Provider>
    )
}
export { useWeather, WeatherProvider }