import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    searchHistory: [],
    searchedCity: {},
  },
  reducers: {
    addToSearchHistory: (state, action) => {
      state.searchHistory = [...state.searchHistory, action.payload];
    },
    getsearchedCity: (state, action) => {
      state.searchedCity = action.payload;
    },
  },
});

export const { addToSearchHistory, getsearchedCity } = weatherSlice.actions;

export default weatherSlice.reducer;
