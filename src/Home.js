import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Link to="/about">About </Link>
        <Link to="/users">Users </Link>
        <h2> Home </h2>
        <p> My awesome Home component </p>
      </div>
    )
  }
}

export default Home;