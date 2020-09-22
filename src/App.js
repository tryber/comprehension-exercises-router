import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/users" ><Users /></Route>
      </BrowserRouter>
    );
  }
}

export default App;
