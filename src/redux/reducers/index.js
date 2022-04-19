import { combineReducers } from "redux";
import { city } from "./city.reducer";
import { weather } from "./weather.reducer";

/**
 * This will combine all reducers that will be exported for redux store
 */
export default combineReducers({
  city,
  weather,
});
