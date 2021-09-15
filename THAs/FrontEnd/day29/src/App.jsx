import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
// import { useState, useEffect } from 'react';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import { useSelector } from 'react-redux';
import ToggleTheme from './components/ToggleTheme';

function App() {
  // const apiKey = '30a3e9cc1a084b70b01124944210908';
  // const [location, setLocation] = useState('');
  // const [locData, setLocData] = useState({});

  // const updateLocData = () => {
  //   fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setLocData(data);
  //   })
  // }

  const theme = useSelector(state => state.theme);
  console.log(theme);
  return (
    <section className={theme ? 'App' : 'App light'}>
      <ToggleTheme />
      <Form />
      <WeatherCard />
    </section>
  );
}

export default App;
