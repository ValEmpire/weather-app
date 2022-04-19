import axios from "axios";
import { SET_CITIES, SET_CITY } from "../../const";

/**
 * This will use the open weather api to fetch all cities with limit of 5
 * This will render all the return data in appbar search field
 * @param {string} city
 * @returns dispatch that will trigger store with type SET_CITIES
 */
export const getCities = (city) => async (dispatch) => {
  try {
    const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

    const res = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${OPEN_WEATHER_API_KEY}&limit=5`
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

/**
 * This will get the timezone of the city. This will use timezonedb api to fetch the timezone
 * Needed timezone to render the time of the selected city sunrise and sunset
 * @param {object} city
 * @returns dispatch that will trigger store with type SET_CITY
 */
export const setCity = (city) => async (dispatch) => {
  try {
    const TIMEZONE_API_KEY = process.env.REACT_APP_TIMEZONE_API_KEY;

    const { lon, lat } = city;

    const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONE_API_KEY}&by=position&lng=${lon}&lat=${lat}&format=json`;

    const res = await axios.get(url);

    const timeZone = res.data.zoneName;

    // put timezone key and value of return data.zoneTime
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
