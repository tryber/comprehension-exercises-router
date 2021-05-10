import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/users/:id" render={(props) => <Users {...props} greetingMessage={"Good Morning"} />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/strict-access" render={(props) => <StrictAccess {...props} user={{username: 'kawaki', password: 'ninja'}} />} />
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
      </Router>
    );
  }
}

export default App;
