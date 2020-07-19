import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchUsers } from "./actions/users";
import logo from "./logo.svg";
import "./App.css";

const App = ({ fetch, users }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(page);
  }, []);

  return (
    <div>
      {users &&
        users.users &&
        users.users.map((user, index) => {
          return (
            <div key={index}>
              <span>{user.name.first}</span>
              <span>{user.name.last}</span>
              <span>{user.email}</span>
            </div>
          );
        })}
    </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
};

export default compose(
  connect(
    (state) => {
      return { users: state.users };
    },
    (dispatch) => ({
      fetch: (page) => dispatch(fetchUsers(page)),
    })
  )
)(App);
