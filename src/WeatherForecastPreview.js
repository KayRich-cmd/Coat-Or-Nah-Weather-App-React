import React from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastTemperatureConversion from "./ForecastTemperatureConversion";

import "./WeatherForecastPreview.css";
import TemperatureConversion from "./TemperatureConversion";

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
    <div className="WeatherForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      <ForecastTemperatureConversion celsius={temperature()} />
      °C
      <p className="text-capitalize">{props.data.weather[0].description}</p>
    </div>
  );
}
