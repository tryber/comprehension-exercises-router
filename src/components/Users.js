import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const { nome, pass } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, {nome} </p>
        <Link to='/'> Voltar </Link>
      </div>
    );
  }
};

export default Users;
