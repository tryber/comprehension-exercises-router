import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './components/StrictAcess';

class App extends Component {

  render() {
    const user = {
      username: 'joao',
      password: '1234',
    }
    
    return (
      <BrowserRouter >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Link to="/strictAcess">FBI</Link>
        <Switch>
          <Route path="/strictAcess" render={ () => (<StrictAcess user={ user }/>)}></Route>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users/:id" render={ (props) => <Users { ...props } greetingsMessage="Good Morning"/> }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
