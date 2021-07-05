import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/users' component={ Users } />
        <Route exact path='/users/:nome/' render={ (props) => <Users {...props} greetingsMessage={ 'Good Morning' } /> } />
      </switch>
      </BrowserRouter>
    );
  }
}

export default App;
