import React, { FunctionComponent, useEffect, useRef } from "react";
import { InfiniteLoader, List } from "react-virtualized";
import { compose } from "redux";
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchUsers } from "./actions/users";
import "./App.css";
import "react-virtualized/styles.css"; // only needs to be imported once

const AMOUNT_OF_ROWS = 10;

interface IAppProps {
  users?: any[];
  fetchUsers?: (page: number, amountOfRows: number) => void;
}

// @ts-ignore
const App: FunctionComponent = ({ users, fetchUsers }) => {
  console.log("users", users);
  const page = useRef(-1);

  useEffect(() => {
    loadMoreRows({});
  }, []);

  const isRowLoaded = ({ index }: any) => {
    return !!users[index];
  };

  const loadMoreRows = ({ startIndex, stopIndex }: any) => {
    page.current = page.current + 1;
    return fetchUsers(page.current, AMOUNT_OF_ROWS);
  };

  const rowRenderer = ({ key, index, style }: any) => {
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
      // @ts-ignore
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
  connect<any, any>(
    (state) => {
      // @ts-ignore
      return { users: state?.users?.users || [] };
    },
    (dispatch) => ({
      fetchUsers: (page: number, amountOfRows: number) => {
        // @ts-ignore
        dispatch(fetchUsers(page, amountOfRows));
      },
    })
  )
)(App);
