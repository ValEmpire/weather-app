import axios from "axios";
import { SET_CITY } from "../../const";

export const getCityWeather = (city) => (dispatch) => {
  try {
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

    const resCity = axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid={${API_KEY}}`
    );

    return console.log(resCity);

    dispatch({
      type: SET_CITY,
      payload: resCity,
    });
  } catch (err) {
    // handle error
  }
};
