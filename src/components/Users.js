import React, { Component } from 'react';

class Users extends Component {
  
  render() {
    const { greetingMessage, match: { params: { id }} } = this.props
    // const { id } = this.props.match.params;

    return (
      <div>
        <h2> Users </h2>
        <p> {`${greetingMessage}, user ${id}.`}</p>
        <p>This is my awesome Users component</p>
    </div>
    );
  }
};

export default Users;
