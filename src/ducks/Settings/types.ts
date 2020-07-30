export enum actionTypes {
  SET_NATIONALITY = "@USERS/setNationality",
}

export type TypeSettingsStore = string;

export interface IAction {
  type: actionTypes;
  payload: string;
}
