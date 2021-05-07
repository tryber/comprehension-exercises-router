import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      </BrowserRouter>
    );
  } 
}

export default App;
