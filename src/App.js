import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppPage from './pages/AppPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppPage /> 
      </BrowserRouter>
    );
  }
}

export default App;