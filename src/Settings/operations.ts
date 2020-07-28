import actions from "./actions";

const setNationality = (nationality: string) => (dispatch: any) => {
  dispatch(actions.makeSetNationality(nationality));
};

export default { setNationality };
