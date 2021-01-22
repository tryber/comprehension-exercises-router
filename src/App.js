import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";
import NavListURLs from "./NavListURLs";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
        <NavListURLs />
      </BrowserRouter>
    );
  }
}

export default App;
