import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;