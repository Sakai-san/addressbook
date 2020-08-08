import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./ducks/Home/";
import { Settings } from "./ducks/Settings";

import "./App.css";

const App: FunctionComponent = () => (
  <div className="Wrapper">
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
  </div>
);

export default App;
