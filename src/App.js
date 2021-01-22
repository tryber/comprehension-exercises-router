import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavListURLs from "./NavListURLs";
import Content from "./Content";

import "./App.css";
import usersIds from "./data";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavListURLs />
        {console.log(usersIds)}
        <Content greetingMessage="Good Morning" usersIds={usersIds} />
      </BrowserRouter>
    );
  }
}

export default App;
