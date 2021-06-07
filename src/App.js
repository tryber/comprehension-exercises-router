import React, { Component } from 'react';
import Home from './components/Home';
import { Link,Route, BrowserRouter } from 'react-router-dom';
import Users from './components/Users';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Route exact path="/" component={Home}/>
       <Route path="/About" component={About}/>
       <Route path="/Users" component={Users}/>
      </BrowserRouter>
    );
  }
}

export default App;
