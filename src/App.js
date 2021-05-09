import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
      <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  } 
}

export default App;
