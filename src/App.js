import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" > Home </Link>
        <Link to="/About" > About </Link>
        <Link to="/Users/10" > Users </Link>
        <Link to="/StrictAccess" > Strict Access </Link>
        <Switch>
          <Route path="/Users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning"  />} />
          <Route path="/StrictAccess" render={
              (props) => 
              <StrictAccess {...props} user={{ username:'rafa', password:'1234'}} /> 
            } 
          />
          <Route path="/About" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;