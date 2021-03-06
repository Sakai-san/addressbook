import { actionTypes, ISearchTerms } from "./types";

const makeSearch = (search: ISearchTerms | null) => ({
  type: actionTypes.SEARCH_SEARCH,
  payload: search,
});

export default {
  makeSearch,
};
