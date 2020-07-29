import React, { FunctionComponent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { InfiniteLoader, List, AutoSizer } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import Row from "../Row";
import SearchComponent from "../Search/SearchComponent";
import { homeOperations } from "./index";

import "./HomeComponent.css";
import "react-virtualized/styles.css"; // only needs to be imported once

const BATCH_ROW = 50;
const AMOUNT_OF_VISIBLE_ROWS = 10;
const ROW_HEIGHT = 50;

const HomeComponent: FunctionComponent = () => {
  const page = useRef<number>(-1);
  const users = useSelector((state) => (state as any)?.home.users);
  const isFetching = useSelector((state) => (state as any)?.home.isFetching);
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
    return dispatch(
      homeOperations.fetchUsers(page.current, nationality, BATCH_ROW)
    );
  };

  const rowRenderer = ({ key, index, style }: any) => (
    <Row key={key} user={users[index]} style={style} />
  );

  return (
    <div>
      <SearchComponent />
      <div className="LinkToSettings">
        <Link to="/settings">Settings</Link>
      </div>
      {isFetching && <div className="Loading">Loading...</div>}

      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        // @ts-ignore
        loadMoreRows={loadMoreRows}
        rowCount={1000}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <List
                width={width}
                height={ROW_HEIGHT * AMOUNT_OF_VISIBLE_ROWS}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                rowCount={users.length}
                rowHeight={ROW_HEIGHT}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default HomeComponent;
