import { IHomeStore } from "./Home/types";
import { ISearchStore } from "./Search/types";
import { TypeSettingsStore } from "./Settings/types";

export interface IReduxStore {
  home: IHomeStore;
  settings: TypeSettingsStore;
  search: ISearchStore;
}
