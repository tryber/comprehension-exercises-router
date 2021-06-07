import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class StrictAccess extends Component {
  render() {
    const {user} = this.props;
    const {userName, password} = user;
    if (userName === 'joao' && password === '1234'){
      return (
        <p>Welcome, João!!!!!</p>
      )
    }
    alert('Access denied');
    return (
      <Redirect to="/"/>
    )
  }
}
