import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import StrictAccess from "../src/StrictAccess";
import { Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Ir para Home</Link>
            </li>
            <li>
              <Link to="/About">Ir para About</Link>
            </li>
            <li>
              <Link to="/Users">Ir para Users</Link>
            </li>
            <li>
              <Link to="/StrictAccess">Acesso Restrito</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/Users/:id"
            render={(id) => <Users {...id} greetingMessage="Good Morning" />}
          ></Route>
          <Route path="/About" component={About}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route
            path="/StrictAccess"
            render={() => <StrictAccess user={{username:'joao', password: 1234}}></StrictAccess>}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
