import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNationality } from "./actions/settings";

const Settings: FunctionComponent = () => {
  const dispatch = useDispatch();
  const nationalitySet = useSelector((state) => (state as any)?.settings);
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
            checked={"ch" === nationalitySet}
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
            checked={"es" === nationalitySet}
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
            checked={"fr" === nationalitySet}
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
            checked={"gb" === nationalitySet}
            onChange={onClickHandler}
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
