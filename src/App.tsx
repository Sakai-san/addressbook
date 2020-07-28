import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/HomeComponent";
import Settings from "./Settings/SettingsComponent";

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
