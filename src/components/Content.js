import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';

import { Route, Switch } from 'react-router-dom';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Good morning!',
    };
  }

  render() {
    const { greeting } = this.state;
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/"component={ Home } />
          <Route path="/about" component={ About } />
          <Route
            path="/users"
            render={ (reactRouterProps) => (
              <Users { ...reactRouterProps } 
              greetingMessage={ greeting } />
            ) }
          />
        </Switch>
      </main>
    );
  }
}

export default Content;
