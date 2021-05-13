import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
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
