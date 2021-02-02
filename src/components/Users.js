import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ greetingMessage = 'Hi There' }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    {/* <Link to='/'>Voltar a Home</Link> */}
  </div>
);

export default Users;
