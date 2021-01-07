import React from 'react';

class Users extends React.Component {
  render() {
    let greetingMessage = 'Hi there';
    return (
      <div>
        <h2> Users </h2>
        <p> {greetingMessage}, this is my awesome Users component {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Users;
