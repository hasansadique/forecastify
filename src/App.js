import { useEffect } from 'react';
import { Card, Input, Button } from './components'
import { useWeather } from './context/Weather';
import './App.css';

function App() {
  const weather = useWeather()
  useEffect(() => {
    weather.getCurrentLocationData()
  }, [])
  return (
    <div className="App">
      <Input />
      <Button getData={weather.getData} value='Search' />
      <Card />
    </div>
  );
}

export default App;
