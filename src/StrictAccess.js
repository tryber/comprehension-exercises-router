import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class strictAccess extends Component {
  render() {
    const { name, passWord } = this.props.user; 
    if(name === 'rafael' && passWord === '123456789') {
      return <p>Welcome, {name}!</p>
    } else {
      alert('Access denied');
      return <Redirect to="/" />
    }
  }
}
