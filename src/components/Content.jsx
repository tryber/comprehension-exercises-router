import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';
import StrictAcess from '../pages/StrictAcess'

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/users/:id"
            render={(props) => (
              <Users {...props} greetingMessage="Dale Painho" />
            )}
          />
          <Route
            exact path="/strict-acess"
            render={(props) => <StrictAcess {...props} user={{ username: 'joao', password: '1234' }} />}
          />
        </Switch>
      </main>
    );
  }
}

export default Content;
