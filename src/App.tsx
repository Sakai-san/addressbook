import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComponent from "./ducks/Home/HomeComponent";
import SettingsComponent from "./ducks/Settings/SettingsComponent";

import "./App.css";

const App: FunctionComponent = () => (
  <div className="Wrapper">
    <Router>
      <Switch>
        <Route path="/settings">
          <SettingsComponent />
        </Route>
        <Route path="/">
          <HomeComponent />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
