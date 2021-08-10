import React from 'react';
import { useSelector } from 'react-redux';

export default function WeatherCard() {
    const locData = useSelector(state => state.locData);
    return (
        <section className="container">
            <section className="row">
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
    );
}