import React from "react";
import { Link } from "react-router-dom";

const Users = ({ greetingMessage = "Hi There", usersIds }) => (
  <div>
    {console.log(usersIds)}
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    <ul>
      {usersIds.map((id) => (
        <li key={id}>
          <Link to={"/users/" + id}>{id}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Users;
