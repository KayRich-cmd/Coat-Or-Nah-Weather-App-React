import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Overview">
        <ul>
          <li>
            <h1>
              {props.data.city}, {props.data.country}
            </h1>
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>

      <div className="CurrentWeather">
        <div className="row">
          <div className="col-12">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <TemperatureConversion celsius={props.data.temperature} />
      </div>

      <div className="OtherDescription">
        <ul>
          <li>
            <span className="other-description-label"> Humidity:</span>{" "}
            <span>{props.data.humidity}%</span>
          </li>
          <li>
            <span className="other-description-label"> Wind Speed:</span>{" "}
            <span>{Math.round(props.data.wind)}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
