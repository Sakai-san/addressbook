// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as ducks from "./ducks/index";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const log1 = (store) => (next) => (action) => {
  console.log(action);

  next({ ...action, log: 1 });
};

const log2 = (store) => (next) => (action) => {
  console.log(action);
  next({ ...action, log: 2 });
};

const log3 = (store) => (next) => (action) => {
  console.log(action);
  next({ ...action, log: 3 });
};

const store = createStore(
  combineReducers(ducks),
  composeEnhancers(applyMiddleware(thunk, log1, log2, log3))
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
