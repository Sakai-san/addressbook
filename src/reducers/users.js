import { FETCH_USERS, FETCHING_USERS } from "../actions/users";

export default (
  state = {
    users: [],
  },
  action
) => {
  if (action.type === FETCHING_USERS) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  } else if (action.type === FETCH_USERS) {
    return {
      users: [...state.users, ...action.users],
      isFetching: false,
    };
  } else {
    return state;
  }
};
