import React from 'react';
import NavBar from '../components/navbar.js';
import Header from '../components/header.js';
import Container from '../components/container.js';

function Home() {
  return (
    <div>
      
      <Header></Header>
      <NavBar></NavBar>
      <Container>
        <h1>Home</h1>
      </Container>
      
    </div>
      
  );
}

export default Home;
