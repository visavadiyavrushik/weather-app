import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    searchHistory: [],
  },
  reducers: {
    addToSearchHistory: (state, action) => {
      console.log("action: ", state, action);
      state.searchHistory = [...state.searchHistory, action.payload];
    },
  },
});

export const { addToSearchHistory } = weatherSlice.actions;

export default weatherSlice.reducer;
