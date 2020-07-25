import { FETCH_USERS, FETCHING_USERS, IUserAction } from "../actions/users";

export default (
  state = {
    users: [],
    isFetching: false,
  },
  action: IUserAction
) => {
  if (action.type === FETCHING_USERS) {
    return {
      ...state,
      // @ts-ignore
      isFetching: action.payload,
    };
  } else if (action.type === FETCH_USERS) {
    return {
      // @ts-ignore
      users: [...state.users, ...action.payload],
      isFetching: false,
    };
  } else {
    return state;
  }
};
