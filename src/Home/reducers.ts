import { Reducer } from "redux";
import { actionTypes, IHomeStore } from "./types";
import actions from "./actions";

const reducer: Reducer<
  IHomeStore,
  ReturnType<typeof actions.makeUserFectch | typeof actions.makeUserFectching>
> = (
  state = {
    users: [],
    isFetching: false,
  },
  action
) => {
  if (action.type === actionTypes.FETCHING_USERS) {
    return {
      ...state,
      isFetching: action.payload,
    };
  } else if (action.type === actionTypes.FETCH_USERS) {
    return {
      users: [...state.users, ...action.payload],
      isFetching: false,
    };
  } else {
    return state;
  }
};

export default reducer;
