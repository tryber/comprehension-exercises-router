import React, { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/strict-access">Strict Access</Link></li>
            </ul>
        </nav>
      <Switch>
        <Route 
        exact path="/users/:id"
        render={ (props) => <Users {...props} greetingsMessage="Good Morning" />}/>
        <Route 
          exact path="/strict-access"
          render={ () => (
            <StrictAccess user={ {username: 'joao', password: '1234'} } />
          ) } 
        />
        <Route exact path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
