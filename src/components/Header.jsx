import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  
  render() {
    const { id } = this.props
    return(
    <div>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to={`/users/${id}`}> Users </Link>
    </div>
    )
  }
}

export default Header;
