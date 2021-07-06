import React, { Component } from 'react';
import './App.css'
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    const links = [
      {link: '/', component: 'Home'},
      {link: '/About', component: 'About'},
      {link: '/Users', component: 'Users'},
    ]

    return (
      <BrowserRouter>
      <Switch>
        <Route path="/Users/:id" render={(props) => <Users {...props} 
          greetingsMessage="Good Morning" />} />
        <Route path="/About" component={ About } />
        <Route exact path="/" component={ Home } />
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
