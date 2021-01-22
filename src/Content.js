import React from "react";

import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { Route, Switch } from "react-router-dom";

const Content = ({ greetingMessage, usersIds }) => (
  <main>
    <Switch>
      <Route path="/about" component={About} />
      <Route
        path="/users"
        render={(props) => (
          <Users
            {...props}
            greetingMessage={greetingMessage}
            usersIds={usersIds}
          />
        )}
      />
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Content;
