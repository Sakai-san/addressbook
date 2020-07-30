import React, { FunctionComponent, useRef, FormEvent } from "react";
import { useDispatch } from "react-redux";
import actions from "./actions";

import "./SearchComponent.css";

const SearchComponent: FunctionComponent = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      actions.makeSearch({
        first: firstNameRef?.current?.value,
        last: lastNameRef?.current?.value,
      })
    );
  };

  return (
    <form className="SearchComponent" onSubmit={onSubmitHandler}>
      <div>
        <input ref={firstNameRef} placeholder="first name" />
      </div>
      <div>
        <input ref={lastNameRef} placeholder="last name" />
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchComponent;
