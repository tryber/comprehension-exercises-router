import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" > Home </Link>
        <Link to="/About" > About </Link>
        <Link to="/Users" > Users </Link>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning"  />} />
      </BrowserRouter>
    );
  }
}

export default App;