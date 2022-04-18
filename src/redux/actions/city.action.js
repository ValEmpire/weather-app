import axios from "axios";
import { SET_CITY } from "../../const";

export const getCityWeather = (city) => async (dispatch) => {
  try {
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

    const resCity = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
    );

    if (resCity.data.length === 0) throw new Error("City not found");

    const { lon, lat } = resCity.data[0];

    const resWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const { data } = resWeather;

    dispatch({
      type: SET_CITY,
      payload: {
        data,
        city,
      },
    });
  } catch (err) {
    // handle error

    console.log(err);
  }
};
