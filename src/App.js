import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <header className='header'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
      </header>
      <Switch>
      <Route path="/about" component={About} />
      <Route 
        path="/users:id" 
        render={(props) => 
        <Users {...props} 
        greetingsMessage="Good Morning" />} 
      />
      <Route 
        path="/strict-access" 
        render={() => 
        <StrictAccess 
        user={ { username: 'joão', password: '1234' } } /> } 
      />
      <Route path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
