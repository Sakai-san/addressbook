import React, { FunctionComponent, useRef, FormEvent, MouseEvent } from "react";
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

  const onResetHandler = (e: MouseEvent) => {
    dispatch(
      actions.makeSearch({
        first: "",
        last: "",
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
      <button type="submit">Search</button>
      <button onClick={onResetHandler} type="reset">
        Reset
      </button>
    </form>
  );
};

export default SearchComponent;
