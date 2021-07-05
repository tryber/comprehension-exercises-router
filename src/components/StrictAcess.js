import React from 'react';
import { Redirect } from 'react-router';

class StrictAcess extends React.Component {
    render() {
        const { user: { username, password } } = this.props;
        if (!(username === "joao" && password === "1234")) {
            alert('Acess denied');
            return <Redirect to="/" /> 
        }  
        return (
        <h1>Welcome João</h1>
        );
    }
}

export default StrictAcess;