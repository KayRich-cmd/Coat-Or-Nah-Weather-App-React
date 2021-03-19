import React from "react";

export default function Forecast() {
  let forecastData = [
    {
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: 30,
      description: "Partly Cloudy",
    },
    {
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: 13,
      description: "Partly Cloudy",
    },
    {
      imgUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
      temperature: 20,
      description: "Sunny",
    },
    {
      imgUrl: "https://ssl.gstatic.com/onebox/weather/48/rain.png",
      temperature: 20,
      description: "Rain",
    },
    {
      imgUrl: "https://ssl.gstatic.com/onebox/weather/48/rain.png",
      temperature: 18,
      description: "Rain",
    },
  ];

  return (
    <div className="Forecast">
      <div className="card">
        <div className="card-body">
          <h2>Hourly Forecast</h2>

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
                <td>
                  <img
                    src={forecastData[0].imgUrl}
                    alt={forecastData[0].description}
                  />
                </td>
                <td>
                  <img
                    src={forecastData[1].imgUrl}
                    alt={forecastData[1].description}
                  />
                </td>
                <td>
                  <img
                    src={forecastData[2].imgUrl}
                    alt={forecastData[2].description}
                  />
                </td>
                <td>
                  <img
                    src={forecastData[3].imgUrl}
                    alt={forecastData[3].description}
                  />
                </td>
                <td>
                  <img
                    src={forecastData[4].imgUrl}
                    alt={forecastData[4].description}
                  />
                </td>
              </tr>
              <tr>
                <td>{forecastData[0].temperature}°C</td>
                <td>{forecastData[1].temperature}°C</td>
                <td>{forecastData[2].temperature}°C</td>
                <td>{forecastData[3].temperature}°C</td>
                <td>{forecastData[4].temperature}°C</td>
              </tr>
              <tr>
                <td>{forecastData[0].description}</td>
                <td>{forecastData[1].description}</td>
                <td>{forecastData[2].description}</td>
                <td>{forecastData[3].description}</td>
                <td>{forecastData[4].description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
