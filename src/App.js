import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => {
            return <Users {...props} greetingMessage={"Good Morning"} />
          }} />
          <Route path="/strictAccess" render={(props) => {
            return <StrictAccess user={{ name:'joao', passWord:'12345679' }} />
          }} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;