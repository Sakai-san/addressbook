import { actionTypes, ISearchTerms } from "./types";

const makeSearch = (search: ISearchTerms) => ({
  type: actionTypes.SEARCH_SEARCH,
  payload: search,
});

const makeSearching = (isSearching: boolean) => ({
  type: actionTypes.SEARCH_SEARCHING,
  payload: isSearching,
});

export default {
  makeSearch,
  makeSearching,
};
