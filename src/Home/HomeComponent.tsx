import React, { FunctionComponent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Row from "../Row";
import { InfiniteLoader, List, AutoSizer } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import { homeOperations } from "./index";

import "react-virtualized/styles.css"; // only needs to be imported once

const BATCH_ROW = 50;
const AMOUNT_OF_VISIBLE_ROWS = 10;
const ROW_HEIGHT = 50;

const Home: FunctionComponent = () => {
  const page = useRef<number>(-1);
  const users = useSelector((state) => (state as any)?.home.users);
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
    <Row
      key={key}
      user={users[index]}
      reactVirtualizedKey={key}
      style={style}
    />
  );

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

export default Home;
