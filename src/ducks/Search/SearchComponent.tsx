import React, { FunctionComponent, useRef, FormEvent } from "react";
import { useDispatch } from "react-redux";
import actions from "./actions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./SearchComponent.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SearchComponent: FunctionComponent = () => {
  const firstNameRef = useRef<HTMLDivElement | null>(null);
  const lastNameRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      actions.makeSearch({
        first: firstNameRef?.current?.querySelector("input")?.value,
        last: lastNameRef?.current?.querySelector("input")?.value,
      })
    );
  };

  const onResetHandler = () => dispatch(actions.makeSearch(null));

  const classes = useStyles();

  return (
    <form
      className="SearchComponent"
      onSubmit={onSubmitHandler}
      noValidate
      autoComplete="off"
    >
      <TextField
        ref={firstNameRef}
        id="first-name"
        label="First name"
        className={classes.margin}
      />
      <TextField
        ref={lastNameRef}
        id="last-name"
        label="Last name"
        className={classes.margin}
      />
      <Button
        size="medium"
        color="primary"
        variant="contained"
        className={classes.margin}
        type="submit"
      >
        Submit
      </Button>
      <Button
        size="medium"
        variant="contained"
        className={classes.margin}
        onClick={onResetHandler}
        type="reset"
      >
        Reset
      </Button>
    </form>
  );
};

export default SearchComponent;
