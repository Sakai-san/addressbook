import { IHomeStore } from "./Home/types";
import { ISearchStore } from "./Search/types";

export interface IReduxStore {
  home: IHomeStore;
  settings: string;
  search: ISearchStore;
}
