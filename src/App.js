import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './components/StrictAcess';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const userObj = {
      username: "joao",
      password: "1234",
    }
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/id">Users</Link>
        <Link to="/strict-acess">Strict Acess</Link>

        <Switch>
          <Route exact path="/users/:id" to render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route exact path="/strict-acess" to render={() => <StrictAcess user={userObj} />} />
          <Route path="/about" to component={About} />
          <Route exact path="/" to component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
