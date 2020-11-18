import React from 'react';

class About extends React.Component {
  render(){
    const { test } = this.props.match.params;
    return (
      <div>
      <h2>About</h2>
      <p> My awesome About component {test} </p>
    </div>
    );
  }
}

export default About;
