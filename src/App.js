import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
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
