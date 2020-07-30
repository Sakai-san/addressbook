import React, { FunctionComponent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { InfiniteLoader, List, AutoSizer } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import Row from "../Row";
import SearchComponent from "../Search/SearchComponent";
import { homeOperations } from "./index";
import { IUser } from "./types";
import { ISearchTerms } from "../Search/types";
import { IReduxStore } from "../reduxStoreType";

import "./HomeComponent.css";
import "react-virtualized/styles.css"; // only needs to be imported once

const BATCH_ROW = 50;
const AMOUNT_OF_VISIBLE_ROWS = 10;
const ROW_HEIGHT = 50;

const filterUsers = (users: IUser[], searchTems: ISearchTerms | null) =>
  users.filter(
    (user) =>
      user?.name?.first?.toUpperCase?.() ===
        searchTems?.first?.toUpperCase?.() &&
      user?.name?.last?.toUpperCase?.() === searchTems?.last?.toUpperCase?.()
  );

const HomeComponent: FunctionComponent = () => {
  const page = useRef<number>(-1);
  const isSearchActive = useSelector(
    (state: IReduxStore) => state.search.terms
  );
  const users = useSelector((state: IReduxStore) => {
    if (!isSearchActive) {
      return state.home.users;
    } else {
      return filterUsers(state.home.users, state.search.terms);
    }
  });
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
        <SearchComponent />
      </div>
      <div className="LinkToSettings">
        <Link to="/settings">Settings</Link>
      </div>

      {isSearchActive && (
        <div className="LoadingSuspended">
          No further data are loaded while the search is in use
        </div>
      )}
      {!isSearchActive && isFetching && (
        <div className="Loading">Loading...</div>
      )}

      <InfiniteLoader
        isRowLoaded={isRowLoaded}
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
