import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavListURLs from "./NavListURLs";
import Content from "./Content";
import Login from "./login";

import "./App.css";
import usersIds from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      logedIn: false,
    };
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
    console.log(this.state.name);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state.password);
  }

  handleLogin() {
    this.state.name === "joao" && this.state.password === "1234"
      ? this.setState({ logedIn: true })
      : this.setState({ logedIn: false });
  }

  render() {
    return (
      <BrowserRouter>
        <NavListURLs />
        {console.log(usersIds)}
        <Content
          greetingMessage="Good Morning"
          usersIds={usersIds}
          logedIn={this.state.logedIn}
          user={this.state.name}
        />
        <Login
          handleName={this.handleName}
          handlePassword={this.handlePassword}
          handleLogin={this.handleLogin}
        />
      </BrowserRouter>
    );
  }
}

export default App;
