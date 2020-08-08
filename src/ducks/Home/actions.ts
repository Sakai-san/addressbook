import { actionTypes, IUser } from "./types";

const makeUserFectch = (users: IUser) => ({
  type: actionTypes.FETCH_USERS,
  payload: users,
});

const makeUserFectching = (isLoading: boolean) => ({
  type: actionTypes.FETCHING_USERS,
  payload: isLoading,
});

export default {
  makeUserFectching,
  makeUserFectch,
};
