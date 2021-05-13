import React, { Component } from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user;

    if (username !== 'joao' || password !== 1234) {
      alert('Access denied');
      return <Redirect to="/" />
    }

    return (
      <div>
        <p>Welcome João!! =D</p>
      </div>
    );
  }
}

export default StrictAccess;