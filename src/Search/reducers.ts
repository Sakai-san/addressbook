import { actionTypes, ISearchTerms, ISearchStore } from "./types";
import actions from "./actions";

export default (
  state: ISearchStore = {
    isSearching: false,
    terms: null,
  },
  action: ReturnType<typeof actions.makeSearching | typeof actions.makeSearch>
) => {
  if (action.type === actionTypes.SEARCH_SEARCHING) {
    return {
      ...state,
      isSearching: action.payload,
    };
  } else if (action.type === actionTypes.SEARCH_SEARCH) {
    return {
      ...state,
      terms: {
        first: (action.payload as ISearchTerms).first,
        last: (action.payload as ISearchTerms).last,
      },
    };
  } else {
    return state;
  }
};
