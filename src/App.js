import React, { useEffect, useRef, useState } from "react";
import { InfiniteLoader, List } from "react-virtualized";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchUsers } from "./actions/users";
import "./App.css";
import "react-virtualized/styles.css"; // only needs to be imported once

const App = () => {
  const currentPage = useRef(-1);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    loadMoreRows({});
  }, []);

  const isRowLoaded = ({ index }) => {
    return !!allUsers[index];
  };

  const loadMoreRows = ({ startIndex, stopIndex }) => {
    currentPage.current = currentPage + 1;
    console.log("loadMoreRows", startIndex, stopIndex);
    return fetch(`https://randomuser.me/api/?page=${currentPage}&results=20`)
      .then((r) => r.json())
      .then((r) => setAllUsers(allUsers.concat(r.results)));
  };

  const rowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <span>&nbsp;&nbsp;&nbsp;{key}</span>
        <span>&nbsp;&nbsp;&nbsp;{allUsers[index].name.first}</span>
        <span>&nbsp;&nbsp;&nbsp;{allUsers[index].name.last}</span>
        <span>&nbsp;&nbsp;&nbsp;{allUsers[index].email}</span>
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
          rowCount={allUsers.length}
          rowHeight={30}
          rowRenderer={rowRenderer}
          width={1024}
        />
      )}
    </InfiniteLoader>
  );
};

export default App;

/*compose(
  connect(
    (state) => {
      return { users: state.users };
    },
    (dispatch) => ({
      fetch: (page) => dispatch(fetchUsers(page)),
    })
  )
)(App);
*/
