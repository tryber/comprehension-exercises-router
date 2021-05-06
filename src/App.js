import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";

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
          </ul>
        </nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Users" component={Users}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
