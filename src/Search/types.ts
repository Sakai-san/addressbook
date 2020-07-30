export enum actionTypes {
  SEARCH_SEARCH = "@SEARCH/search",
}

export interface ISearchTerms {
  first: string | undefined;
  last: string | undefined;
}

export interface ISearchStore {
  terms: ISearchTerms | null;
}
export interface IAction {
  type: actionTypes;
  payload: ISearchTerms;
}
