export enum actionTypes {
  FETCH_USERS = "@USERS/fetch",
  FETCHING_USERS = "@USERS/fetching",
}

export interface IAction {
  type: actionTypes;
  payload: any[] | boolean;
}
