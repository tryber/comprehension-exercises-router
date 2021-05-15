import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users';
import StrictAccess from './StrictAcccess';

class App extends Component {
  render() {
    const user = {
      username: 'joao',
      password: 1234,
    }
    return (
      <BrowserRouter>
        <ul>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Users</Link>
        </ul>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route
            path="/strict-access"
            render={(props) =>  <StrictAccess {...props} user={user}/>}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Link to="/strict-access">StrictAccess</Link>
      </BrowserRouter>
    );
  } 
}

export default App;
