import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
