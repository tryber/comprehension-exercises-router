import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
        <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning! "/>} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
