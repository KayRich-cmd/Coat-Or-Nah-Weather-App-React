import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: "Sunny",
      humidity: response.data.main.humidity,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row mt-2">
                <div className="col">
                  <input
                    type="search"
                    className="form-control form-input-style"
                    placeholder="Need A Coat Today? (Enter City Name)"
                    autoFocus="on"
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

            <div className="Overview">
              <ul>
                <li>
                  <h1>{weatherData.city}</h1>
                </li>
                <li>{weatherData.description}</li>
                <li>
                  <small>Last Updated On: Friday @ 00:12</small>
                </li>
              </ul>
            </div>

            <div className="CurrentWeather">
              <div className="row">
                <div className="col-12">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                    alt="Sunny"
                  />
                </div>
              </div>
              <span>{Math.round(weatherData.temperature)}°</span>
              <span className="unit-type">
                <a href="/">C</a> |<a href="/"> F</a>
              </span>
            </div>

            <div className="OtherDescription">
              <ul>
                <li>
                  <span className="other-description-label"> Humidity:</span>{" "}
                  <span>{weatherData.humidity}%</span>
                </li>
                <li>
                  <span className="other-description-label"> Wind Speed:</span>{" "}
                  <span>{Math.round(weatherData.wind)}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2e85ceac5b7aab61ec3567d2389a4fd2";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
