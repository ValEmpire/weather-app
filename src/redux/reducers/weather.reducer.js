import { SET_WEATHER } from "../../const";

const initialState = {
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
  timezone: null,
};

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      const { data } = action.payload;

      const { feels_like, humidity, pressure, temp, temp_max, temp_min } =
        data.main;

      const { description, icon, main } = data.weather[0];

      const { sunrise, sunset } = data.sys;

      const { visibility, timezone } = data;

      const { speed, deg } = data.wind;

      return {
        ...state,
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
        timezone,
      };

    default:
      return { ...state };
  }
};
