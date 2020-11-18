import React from 'react';
import { Redirect } from 'react-router-dom'

class StrictAccess extends React.Component {

  validate = () => {
    const { username, password } = this.props.user;
    const { user, pass } = this.props.match.params
    if (username === user && password === pass ) {
      return "Welcome joao!";
    }
    alert('Access denied');
    return <Redirect to="/" />;        
  }

  render() {
      return (
    <h2>{this.validate()}</h2>
    );
  }
}

export default StrictAccess;
