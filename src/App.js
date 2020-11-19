import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning"/>}/>
          <Route path="/about" component={About}/>
          <Route path="/user" render={() => <StrictAccess user={{username: 'joao', password: 123456}}/>}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;