import { combineReducers } from "redux";
import users from "./users";
import settings from "./settings";

const allReducers = combineReducers({
  users,
  settings,
});

export default allReducers;
