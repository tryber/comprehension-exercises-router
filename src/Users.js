import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {

  render () {
    const { id } = this.props.match.params
    return (
      <div>
        <h2> Users </h2>
        <p> {this.props.greetingMessage} My awesome Users component {id} </p>
        <Link to="/">Voltar a Home</Link>
      </div>
    )
  }
}

export default Users;