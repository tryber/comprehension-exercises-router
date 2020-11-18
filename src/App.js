import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/users">Users</Link>
        <br/>
        <Link to="/strict-access">StrictAccess</Link>
        <br/>
        <br/>
        <h2>Página atual</h2>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} 
            greetingMessage="Good Morning"/>} ></Route>
          <Route path="/strict-access/:user/:pass" render={(props) => <StrictAccess {...props}
            user={{username: "joao", password: "1234" }} />}></Route>
          <Route path="/about" component={About} ></Route>
          <Route exact path="/" component={Home} ></Route>   
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;