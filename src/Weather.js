import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
                <h1>Sydney, AUS</h1>
              </li>
              <li>Perpetually Sunny Here</li>
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
            <span>3°</span>
            <span className="unit-type">
              <a href="/">C</a> |<a href="/"> F</a>
            </span>
          </div>

          <div className="OtherDescription">
            <ul>
              <li>
                <span className="other-description-label"> Humidity:</span>{" "}
                <span>--%</span>
              </li>
              <li>
                <span className="other-description-label"> Wind Speed:</span>{" "}
                <span>--</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
