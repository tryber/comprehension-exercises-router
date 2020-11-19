import React from 'react';
import { Link } from 'react-router-dom'

const About = () => (
  <div>
    <h2>About</h2>
    <p> My awesome About component </p>
    <Link to="/">Voltar para Home</Link>
  </div>
);

export default About;