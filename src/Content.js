import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Users from "./Users";
import StrictAccess from "./StrictAccess";

const Content = ({ greetingMessage, usersIds, logedIn }) => (
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
      <Route exact path="/" component={Home}>
        {console.log(logedIn)}
        {logedIn ? (
          <Redirect to="/strict-access" />
        ) : (
          <Route exact path="/" component={Home} />
        )}
      </Route>
      <Route path="/strict-access" component={StrictAccess} />
    </Switch>
  </main>
);

export default Content;
