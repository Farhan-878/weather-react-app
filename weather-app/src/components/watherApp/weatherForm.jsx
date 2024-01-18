import { useState } from "react";
import PropTypes from "prop-types";

function WeatherForm({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };
  return (
    <div className="cityComponent ">
      {/* <img
        src="https://img.icons8.com/fluency/96/000000/smiling-sun.png"
        className={`weatherLogo ${loading ? "loading-animation" : ""}`}
      /> */}
      <div className="sun-container">
        <div className={`cloud front ${loading ? "front-animation" : ""}`}>
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span
          className={`sun sunshine ${loading ? "sunshine-animation" : ""}`}
        ></span>

        <span className="sun"></span>
        <div className={`cloud back ${loading ? "back-animation" : ""}`}>
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
      <span className="chooseCityLabel">Find Weather of your city</span>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

WeatherForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default WeatherForm;
