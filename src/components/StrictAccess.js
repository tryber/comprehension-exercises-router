import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
  const { username, password } = this.props.user;

  if (!(username === 'joão' && password === '1234')) {
    alert('Access denied')
    return <Redirect to="/" />
  } 
    return (
      <p>Welcome João!</p>
    );
}
}

export default StrictAccess;
