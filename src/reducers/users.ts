import { actionTypes, IAction } from "../actions/users";

export default (
  state = {
    users: [],
    isFetching: false,
  },
  action: IAction
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
