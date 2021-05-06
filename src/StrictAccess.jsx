import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { id, password } = this.props.user
    if (id !== "joao" || password !== 1234 ) {
      alert("Access denied");
      return <Redirect to="/" />
    } 
    return (
      <div className="App">
        <h1>Wellcome { id }</h1>
        <p>Secret page</p>
      </div>
    )
  }
}

export default StrictAccess;
