import { Reducer } from "redux";
import { IHomeStore, isFetchingAction, isFetchAction } from "./types";
import actions from "./actions";

const reducer: Reducer<
  IHomeStore,
  ReturnType<typeof actions.makeUserFetch | typeof actions.makeUserFetching>
> = (
  state = {
    users: [],
    isFetching: false,
  },
  action
) => {
  if (isFetchingAction(action)) {
    return {
      ...state,
      isFetching: action.payload,
    };
  } else if (isFetchAction(action)) {
    return {
      users: [...state.users, ...action.payload],
      isFetching: false,
    };
  } else {
    return state;
  }
};

export default reducer;
