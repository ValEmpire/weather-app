import { SET_CITY } from "../../const";

const initialState = {
  name: null,
  country: null,
  sunrise: null,
  sunset: null,
  feelsLike: null,
  main: null,
  high: null,
  low: null,
  temperature: null,
  humidity: null,
  pressure: null,
  visibility: null,
  windSpeed: null,
  windDegree: null,
  weatherIcon: null,
  description: null,
};

export const city = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      const { data, city } = action.payload;

      const { feels_like, humidity, pressure, temp, temp_max, temp_min } =
        data.main;

      const { description, icon, main } = data.weather[0];

      const { sunrise, sunset, country } = data.sys;

      const { visibility } = data;

      const { speed, deg } = data.wind;

      return {
        ...state,
        name: city,
        country,
        sunrise,
        visibility,
        sunset,
        feelsLike: feels_like,
        main,
        high: temp_max,
        low: temp_min,
        temperature: temp,
        humidity,
        pressure,
        windSpeed: speed,
        windDegree: deg,
        weatherIcon: icon,
        description: description,
      };

    default:
      return { ...state };
  }
};
