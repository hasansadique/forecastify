const URL = 'https://api.weatherapi.com/v1/forecast.json?key=78ea634cea1f4692bbf144116232604'
export const getWeatherDataCity = async (city) => {
    const response = await fetch(`${URL}&q=${city}`)
    const data = response.json()
    console.log(data)
    return data
}
export const getWeatherDataLoaction = async (lat, lon) => {
    const response = await fetch(`${URL}&q=${lat},${lon}`);
    const data = response.json()
    console.log(data)
    return data
}
