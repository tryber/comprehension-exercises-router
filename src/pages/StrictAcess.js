import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StrictAcess extends Component {
  render() {
    const { user } = this.props
    const { username, password } = user
    const welcome =
      <div>
        <p>
          {`Welcome, joaozinho`}
        </p>
      </div>
    
    const accessDenied =
      <div>
        <span>Acess Denied</span>
        <Link to="./Home">VOLTAR PARA O HOME</Link>
      </div>
    return(
      username === 'joao' && password === '1234' ? welcome : accessDenied
    ) 
  }
}

export default StrictAcess;
