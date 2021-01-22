import { actionTypes, IUser } from "./types";

const makeUserFetch = (users: IUser) => ({
  type: actionTypes.FETCH_USERS,
  payload: users,
});

const makeUserFetching = (isLoading: boolean) => ({
  type: actionTypes.FETCHING_USERS,
  payload: isLoading,
});

export default {
  makeUserFetching,
  makeUserFetch,
};
