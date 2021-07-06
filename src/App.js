import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import StrictAccess from './components/StrictAccess'

class App extends Component {
  render() {
    const links = [
      {link: '/', component: 'Home'},
      {link: '/About', component: 'About'},
      {link: '/Users', component: 'Users'},
    ]

    const userAcessObj = {
      username: 'joao',
      password: 1234,
    }

    return (
      <BrowserRouter>
      <Switch>
        <Route
          path="/Users/:id"
          render={(props) => <Users {...props}
          greetingsMessage="Good Morning" />}
        />
        <Route path="/strictaccess" render={ (props) => (
            <StrictAccess user={ userAcessObj } />
          )}/>
        <Route
          path="/About"
          component={ About }
        />
        <Route
          exact
          path="/"
          component={ Home }
        />
      </Switch>
        { links.map(({ link, component })=> (
          <Link
            className="links"
            to={ link }
            key={ component }>{ component }
          </Link>
        ))}
      </BrowserRouter>
    );
  }
}

export default App;
