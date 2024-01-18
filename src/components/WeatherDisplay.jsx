// src/components/WeatherDisplay.js
import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

const WeatherDisplay = () => {
  const searchHistory = useSelector((state) => state.weather.searchHistory);
  const searchedCity = useSelector((state) => state.weather.searchedCity);

  return (
    <div>
      <h2>Recent Searches</h2>
      <ListGroup>
        {searchHistory?.map((city, index) => (
          <ListGroupItem key={index}>{city}</ListGroupItem>
        ))}
      </ListGroup>
      <div className="weather">
        <h1>City : {searchedCity?.name}</h1>
        <h2>{searchedCity?.main?.temp}</h2>
        <div className="more-info">
          <h2>humidity :{searchedCity?.main?.humidity}</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
