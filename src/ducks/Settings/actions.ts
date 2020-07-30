import { actionTypes } from "./types";

const makeSetNationality = (nationality: string) => ({
  type: actionTypes.SET_NATIONALITY,
  payload: nationality,
});

export default {
  makeSetNationality,
};
