import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Settings: FunctionComponent = () => (
  <div>
    <Link to="/">Home</Link>

    <p>Select the nationality you want the search to done in. </p>

    <div>
      <label>
        CH
        <input type="radio" name="nationality" value="ch" />
      </label>
    </div>

    <div>
      <label>
        ES
        <input type="radio" name="nationality" value="es" />
      </label>
    </div>

    <div>
      <label>
        FR
        <input type="radio" name="nationality" value="fr" />
      </label>
    </div>

    <div>
      <label>
        GB
        <input type="radio" name="nationality" value="gb" />
      </label>
    </div>
  </div>
);

export default Settings;
