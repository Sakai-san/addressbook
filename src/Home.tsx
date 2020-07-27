import React, { FunctionComponent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { InfiniteLoader, List } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./actions/users";

import "react-virtualized/styles.css"; // only needs to be imported once

const AMOUNT_OF_ROWS = 10;

const Home: FunctionComponent = () => {
  const page = useRef<number>(-1);
  const users = useSelector((state) => (state as any)?.users?.users);
  const nationality = useSelector((state) => (state as any)?.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    loadMoreRows({});
  }, []);

  const isRowLoaded = ({ index }: any) => {
    return !!users[index];
  };

  const loadMoreRows = ({ startIndex, stopIndex }: any) => {
    page.current = page.current + 1;
    return dispatch(fetchUsers(page.current, nationality, AMOUNT_OF_ROWS));
  };

  const rowRenderer = ({ key, index, style }: any) => {
    return (
      <div
        key={key}
        style={{ ...style, ...{ display: "flex", alignItems: "center" } }}
      >
        <img src={users[index].picture.thumbnail} />
        <span>&nbsp;&nbsp;&nbsp;{key}</span>
        <span>&nbsp;&nbsp;&nbsp;{users[index].name.first}</span>
        <span>&nbsp;&nbsp;&nbsp;{users[index].name.last}</span>
        <span>&nbsp;&nbsp;&nbsp;{users[index].email}</span>
        <span>&nbsp;&nbsp;&nbsp;{users[index].nat}</span>
      </div>
    );
  };

  return (
    <div>
      <div className="link-to-settings">
        <Link to="/settings">Settings</Link>
      </div>

      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        // @ts-ignore
        loadMoreRows={loadMoreRows}
        rowCount={1000}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={50 * 10}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={users.length}
            rowHeight={50}
            rowRenderer={rowRenderer}
            width={1024}
          />
        )}
      </InfiniteLoader>
    </div>
  );
};

export default Home;
