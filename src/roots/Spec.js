import React from 'react';
import NavBar from '../components/navbar.js';
import Header from '../components/header.js';
import Container from '../components/container.js';

function Spec() {
  return (
    <div>

      <Header/>
      <NavBar/>
      
      <Container>
        <h1>Computer Specification</h1>
        <p>GPU: GeForce GTX 1080</p>
        <p>CPU: i5-9600k</p>
      </Container>

    </div>
      
  );
}

export default Spec;
