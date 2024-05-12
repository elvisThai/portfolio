import React from 'react';
import './App.css';
import { Reveal } from './Reveal'; 
import Cursor from './Cursor';
import NavList from './HoverEffect';

function App() {
  return (
    <div className="app">

      {/* cursor component effect*/}
      <Cursor></Cursor>

      {/*introduction text surrounded with reveal component*/}
      <div className = "intro">
      <Reveal>
      <h3>Hi, my name is</h3>
      </Reveal>
      <Reveal>
      <h2>Elvis Thai.</h2>
      </Reveal>
      <Reveal>
      <p>I am a computer science student at Western University expected to graduate in May 2027. I am currently seeking opportunities to learn!</p>
      </Reveal>
      </div>

      {/*navigation bar component*/}
     
      <NavList />
     

    

    </div>
  );
}

export default App;
