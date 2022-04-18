import { SET_CITY } from "../../const";

const initialState = {
  selectedCity: null,
  country: null,
  sunrise: null,
  sunset: null,
  feelsLike: null,
  main: null,
  high: null,
  low: null,
  temperature: null,
  humidity: null,
  visibility: null,
  windSpeed: null,
  windDegree: null,
  weatherIcon: null,
  description: null,
};

export const city = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      const data = action.payload;

      return {
        ...state,
        ...data,
      };

    default:
      return { ...state };
  }
};
