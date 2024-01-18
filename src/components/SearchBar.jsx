// src/components/SearchBar.js
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, InputGroup, InputGroupText } from "reactstrap";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { addToSearchHistory, getsearchedCity } from "../redux/weatherSlice";
import { apikey } from "../utils";

const RecentSearches = ({ recentSearches, handleSearchClick, ref }) => (
  <div className="recent-search" ref={ref}>
    <p className="pt-2 mb-0">Recent Searches</p>
    <ul>
      {recentSearches.map((search, index) => (
        <li key={index} onClick={() => handleSearchClick(search)}>
          {search}
        </li>
      ))}
    </ul>
  </div>
);

// SearchBar component
const SearchBar = () => {
  const dispatch = useDispatch();
  // get History form Redux Store
  const searchHistory = useSelector((state) => state.weather.searchHistory);
  // useRef Hook
  const recentSearchRef = useRef(null);

  // Use Local State
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  //
  const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  // Api call after search
  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      getWeatherByLocation(city);
      setError(null);
    }
  };
  // When Input change
  const handleSearchChange = (e) => {
    setCity(e.target.value);
    setError(null);
  };

  const handleRecentSearchClick = (search) => {
    setShowRecentSearches(false); // Close recent searches

    setCity(search);
    if (search) {
      getWeatherByLocation(search);
    }
  };

  // Api Function
  const getWeatherByLocation = async (city) => {
    try {
      const response = await axios.get(url(city));
      const responseData = response.data;
      dispatch(getsearchedCity(responseData));
      if (!searchHistory.includes(responseData.name)) {
        dispatch(addToSearchHistory(responseData.name));
      }
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  const handleInputFocus = () => {
    setShowRecentSearches(true);
  };

  // On click Outside
  const handleDocumentClick = (e) => {
    if (
      !e.target.classList.contains("form-control") &&
      !recentSearchRef.current?.contains(e.target)
    ) {
      setShowRecentSearches(false);
    }
  };
  // Hook
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="search-form">
      <Form onSubmit={handleSearch}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Enter City"
            autoComplete="off"
            value={city || ""}
            onChange={handleSearchChange}
            onFocus={handleInputFocus}
            // onBlur={handleInputBlur}
          />
          <InputGroupText className="cursor-pointer" onClick={handleSearch}>
            <SearchIcon />
          </InputGroupText>
        </InputGroup>
      </Form>

      {/* if error */}
      {error && <p className="text-danger mt-2">{error}</p>}

      {/* Display Recent Search */}
      {showRecentSearches && searchHistory && searchHistory.length > 0 && (
        <RecentSearches
          recentSearches={searchHistory.slice().reverse().slice(0, 5)}
          handleSearchClick={handleRecentSearchClick}
          ref={recentSearchRef}
        />
      )}
    </div>
  );
};

export default SearchBar;
