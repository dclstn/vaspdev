import React from 'react';
import NavBar from '../components/navbar.js';
import Header from '../components/header.js';
import Container from '../components/container.js';
import ModsGet from '../components/tools/getMods.js'
import VipsGet from '../components/tools/getVips.js'

function Spec() {
  return (
    <div>

      <Header/>
      <NavBar/>
      
      <Container>
            <h1>🛠️ Twitch Tool</h1>
            <ModsGet/>
      </Container>

    </div>
      
  );
}

export default Spec;
