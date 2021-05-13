import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <About />
        <Users />
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/users" > Users </Link>
      </BrowserRouter>
    );
  }
}

export default App;
