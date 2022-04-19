import { SET_CITY, SET_CITIES } from "../../const";

const initialState = {
  cities: [],
  selectedCity: {
    name: null,
    country: null,
    state: null,
    long: null,
    lat: null,
    timeZone: null,
  },
};

export const city = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    case SET_CITY:
      const selectedCity = action.payload;

      return {
        ...state,
        selectedCity,
      };

    default:
      return { ...state };
  }
};
