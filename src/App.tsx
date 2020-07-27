import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";

import "./App.css";

const App: FunctionComponent = () => (
  <div className="wrapper">
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
