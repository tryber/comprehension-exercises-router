import React from "react";

import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { Route, Switch } from "react-router-dom";

const Content = () => (
  <main>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </Switch>
  </main>
);

export default Content;
