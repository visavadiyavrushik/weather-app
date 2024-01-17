// src/components/WeatherDisplay.js
import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

const WeatherDisplay = () => {
  const searchHistory = useSelector((state) => state.weather.searchHistory);

  return (
    <div>
      <h2>Recent Searches</h2>
      <ListGroup>
        {searchHistory.map((city, index) => (
          <ListGroupItem key={index}>{city}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default WeatherDisplay;
