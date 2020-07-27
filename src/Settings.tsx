import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNationality } from "./actions/settings";

const Settings: FunctionComponent = () => {
  const dispatch = useDispatch();
  const onClickHandler = (e: any) => dispatch(setNationality(e.target.value));

  return (
    <div>
      <Link to="/">Home</Link>

      <p>Select the nationality you want the search to done in. </p>

      <div>
        <label>
          CH
          <input
            type="radio"
            name="nationality"
            value="ch"
            onChange={onClickHandler}
          />
        </label>
      </div>

      <div>
        <label>
          ES
          <input
            type="radio"
            name="nationality"
            value="es"
            onChange={onClickHandler}
          />
        </label>
      </div>

      <div>
        <label>
          FR
          <input
            type="radio"
            name="nationality"
            value="fr"
            onChange={onClickHandler}
          />
        </label>
      </div>

      <div>
        <label>
          GB
          <input
            type="radio"
            name="nationality"
            value="gb"
            onChange={onClickHandler}
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
