import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src="" alt="" />
        <h2>ROUTER</h2>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/users"> Users </Link>
          <Link to="/strict-access"> Strict Access </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
