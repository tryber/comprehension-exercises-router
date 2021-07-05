import React, { Component } from 'react';
import Home from './components/Home';
import BrowserRouter from 'react-router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
      
    );
  }
}

export default App;
