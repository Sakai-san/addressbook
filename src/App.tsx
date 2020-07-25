import React, { FunctionComponent, useEffect, useRef } from "react";
import { InfiniteLoader, List } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./actions/users";
import "./App.css";
import "react-virtualized/styles.css"; // only needs to be imported once

const AMOUNT_OF_ROWS = 10;

const App: FunctionComponent = () => {
  const page = useRef(-1);
  const users = useSelector((state) => (state as any)?.users?.users);

  const dispatch = useDispatch();

  useEffect(() => {
    loadMoreRows({});
  }, []);

  const isRowLoaded = ({ index }: any) => {
    return !!users[index];
  };

  const loadMoreRows = ({ startIndex, stopIndex }: any) => {
    page.current = page.current + 1;
    return dispatch(fetchUsers(page.current, AMOUNT_OF_ROWS));
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

export default App;
