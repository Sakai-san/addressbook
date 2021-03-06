import React, { FunctionComponent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { InfiniteLoader, List, AutoSizer } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import Row from "../../Row";
import { Search } from "../Search/";
import { homeOperations } from "./index";
import { IUser } from "./types";
import { ISearchTerms } from "../Search/types";
import { IReduxStore } from "../reduxStoreType";

import "./HomeComponent.css";
import "react-virtualized/styles.css"; // only needs to be imported once

const BATCH_ROW = 50;
const AMOUNT_OF_VISIBLE_ROWS = 10;
const AMOUNT_OF_MAX_ROWS = 1000;
const ROW_HEIGHT = 50;

const filterByName = (users: IUser[], searchTems: ISearchTerms | null) => {
  const filtered = users.filter(
    (user) =>
      user?.name?.first?.toUpperCase?.() ===
        searchTems?.first?.toUpperCase?.() &&
      user?.name?.last?.toUpperCase?.() === searchTems?.last?.toUpperCase?.()
  );
  if (filtered.length > 0) {
    // workaround. Add two empty rows for the modal not to be cropped
    return filtered.concat([{}, {}, {}]);
  } else {
    return filtered;
  }
};

const HomeComponent: FunctionComponent = () => {
  const page = useRef<number>(-1);
  const isSearchActive = useSelector(
    (state: IReduxStore) => state.search.terms
  );
  const users = useSelector((state: IReduxStore) =>
    !isSearchActive
      ? state.home.users
      : filterByName(state.home.users, state.search.terms)
  );
  const isFetching = useSelector((state: IReduxStore) => state.home.isFetching);
  const nationality = useSelector((state: IReduxStore) => state.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    loadMoreRows({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isRowLoaded = ({ index }: any) => !!users[index];

  const loadMoreRows = ({ startIndex, stopIndex }: any) => {
    page.current = page.current + 1;
    return Promise.resolve(
      dispatch(homeOperations.fetchUsers(page.current, nationality, BATCH_ROW))
    );
  };

  const rowRenderer = ({ key, index, style }: any) => (
    <Row key={key} user={users[index]} style={style} />
  );

  return (
    <div>
      <div className="Sticky">
        <Search />
      </div>
      <div className="LinkToSettings">
        <Link to="/settings">Settings</Link>
      </div>

      {isSearchActive && (
        <div className="Message">
          Infinite loader is disabled while the search is in use &#129302;.
        </div>
      )}

      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={AMOUNT_OF_MAX_ROWS}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
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

      {!isSearchActive && isFetching && (
        <div className="Message Loading">Loading... &#9203;</div>
      )}
    </div>
  );
};

export default HomeComponent;
