import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/containers/LandingPage';
import WhatsPoppular from './components/containers/WhatsPoppular';
import FreeToWatch from './components/containers/FreeToWatch';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <WhatsPoppular></WhatsPoppular>
      <FreeToWatch></FreeToWatch>
    </div>
  );
}

export default App;
