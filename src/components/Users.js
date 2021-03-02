import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h2> Users </h2>
        <p> {id} </p>
    </div>
    )
  }
};

export default Users;
