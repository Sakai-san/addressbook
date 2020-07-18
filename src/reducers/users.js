import { FETCH_USERS, FETCHING_USERS } from "../actions/users";

export default (state = {}, action) => {
  if (action.type === FETCHING_USERS) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  } else if (action.type === FETCH_USERS) {
    return {
      users: action.users,
      isFetching: false,
    };
  } else {
    return state;
  }
};
