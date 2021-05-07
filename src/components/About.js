import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>About</h2>
        <p> My awesome About component </p>
      </div>
    );
  }
}

export default About;
