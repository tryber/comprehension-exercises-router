import React from 'react';

const Users = ({ greetingMessage = 'Hi There', match: { params: { id } } }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component, usuário id: { id } </p>
  </div>
);

export default Users;
