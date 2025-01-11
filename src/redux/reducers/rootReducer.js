import flightReducer from "./flightReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  flightReducer,
});
export default rootReducer;
