import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    const randomId = Math.round(Math.random()*2000);
    
    const links = [
      {link: '/', component: 'Home'},
      {link: '/about', component: 'About'},
      {link: `/users/${randomId}`, component: 'Users'},
      {link: '/strictaccess', component: 'StrictAccess'}
    ];

    const userObj = {
      username: 'julio',
      password: 1234,
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={ (props) => (
            <Users
              { ...props}
              greetingsMessage="Good Morning"
            />
          )}/>
          
          <Route path="/strictaccess" render={ (props) => (
            <StrictAccess user={ userObj } />
          )}/>

          <Route path="/about" component={ About } />
          <Route path="/" component={ Home } />
        </Switch>

        { links.map(({ link, component }) => (
          <Link to={ link } key={ component }>{ component }</Link>
        ))}
      </BrowserRouter>
    );
  }
}

export default App;
