import { actionTypes, IAction } from "../actions/settings";

export default (state = "ch", action: IAction) => {
  if (action.type === actionTypes.SET_NATIONALITY) {
    return action.payload;
  } else {
    return state;
  }
};
