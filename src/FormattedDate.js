import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <h3>
      `${day} @ {hours}:{minutes}`
    </h3>
  );
}
