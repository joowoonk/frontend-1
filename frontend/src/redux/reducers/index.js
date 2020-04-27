import { combineReducers } from "redux";
import songs from "./songs";
import inputs from "./inputs";

export default combineReducers({
  songs,
  inputs,
});
