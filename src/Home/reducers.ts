import { actionTypes, IHomeStore, IActionFetch } from "./types";
import actions from "./actions";

export default (
  state: IHomeStore = {
    users: [],
    isFetching: false,
  },
  action: ReturnType<
    typeof actions.makeUserFectch | typeof actions.makeUserFectching
  >
) => {
  if ((action as IActionFetch).type === actionTypes.FETCHING_USERS) {
    return {
      ...state,
      isFetching: action.payload,
    };
  } else if ((action as IActionFetch).type === actionTypes.FETCH_USERS) {
    return {
      users: [...state.users, ...action.payload],
      isFetching: false,
    };
  } else {
    return state;
  }
};
