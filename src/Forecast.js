import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="card">
          <div className="card-body">
            <h2>Hourly Forecast for {props.city}</h2>

            <br />
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Time 1</th>
                  <th scope="col">Time 2</th>
                  <th scope="col">Time 3</th>
                  <th scope="col">Time 4</th>
                  <th scope="col">Time 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pic 1</td>
                  <td>Pic 2</td>
                  <td>Pic 3</td>
                  <td>Pic 4</td>
                  <td>Pic 5</td>
                </tr>
                <tr>
                  <td>temp 1°C</td>
                  <td>temp 2°C</td>
                  <td>temp 3°C</td>
                  <td>temp 4°C</td>
                  <td>temp 5°C</td>
                </tr>
                <tr>
                  <td>description 1</td>
                  <td>description 2</td>
                  <td>description 3</td>
                  <td>description 4</td>
                  <td>description 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2e85ceac5b7aab61ec3567d2389a4fd2";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
