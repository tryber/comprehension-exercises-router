import React, { Component } from 'react';
import Home from './components/Home';
import { Switch ,Route, BrowserRouter } from 'react-router-dom';
import Users from './components/Users';
import About from './components/About';
import StrictAccess from './components/StrictAccess';

class App extends Component {

  render() {
    const user ={
      userName: 'joao',
      password: '12345'
    }
    return (
      <BrowserRouter>
        <switch>
          <Route path="/StrictAccess" render={ () => (<StrictAccess user={ user }/>) } />
          <Route path="/Users/:id"render={ (props) => <About {...props} name={'JF'}
          greetingsMessage={"Good Morning"}/>}/>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
