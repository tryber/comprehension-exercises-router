import React, { Component } from 'react';
import Home from './components/Home';
import { Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>
    );
  }
}

export default App;
