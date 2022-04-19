import axios from "axios";
import { SET_CITIES, SET_CITY } from "../../const";

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
const TIMEZONE_API_KEY = process.env.REACT_APP_TIMEZONE_API_KEY;

export const getCities = (city) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${OPEN_WEATHER_API_KEY}&limit=5`
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

export const setCity = (city) => async (dispatch) => {
  try {
    const { lon, lat } = city;

    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONE_API_KEY}&by=position&lng=${lon}&lat=${lat}&format=json`;

    const res = await axios.get(url);

    const timeZone = res.data.zoneName;

    city["timeZone"] = timeZone;

    return dispatch({
      type: SET_CITY,
      payload: city,
    });
  } catch (err) {
    // handle error

    console.log(err);
  }
};
