import { useEffect } from 'react';
import { Card, Input, Button } from './components'
import { useWeather } from './context/Weather';
import './App.css';

function App() {
  const weather = useWeather()
  console.log(weather)
  useEffect(() => {
    weather.getCurrentLocationData()
  }, [])
  return (
    <div className="App">
      <Input />
      <Card />
      <Button onClick={weather.getData} value='Search' />
    </div>
  );
}

export default App;
