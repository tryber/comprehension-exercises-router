import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <Route path="/about" component={ About } />
      </BrowserRouter>
    );
  }
}

export default App;
