import React, { Component } from 'react';
import { Redirect } from 'react-router';

class StrictAcces extends Component {
  render() {
    const { user: { username, password } } = this.props;

    if (!(username === 'joao' && password === 1234)) {
      alert('Access denied');
      return <Redirect to="/" />
    }

    return (
      <div>
        <h2>Strict Access</h2>
        <p>Wellcome, { username }! Como você está hoje?</p>
      </div>
    );
  }
}

export default StrictAcces;
