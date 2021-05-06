import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage, match: { params: { userId } } } = this.props;

    return (
      <div>
        <h2> Users </h2>
        <p> {greetingMessage} { userId }, this is my awesome Users component </p>
      </div>
    );
  }
};

export default Users;
