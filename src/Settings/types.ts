export enum actionTypes {
  SET_NATIONALITY = "@USERS/setNationality",
}

export interface IAction {
  type: actionTypes;
  payload: string;
}
