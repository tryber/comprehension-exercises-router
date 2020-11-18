import React, { Component } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'

class AppPage extends Component {
  render() {
    return(
      <div>
        <Header id="01" />
        <Content />
      </div>
    )
  }
}

export default AppPage
