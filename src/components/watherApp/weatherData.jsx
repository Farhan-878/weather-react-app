import PropTypes from "prop-types";
function WeatherData({ weather }) {
  console.log("weather>>", weather);

  const convertUnixTimestampToTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString();

  return (
    <div>
      {/* <h4>
        {weather.name}, {weather.sys.country}
      </h4>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Clouds: {weather.clouds.all}%</p>
      <p>Feels Like: {weather.main.feels_like}°C</p>
      <p>Pressure: {weather.main.pressure}</p> */}

      <div className="weatherComponent ">
        <div className="weatherCondition">
          <span className="condition">
            <span>{weather.main.temp}°C</span> |{" "}
            {weather.weather[0].description}
          </span>
        </div>
        <span className="location">
          {" "}
          {weather.name}, {weather.sys.country}
        </span>
        <span className="weatherInfoLabel">Weather info</span>
        <div className="weatherInfoContainer">
          <div className="infoContainer">
            <div className="infoIcon">
              <img src="https://img.icons8.com/fluency/48/000000/sunset.png" />
            </div>
            <span className="infoLabel">
              {convertUnixTimestampToTime(weather.sys.sunset)}
              <span>sunset</span>
            </span>
          </div>
          <div className="infoContainer">
            <div className="infoIcon">
              <img src="https://img.icons8.com/fluency/48/000000/hygrometer.png" />
            </div>
            <span className="infoLabel">
              {weather.main.humidity}
              <span>humidity</span>
            </span>
          </div>
          <div className="infoContainer">
            <div className="infoIcon">
              <img src="https://img.icons8.com/fluency/48/000000/wind.png" />
            </div>
            <span className="infoLabel">
              {weather.wind.speed}m/s
              <span>wind</span>
            </span>
          </div>
          <div className="infoContainer">
            <div className="infoIcon">
              <img src="https://img.icons8.com/fluency/48/000000/atmospheric-pressure.png" />
            </div>
            <span className="infoLabel">
              {weather.main.pressure}
              <span>pressure</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

WeatherData.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string,
    sys: PropTypes.shape({
      country: PropTypes.string,
      sunset: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
      })
    ),
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      feels_like: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    clouds: PropTypes.shape({
      all: PropTypes.number,
    }),
  }),
};

export default WeatherData;
