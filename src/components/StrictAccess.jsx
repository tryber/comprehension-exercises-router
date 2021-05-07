import React from 'react';
import {Redirect} from 'react-router-dom';

class StrictAcess extends React.Component {
    render() {
        const { user } = this.props;
        const { username, password } = user;
        if(!(username === 'Alexandre' && password === '1234')) {
            alert('Acess denied!');
            return <Redirect to="/"/>;
        }
        return (
            <p>Welcome, Alexandre!</p>
        )
    }
}

export default StrictAcess;