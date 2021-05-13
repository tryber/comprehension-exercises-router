import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route
            exact
            path="/users/:id"
            render={(props) => (<Users {...props} greetingMessage="Good Morning" />)}
          />
        </Switch>
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/users" > Users </Link>
      </BrowserRouter>
    );
  }
}

export default App;
