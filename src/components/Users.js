// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        <p> { this.props.greetingsMessage }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;

