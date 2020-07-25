export enum actionTypes {
  FETCH_USERS = "@USERS/fetch",
  FETCHING_USERS = "@USERS/fetching",
}

export interface IAction {
  type: actionTypes;
  payload: any[] | boolean;
}

export const fetchUsers = (page: number, amountOfRows: number) => {
  return (dispatch: any) => {
    dispatch({
      type: actionTypes.FETCHING_USERS,
      payload: true,
    });

    fetch(`https://randomuser.me/api/?page=${page}&results=${amountOfRows}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({
          type: actionTypes.FETCH_USERS,
          payload: data.results,
        });
      });
  };
};
