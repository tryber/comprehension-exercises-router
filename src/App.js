import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router';
import Home from './components/Home';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <
        <Home />
        <About />
      </BrowserRouter>
    );
  }
}

export default App;
