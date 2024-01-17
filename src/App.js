import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <h1 className="mt-3">Weather App</h1>
      <SearchBar />
      <WeatherDisplay />
    </Container>
  );
}

export default App;
