import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';
import StrictAccess from './StrictAccess';

import { Route, Switch } from 'react-router-dom';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: 'Good morning',
      username: 'joao',
      password: '1234',
    };
  };

  render() {
    const { welcomeMessage, username, password } = this.state;

    return (
      <main className="Content">
        <Switch>
          <Route exact path="/"component={ Home } />
          <Route path="/about" component={ About } />
          <Route
            path="/users/:userId"
            render={ (routerProps) => (
              <Users { ...routerProps } 
              greetingMessage={ welcomeMessage } />
            ) }
          />
          <Route
            path="/strict-access"
            render={ () => (
              <StrictAccess user={ { username, password } } />
            )}
          />
        </Switch>
      </main>
    );
  };
}

export default Content;
