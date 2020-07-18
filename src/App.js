import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchUsers } from "./actions/users";
import logo from "./logo.svg";
import "./App.css";

const App = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return users && users.users
    ? users.users.map((user, index) => {
        return (
          <div key={index}>
            <span>{user.name.first}</span>
            <span>{user.name.last}</span>
            <span>{user.email}</span>
          </div>
        );
      })
    : null;
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
      fetchUsers: () => dispatch(fetchUsers()),
    })
  )
)(App);
