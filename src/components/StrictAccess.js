import React, { Component } from "react"
import { Redirect } from "react-router"

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user; // recebe objeto "user" como props
    if(username !== 'Joao' && password !== '1234') {
      alert('Access denied');
      return <Redirect to="/" />
    }
    return (
      "Welcome João!"
    )
  }
}

export default StrictAccess;