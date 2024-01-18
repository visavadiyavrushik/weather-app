import React from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import "./style.css";

function App() {
  return (
    <Container>
      <Weather />
    </Container>
  );
}

export default App;
