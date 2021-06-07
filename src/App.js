import React, { Component } from 'react';
import Home from './components/Home';
import { Switch ,Route, BrowserRouter } from 'react-router-dom';
import Users from './components/Users';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={Home}/>
          <Route 
          path="/About/:id" 
          render={ (props) => <About {...props} name={'JF'}
          greetingsMessage={"Good Morning"}/>}
          />
          <Route path="/Users" component={Users}/>
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
