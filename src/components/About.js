import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    const { greetingsMessage } = this.props
    const { id } = this.props.match.params
    return (
      <div>
        <h2>About</h2>
        <p> {greetingsMessage} My awesome {this.props.name} component { id } </p>
        <Link to="/">Voltar a Home</Link>
      </div>
    );
  }
}

export default About;
