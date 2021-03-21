import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = props.data.main.temp;
    return Math.round(temperature);
  }

  return (
    <span>
      <thead>
        <tr>
          <th scope="col">{hours()}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <WeatherIcon code={props.data.weather[0].icon} />
          </td>
        </tr>
        <tr>
          <td>{temperature()}°C</td>
        </tr>
        <tr>
          <td className="text-capitalize">
            {props.data.weather[0].description}
          </td>
        </tr>
      </tbody>
    </span>
  );
}
