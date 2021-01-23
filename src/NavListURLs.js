import React from "react";
import { Link } from "react-router-dom";

import Login from "./Login";

const NavListURLs = (props) => (
  <li>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/users">Users</Link>
    <Login
      handleName={props.handleName}
      handlePassword={props.handlePassword}
      handleLogin={props.handleLogin}
    />
  </li>
);

export default NavListURLs;
