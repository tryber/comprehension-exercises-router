import React, { Component } from 'react';
import './App.css'
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    const links = [
      {link: '/', component: 'Home'},
      {link: '/About', component: 'About'},
      {link: '/Users', component: 'Users'},
    ]

    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/About" component={ About } />
        <Route path="/Users" render={(props) => <Users {...props} 
          greetingsMessage="Good Morning" />} />
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
