import { IHomeStore } from "./Home/types";
import { ISettingsStore } from "./Settings/types";
import { ISearchStore } from "./Search/types";

export interface IReduxStore extends IHomeStore, ISettingsStore, ISearchStore {}
