import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" > Home </Link>
        <Link to="/About" > About </Link>
        <Link to="/Users" > Users </Link>

        <Route exact path="/" component={Home} />
        
      </BrowserRouter>
    );
  }
}

export default App;