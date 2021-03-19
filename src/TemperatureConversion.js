import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        <span>{Math.round(props.celsius)}°</span>
        <span className="unit-type">
          <span className="active">C</span> |
          <a href="/" onClick={displayFahrenheit}>
            {" "}
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureConversion">
        <span>{Math.round(fahrenheit())}°</span>
        <span className="unit-type">
          <a href="/" onClick={displayCelsius}>
            {" "}
            C
          </a>{" "}
          |<span className="active"> F</span>
        </span>
      </div>
    );
  }
}
