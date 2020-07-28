import actions from "./actions";

const fetchUsers = (
  page: number,
  nationality: string,
  amountOfRows: number
) => {
  return (dispatch: any) => {
    dispatch(actions.makeUserFectching(true));

    fetch(
      `https://randomuser.me/api/?nat=${nationality}&page=${page}&results=${amountOfRows}`
    )
      .then((r) => r.json())
      .then((data) => {
        dispatch(actions.makeUserFectch(data.results));
      });
  };
};

export default { fetchUsers };