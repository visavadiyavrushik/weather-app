import React from "react";
import { Card } from "reactstrap";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const Weather = () => {
  return (
    <Card>
      <SearchBar />
      <WeatherDisplay />
    </Card>
  );
};

export default Weather;
