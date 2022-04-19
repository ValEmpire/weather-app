import axios from "axios";
import { SET_WEATHER } from "../../const";

/**
 * This will fetch weatherByCoordinates by openweathermap api.
 * @param {object} city
 * @returns dispatch that will trigger store with type SET_WEATHER
 */
export const getWeatherByCoordinates = (city) => async (dispatch) => {
  try {
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

    const { lon, lat } = city;

    const resWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const { data } = resWeather;

    return dispatch({
      type: SET_WEATHER,
      payload: {
        data,
      },
    });
  } catch (err) {
    // handle error

    console.log(err);
  }
};
