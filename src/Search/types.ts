export enum actionTypes {
  SEARCH_SEARCHING = "@SEARCH/searching",
  SEARCH_SEARCH = "@SEARCH/search",
}

export interface ISearchTerms {
  first: string | undefined;
  last: string | undefined;
}

export interface ISearchStore {
  terms: ISearchTerms | null;
  isSearching: boolean;
}
export interface IAction {
  type: actionTypes;
  payload: boolean | ISearchTerms;
}
