import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherData from "./weatherData";
import PropTypes from "prop-types";
import axios from "axios";

const API_key = "098fc4b3be221851acadfb433b5d0416";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);

    setError(null);
    const options = {
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`,
    };
    try {
      const response = await axios.request(options);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="weatherForm ">
        <div className="container">
          <span className="appLabel">React Weather App</span>

          {!weatherData && (
            <WeatherForm onSearch={handleSearch} loading={loading} />
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {weatherData && !loading && <WeatherData weather={weatherData} />}
          {weatherData && (
            <button onClick={() => setWeatherData(false)}>Back</button>
          )}
        </div>
      </div>
      <p className="copyright">Made with ❤️ by Farhan</p>
    </>
  );
}

Weather.propTypes = {
  weatherData: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default Weather;
