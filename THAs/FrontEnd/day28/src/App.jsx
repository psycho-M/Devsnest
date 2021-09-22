import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const apiKey = '30a3e9cc1a084b70b01124944210908';
  const [location, setLocation] = useState('');
  const [locData, setLocData] = useState({});

  const updateLocData = () => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setLocData(data);
    })
  }

  return (
    <section className='App'>
      <section className="container">
        <section className="row">
          <section className="col-12 form">
            <input 
              type="text" 
              value={location} 
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <button 
              className="btn btn-primary" 
              onClick={() => updateLocData()}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  updateLocData();
                }
              }}
            >Submit</button>
          </section>

          <section className="offset-md-4 col-12 col-md-4 weather">
            <section className="card">
              {locData.location ? (
                <section>
                  {/* <h2>{locData.location.name}</h2> */}
                  <img src={locData.current.condition.icon} alt="current condition icon" />
                  <section className="temp">
                    {locData.current.temp_c}°C
                  </section>
                  <section className="desc">{locData.current.condition.text}</section>
                  <section className="location">{locData.location.name}</section>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <section className="title">Wind Now</section>
                        <section className="data">{locData.current.wind_kph}<span className="unit">KM/h</span></section>
                      </div>
                      <div className="col">
                      <section className="title">Humidity</section>
                        <section className="data">{locData.current.humidity}<span className="unit">%</span></section>
                      </div>
                      <div className="col">
                      <section className="title">Precipitaion</section>
                        <section className="data">{locData.current.precip_mm}<span className="unit">mm</span></section>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <h2>Place not found!</h2>
              )}
            </section>
          </section>  
        </section>  
      </section>  
    </section>
  );
}

export default App;
