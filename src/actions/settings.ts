export enum actionTypes {
  SET_NATIONALITY = "@USERS/setNationality",
}

export interface IAction {
  type: actionTypes;
  payload: string;
}

export const setNationality = (nationality: string) => (dispatch: any) => {
  dispatch({
    type: actionTypes.SET_NATIONALITY,
    payload: nationality,
  });
};
