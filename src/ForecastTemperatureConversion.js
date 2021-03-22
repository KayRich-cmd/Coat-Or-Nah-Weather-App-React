import React, { useState } from "react";

export default function ForecastTemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return <span>{props.celsius}</span>;
  } else {
    return <span onClick={displayFahrenheit}>{Math.round(fahrenheit())}</span>;
  }
}
