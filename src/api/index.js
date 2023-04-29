const URL = 'https://api.weatherapi.com/v1/forecast.json?key=78ea634cea1f4692bbf144116232604'
export const getWeatherDataCity = async (city) => {
    const response = await fetch(`${URL}&q=${city}&days=5`)
    const data = await response.json()
    console.log(data)
    return data
}
export const getWeatherDataLoaction = async (lat, lon) => {
    const response = await fetch(`${URL}&q=${lat},${lon}`);
    const data = await response.json()
    console.log(data)
    return data
}
