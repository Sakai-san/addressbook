import { actionTypes, ISearchStore } from "./types";
import actions from "./actions";

export default (
  state: ISearchStore = {
    terms: null,
  },
  action: ReturnType<typeof actions.makeSearch>
) => {
  if (action.type === actionTypes.SEARCH_SEARCH) {
    return {
      ...state,
      terms: {
        first: action.payload.first,
        last: action.payload.last,
      },
    };
  } else {
    return state;
  }
};
