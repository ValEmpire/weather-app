import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

/**
 * This will create and initialize redux store
 * @returns createStore from redux
 * Todo! can modify the {} to preload the state
 */
export function store() {
  return createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
