export enum actionTypes {
  FETCH_USERS = "@USERS/fetch",
  FETCHING_USERS = "@USERS/fetching",
}

export interface IUser {
  gender?: string;
  name?: {
    title?: string;
    first?: string;
    last?: string;
  };
  location?: {
    street?: {
      number?: number;
      name?: string;
    };
    city?: string;
    state?: string;
    country?: string;
    postcode?: number;
    coordinates?: {
      latitude?: string;
      longitude?: string;
    };
    timezone?: {
      offset?: string;
      description?: string;
    };
  };
  email?: string;
  login?: {
    uuid?: string;
    username?: string;
    password?: string;
    salt?: string;
    md5?: string;
    sha1?: string;
    sha256?: string;
  };
  dob?: {
    date?: string;
    age?: number;
  };
  registered?: {
    date?: string;
    age?: number;
  };
  phone?: string;
  cell?: string;
  id?: {
    name?: string;
    value?: string;
  };
  picture?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
}

export interface IHomeStore {
  users: IUser[];
  isFetching: boolean;
}

export interface IActionFetching {
  type: actionTypes;
  payload: boolean;
}

export interface IActionFetch {
  type: actionTypes;
  payload: IUser[];
}