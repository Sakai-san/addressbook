import { Dispatch } from "redux";
import actions from "./actions";
import { IUser } from "./types";

const fetchUsers0 = (
  page: number,
  nationality: string,
  amountOfRows: number
) => (dispatch: Dispatch) => {
  dispatch(actions.makeUserFetching(true));

  fetch(
    `https://randomuser.me/api/?nat=${nationality}&page=${page}&results=${amountOfRows}`
  )
    .then((r) => r.json())
    .then((response) =>
      dispatch(actions.makeUserFetch(response?.results || []))
    );
};

const getUsers = async (
  page: number,
  nationality: string,
  amountOfRows: number
): Promise<{ results: IUser[] }> => {
  const response = await fetch(
    `https://randomuser.me/api/?nat=${nationality}&page=${page}&results=${amountOfRows}`
  );
  const parsedReponse = await response.json();
  return parsedReponse;
};

const fetchUsers = (
  page: number,
  nationality: string,
  amountOfRows: number
) => async (dispatch: Dispatch) => {
  dispatch(actions.makeUserFetching(true));
  const usersResponse = await getUsers(page, nationality, amountOfRows);
  console.log("usersResponse", usersResponse);
  dispatch(actions.makeUserFetch(usersResponse?.results || []));
};

export default { fetchUsers };
