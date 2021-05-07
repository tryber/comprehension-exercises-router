import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    const validName = 'joao';
    const validPassword = '1234';

    if (!(username === validName && password === validPassword)) {
      alert('Access denied');
      return <Redirect to="/" />;
    }
    return (
      <p> Welcome { username } </p>
    );
  }
}

export default StrictAccess;
