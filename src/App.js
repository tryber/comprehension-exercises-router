import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">Users</Link>
        <Link to="/users">About</Link>

        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users" component={Users} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
