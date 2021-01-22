import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavListURLs from "./NavListURLs";
import Content from "./Content";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavListURLs />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
