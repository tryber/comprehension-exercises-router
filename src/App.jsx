import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good morning" />}></Route>
          <Route path="/strict-access"><StrictAccess user={{username: 'joao', password: '134'}} /></Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
