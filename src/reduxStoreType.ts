import { IHomeStore } from "./ducks/Home/types";
import { ISearchStore } from "./ducks/Search/types";
import { TypeSettingsStore } from "./ducks/Settings/types";

export interface IReduxStore {
  home: IHomeStore;
  settings: TypeSettingsStore;
  search: ISearchStore;
}
