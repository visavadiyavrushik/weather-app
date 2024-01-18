export const apikey = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const Ktoc = (K) => {
  return Math.floor(K - 273.15);
};
