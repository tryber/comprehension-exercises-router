import React from 'react';
import { Redirect } from 'react-router-dom';

const StrictAccess = ({ user }) => {
  const { username, password } = user;
  if (username === 'joao' && password === '1234') {
    return (
      <p>Welcome joao!</p>
    );
  } else {
    alert('Access denied');
    return (
      <Redirect to="/" />
    );
  }
  
};

export default StrictAccess;