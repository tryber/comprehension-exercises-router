import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
    constructor(props) {
        super(props)
        this.authenticated = this.authenticated.bind(this);
        this.alerta = this.alerta.bind(this);

    }

    authenticated(){
        const { password, username } = this.props.user;
        if(password === 123456 && username === 'joao'){
            return true;
        }
    }

    alerta() {
        alert('Access denied');
        return (<Redirect to="/"/>);
    }

    render() {
        return(
        <div>
            <h1>Strict Access</h1>
            {this.authenticated() ? <p>Welcome joao!</p> : this.alerta()}
        </div>);
    }
}

export default StrictAccess;