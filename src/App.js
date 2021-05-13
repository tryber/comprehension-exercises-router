import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      </BrowserRouter>
    );
  }
}

export default App;
