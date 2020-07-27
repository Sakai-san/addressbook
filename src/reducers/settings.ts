import { actionTypes, IAction } from "../actions/settings";

export default (state = "en", action: IAction) => {
  if (action.type === actionTypes.SET_NATIONALITY) {
    return action.payload;
  } else {
    return state;
  }
};
