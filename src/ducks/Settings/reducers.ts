import { Reducer } from "redux";
import { actionTypes, TypeSettingsStore } from "./types";
import actions from "./actions";

const reducer: Reducer<
  TypeSettingsStore,
  ReturnType<typeof actions.makeSetNationality>
> = (state = "ch", action) => {
  if (action.type === actionTypes.SET_NATIONALITY) {
    return action.payload;
  } else {
    return state;
  }
};

export default reducer;
