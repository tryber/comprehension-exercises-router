
import React from 'react';
import { Redirect } from 'react-router-dom';

const StrictAccess = ({ user }) => {
  const { username, password } = user;
  if (!(username==='joao' && password === '1234')){
    alert('Access denied');
    return <Redirect to="/" />
  }
  return (
    <p>Welcome joao!</p>
  );
};

export default StrictAccess;