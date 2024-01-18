/* eslint-disable jsx-a11y/alt-text */
// src/components/WeatherDisplay.js
import React from "react";
import { useSelector } from "react-redux";
import { Ktoc } from "../utils";

const WeatherDisplay = () => {
  // get data from store
  const searchedCity = useSelector((state) => state.weather.searchedCity);

  // Display here
  return (
    <>
      <div>
        {searchedCity && searchedCity?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${searchedCity?.weather[0]?.icon}@2x.png`}
          />
        )}

        {searchedCity?.main && (
          <>
            <h5>{searchedCity?.weather[0].main}</h5>
            <h2>{`${Ktoc(searchedCity?.main?.temp)} °C `}</h2>
            <div class="more-info">
              <h4>{searchedCity?.name}</h4>
              <p>
                Humidity : <span>{searchedCity?.main?.humidity}%</span>
              </p>
              <p>
                Wind speed :{" "}
                <span>
                  {+Math.trunc(searchedCity?.wind?.speed * 3.16)} km/h
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WeatherDisplay;
