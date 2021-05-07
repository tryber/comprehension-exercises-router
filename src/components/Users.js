import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingMessage, match: {params: {id}} } = this.props
    // const { id } = this.props.match.params
    
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Users</h2>
        <p> {greetingMessage} My awesome Users component </p>
        <p> {id}</p>
      </div>
    );
  }
};

export default Users;
// import React from 'react';

// const Users = ({ greetingMessage = 'Hi There' }) => (
//   <div>
//     <h2> Users </h2>
//     <p> {greetingMessage}, this is my awesome Users component </p>
//   </div>
// );

// export default Users;
