import React, { FunctionComponent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Row from "../Row";
import { InfiniteLoader, List, AutoSizer } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import { homeOperations } from "./index";

import "react-virtualized/styles.css"; // only needs to be imported once

const AMOUNT_OF_ROWS = 50;

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
      homeOperations.fetchUsers(page.current, nationality, AMOUNT_OF_ROWS)
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
                height={50 * 10}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                rowCount={users.length}
                rowHeight={50}
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
