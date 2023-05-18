import { useEffect } from 'react';
import { Card, Input } from './components'
import { useWeather } from './context/Weather';
import './App.css';

function App() {
  const weather = useWeather()
  useEffect(() => {
    weather.getCurrentLocationData()
  }, [])
  return (
    <div data-testid='my-link'
      className="App">
      <Input />
      <Card />
    </div>
  );
}

export default App;
