import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => {
            return <Users {...props} greetingMessage={"Good Morning"} />
          }} />
          <Route path="/strict-access" render={(props) => {
            return <StrictAccess user={{ name:'joão', passWord:'12345679' }} />
          }} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;