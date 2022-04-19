import axios from "axios";
import { SET_CITIES, SET_CITY } from "../../const";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const getCities = (city) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}&limit=5`
    );

    return dispatch({
      type: SET_CITIES,
      payload: res.data,
    });
  } catch (err) {
    // handle error

    console.log(err);
  }
};

export const setCity = (city) => (dispatch) => {
  return dispatch({
    type: SET_CITY,
    payload: city,
  });
};
