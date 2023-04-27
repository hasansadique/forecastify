const URL = 'https://api.weatherapi.com/v1/current.json?key=78ea634cea1f4692bbf144116232604&q'
export const getWeatherDataCity = async (city) => {
    const response = await fetch(`${URL}&q=${city}`)
    const data = response.json()
    return data
}
export const getWeatherDataLoaction = async (lat, lon) => {
    const response = await fetch(`${URL}&q=${lat},${lon}`);
    const data = response.json()
    return data
}
