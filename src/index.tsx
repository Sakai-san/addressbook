import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./Home";
import settingsReducer from "./Settings";
import searchReducer from "./Search";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    home: homeReducer,
    settings: settingsReducer,
    search: searchReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
