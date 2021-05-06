import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        
        <ul>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/users"> Users </Link>
        </ul>
      </BrowserRouter>
    );
  }
}

export default App;
