import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/users" render={(props) => <Users {...props} greetingMessage="Good Morning" /> } />
            <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" /> } />
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;