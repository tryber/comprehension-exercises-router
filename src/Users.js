import React from 'react';

class Users extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h2> Users </h2>
        <p>ID: { id } </p>
        <p> {this.props.greetingMessage}, this is my awesome Users component </p>
      </div>
    );
  }
}


export default Users;