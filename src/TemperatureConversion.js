import React from "react";

export default function TemperatureConversion(props) {
  return (
    <div className="TemperatureConversion">
      <span>{Math.round(props.celsius)}°</span>
      <span className="unit-type">
        <a href="/">C</a> |<a href="/"> F</a>
      </span>
    </div>
  );
}
