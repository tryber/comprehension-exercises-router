import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/About';
import Users from './components/Users';
import { Link } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/users'>Users</Link>
        </div>
        <div>
          <Route path='/about' component={About} />
          <Route path='/users' render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route exact path='/' component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
