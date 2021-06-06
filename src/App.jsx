import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

import { BrowserRouter, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users"><Users greetingsMessage="Good morning" /></Route>
      </BrowserRouter>
    );
  }
}

export default App;
