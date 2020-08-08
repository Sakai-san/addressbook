import { Dispatch } from "redux";
import actions from "./actions";

const fetchUsers = (
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

export default { fetchUsers };
