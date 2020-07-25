export const FETCH_USERS = "users/fetch";
export const FETCHING_USERS = "users/fetching";

export interface IUserAction {
  type: typeof FETCH_USERS | typeof FETCHING_USERS;
  playload: any[] | boolean;
}

export const fetchUsers = (page: number, amountOfRows: number) => {
  return (dispatch: any) => {
    dispatch({
      type: FETCHING_USERS,
      payload: true,
    });

    fetch(`https://randomuser.me/api/?page=${page}&results=${amountOfRows}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({
          type: FETCH_USERS,
          payload: data.results,
        });
      });
  };
};
