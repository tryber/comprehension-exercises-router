import React from "react";
import { Link } from "react-router-dom";

const NavListURLs = () => (
  <li>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/users">Users</Link>
  </li>
);

export default NavListURLs;
