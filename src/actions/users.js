export const FETCH_USERS = "users/fetch";
export const FETCHING_USERS = "users/fetching";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_USERS,
      isFetching: true,
    });

    fetch("https://randomuser.me/api/")
      .then((r) => r.json())
      .then((data) => {
        dispatch({
          type: FETCH_USERS,
          users: data.results,
        });
      });
  };
};
