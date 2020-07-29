import React, { FunctionComponent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { settingsOperations } from "./index";

const NATIONALIIES = ["ch", "es", "fr", "gb"];

const Settings: FunctionComponent = () => {
  const dispatch = useDispatch();
  const nationalitySet = useSelector((state) => (state as any)?.settings);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(settingsOperations.setNationality(e.target.value));

  return (
    <div>
      <Link to="/">Home</Link>

      <p>Select the nationality you want the search to done in. </p>

      {NATIONALIIES.map((nationality) => (
        <div key={nationality}>
          <label>
            {nationality.toUpperCase()}
            <input
              type="radio"
              name="nationality"
              value={nationality}
              checked={nationality === nationalitySet}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Settings;
