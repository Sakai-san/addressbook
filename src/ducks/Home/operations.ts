import { Dispatch } from "redux";
import actions from "./actions";

const fetchUsers0 = (
  page: number,
  nationality: string,
  amountOfRows: number
) => (dispatch: Dispatch) => {
  dispatch(actions.makeUserFectching(true));

  fetch(
    `https://randomuser.me/api/?nat=${nationality}&page=${page}&results=${amountOfRows}`
  )
    .then((r) => r.json())
    .then((response) =>
      dispatch(actions.makeUserFectch(response?.results || []))
    );
};

const getUsers = async (
  page: number,
  nationality: string,
  amountOfRows: number
): Promise<any> => {
  const response = await fetch(
    `https://randomuser.me/api/?nat=${nationality}&page=${page}&results=${amountOfRows}`
  );
  const parsedReponse = response.json();
  return parsedReponse;
};

const fetchUsers = (
  page: number,
  nationality: string,
  amountOfRows: number
) => async (dispatch: Dispatch) => {
  dispatch(actions.makeUserFectching(true));
  const usersResponse = await getUsers(page, nationality, amountOfRows);

  dispatch(actions.makeUserFectch(usersResponse?.results || []));
};

export default { fetchUsers };
