import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" />
        <Route exact path="/" component={Home} />
        <Link to="/about" />
        <Route path="/about" component={About} />
        <Link to="/users" />
        <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage={"Good Morning"} />} />
      </BrowserRouter>
    );
  }
}

export default App;