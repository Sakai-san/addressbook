import { Dispatch } from "redux";
import actions from "./actions";

const setNationality = (nationality: string) => (dispatch: Dispatch) =>
  dispatch(actions.makeSetNationality(nationality));

export default { setNationality };
