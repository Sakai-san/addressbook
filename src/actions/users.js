export const FETCH_USERS = "users/fetch";
export const FETCHING_USERS = "users/fetching";

export const fetchUsers = (page) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_USERS,
      isFetching: true,
    });

    fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({
          type: FETCH_USERS,
          users: data.results,
        });
      });
  };
};
