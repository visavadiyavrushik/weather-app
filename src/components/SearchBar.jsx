// src/components/SearchBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToSearchHistory } from "../redux/weatherSlice";
import { Input, Button } from "reactstrap";
import axios from "axios";
import { appId } from "../utils";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
      );

      // Handle the response data, and dispatch addToSearchHistory with the city
      const weatherData = response.data;
      console.log("weatherData: ", weatherData);
      // ...

      dispatch(addToSearchHistory(city));
      setCity("");
    } catch (err) {
      setError("City not found. Please try again.");
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
