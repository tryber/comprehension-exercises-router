import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Maria',
      password: '1234',
    }
  }

  handleChange = () => {
    this.setState({
      username: "Alexandre",
      password: '1234',
    })
  }

  componentDidMount() {
    this.handleChange()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/acesso">Acesso</Link></li>
          </nav>
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/users/:id" render={(props) => <Users {...props}greetingMessage='Hello! Good Morning'/>} />
              <Route path="/acesso" render={(props) => <StrictAccess {...props} user={this.state}/>} />
              <Route path="/" component={Home}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
