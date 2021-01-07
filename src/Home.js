import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> Home </h2>
    <p> My awesome Home component. </p>
    <Link to="/about">About</Link>
    <Link to="/users/:10">Users</Link>
    <Link to="/strict-access">Strict Acsess</Link>
  </div>
);

export default Home;