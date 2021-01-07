import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => {
            return <Users {...props} greetingMessage={"Good Morning"} />
          }} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Link to="/" />
        <Link to="/about" />
        <Link to="/users" />
      </BrowserRouter>
    );
  }
}

export default App;