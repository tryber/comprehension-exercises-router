import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <main>
      <h2> Users </h2>
      <p> { greetingMessage } user { id }, this is my awesome Users component </p>
    </main>
    )
  }
}

export default Users;