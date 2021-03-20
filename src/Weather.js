import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "2e85ceac5b7aab61ec3567d2389a4fd2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mt-2">
                <div className="col">
                  <input
                    type="search"
                    className="form-control form-input-style"
                    placeholder="Need A Coat Today? (Enter City Name)"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-auto">
                  <a className="btn btn-secondary" href="/" role="button">
                    Search
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    className="btn btn-secondary current-location-button"
                    href="/"
                    role="button"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
