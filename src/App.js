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
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about"><About /></Route>
          <Route path="/users" render={(props) => <Users {...props} greetingMessage={'Good Morning'}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
