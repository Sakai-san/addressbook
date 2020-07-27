import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

const Settings = () => {
  return (
    <div>
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
};

const App: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
