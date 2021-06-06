import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    let correctUser;

    if (user.username === 'joao' && user.password === '1234') {
      correctUser = true;
    } else {
      correctUser = false;
      alert('Access denied');
    }

    return (
      correctUser ?
      <div>
        <p>Welcome, joao!</p>
      </div>
      :
      <Redirect to="/" />
    )
  }
}
