import { Reducer } from "redux";
import { actionTypes, ISearchStore } from "./types";
import actions from "./actions";

const reducer: Reducer<ISearchStore, ReturnType<typeof actions.makeSearch>> = (
  state = {
    terms: null,
  },
  action
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

export default reducer;
