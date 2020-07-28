import { actionTypes } from "./types";
import actions from "./actions";

export default (
  state = {
    users: [],
    isFetching: false,
  },
  action: ReturnType<typeof actions.makeSetNationality>
) => {
  if (action.type === actionTypes.SET_NATIONALITY) {
    return action.payload;
  } else {
    return state;
  }
};
