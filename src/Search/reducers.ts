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
      terms: action?.payload
        ? {
            first: action.payload.first,
            last: action.payload.last,
          }
        : action.payload,
    };
  } else {
    return state;
  }
};
