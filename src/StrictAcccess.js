import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';


export default class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user    
    // const user = { username: 'joao', password: 1234 }
    // const { username, password } = user
    return ( 
      <div>
        {
          username === 'joao' && password === 1234 ? <div>Welcome João</div> : alert('Accers denied') && <Redirect to="/"/>
        }  
      </div>
      );
  }
} 