import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    const links = [
      {link: '/', component: 'Home'},
      {link: '/about', component: 'About'},
      {link: '/users', component: 'Users'}
    ];

    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/users" render={ () => <Users greetingsMessage="Good Morning" /> } />

        { links.map(({ link, component }) => (
          <Link to={ link } key={ component }>{ component }</Link>
        ))}
      </BrowserRouter>
    );
  }
}

export default App;
