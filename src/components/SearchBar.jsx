// src/components/SearchBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToSearchHistory, getsearchedCity } from "../redux/weatherSlice";
import { Input, Button } from "reactstrap";
import axios from "axios";
import { apikey } from "../utils";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  console.log("weatherData: ", weatherData);
  const [error, setError] = useState(null);

  const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

  const getWeatherByLocation = async (city) => {
    try {
      const response = await axios.get(url(city), { origin: "cors" });
      const responseData = response.data;
      setWeatherData(responseData);

      dispatch(getsearchedCity(responseData));

      dispatch(addToSearchHistory(responseData.name));
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  const handleSearch = () => {
    if (city) {
      getWeatherByLocation(city);
      setError(null);
      setCity(null);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button color="primary" onClick={handleSearch}>
        Search
      </Button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;
