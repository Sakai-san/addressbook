import { actionTypes } from "./types";

const makeUserFectch = (data: any) => ({
  type: actionTypes.FETCH_USERS,
  payload: data,
});

const makeUserFectching = (isLoading: boolean) => ({
  type: actionTypes.FETCHING_USERS,
  payload: isLoading,
});

export default {
  makeUserFectching,
  makeUserFectch,
};
