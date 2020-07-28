import { actionTypes } from "./types";
import actions from "./actions";

export default (
  state = {
    users: [],
    isFetching: false,
  },
  action: ReturnType<
    typeof actions.makeUserFectch | typeof actions.makeUserFectching
  >
) => {
  if (action.type === actionTypes.FETCHING_USERS) {
    return {
      ...state,
      isFetching: action.payload,
    };
  } else if (action.type === actionTypes.FETCH_USERS) {
    return {
      users: [...state.users, ...(action.payload as any[])],
      isFetching: false,
    };
  } else {
    return state;
  }
};
