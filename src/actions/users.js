export const FETCH_USERS = "users/fetch";
export const FETCHING_USERS = "users/fetching";

export const fetchUsers = (page, amountOfRows) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_USERS,
      isFetching: true,
    });

    fetch(`https://randomuser.me/api/?page=${page}&results=${amountOfRows}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({
          type: FETCH_USERS,
          users: data.results,
        });
      });
  };
};
