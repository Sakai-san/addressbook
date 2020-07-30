import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Settings link", () => {
  const { getByText } = render(
    <Provider
      store={createStore(
        () => ({
          home: {
            users: [],
            fetching: false,
          },
          search: {
            terms: null,
          },
          settings: false,
        }),
        applyMiddleware(thunk)
      )}
    >
      <App />
    </Provider>
  );
  const linkElement = getByText(/settings/i);
  expect(linkElement).toBeInTheDocument();
});
