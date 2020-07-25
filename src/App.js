import React, { useEffect, useRef } from "react";
import { InfiniteLoader, List } from "react-virtualized";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchUsers } from "./actions/users";
import "./App.css";
import "react-virtualized/styles.css"; // only needs to be imported once

const AMOUNT_OF_ROWS = 10;

const App = ({ users, fetchUsers }) => {
  console.log("users", users);
  const page = useRef(-1);

  useEffect(() => {
    loadMoreRows({});
  }, []);

  const isRowLoaded = ({ index }) => {
    return !!users[index];
  };

  const loadMoreRows = ({ startIndex, stopIndex }) => {
    page.current = page.current + 1;
    return fetchUsers(page.current, AMOUNT_OF_ROWS);
  };

  const rowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <span>&nbsp;&nbsp;&nbsp;{key}</span>
        <span>&nbsp;&nbsp;&nbsp;{users[index].name.first}</span>
        <span>&nbsp;&nbsp;&nbsp;{users[index].name.last}</span>
        <span>&nbsp;&nbsp;&nbsp;{users[index].email}</span>
      </div>
    );
  };

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={500}
    >
      {({ onRowsRendered, registerChild }) => (
        <List
          height={180}
          onRowsRendered={onRowsRendered}
          ref={registerChild}
          rowCount={users.length}
          rowHeight={30}
          rowRenderer={rowRenderer}
          width={1024}
        />
      )}
    </InfiniteLoader>
  );
};

export default compose(
  connect(
    (state) => {
      return { users: state.users.users };
    },
    (dispatch) => ({
      fetchUsers: (page, amountOfRows) =>
        dispatch(fetchUsers(page, amountOfRows)),
    })
  )
)(App);
