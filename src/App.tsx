import React from 'react';
import './App.css';
import { Reveal } from './Reveal'; 
import Cursor from './Cursor';
import NavList from './Navigation';
import { Stars } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";


function App() {
  return (
    <div className="app">

      {/* stars effect */}
      <div className = "stars">
        <Canvas>
          <Stars radius ={50} count = {1500} factor = {3} fade speed = {2}></Stars>
        </Canvas>
      </div>

      {/* cursor component effect*/}
      <Cursor></Cursor>

      {/*introduction text surrounded with reveal component*/}
      <div className = "intro">
    
      <h3>Hi, my name is</h3>
     
      <h2>Elvis Thai</h2>
    
      <p>I am a computer science student at Western University expected to graduate in May 2027. I am currently seeking opportunities to apply my skills and learn!</p>
      
      </div>

      {/*navigation bar component*/}
      <NavList></NavList>

      {/*about section*/}
      <div className = "heading about">
      <Reveal>
      <h1>about me</h1>
      </Reveal>
      <Reveal>
      <p className = "aboutParagraph">As a computer science student I thrive on solving complex problems and am always eager to learn new technologies! 
      I have a passion for software engineering in both front-end and back-end development, with a keen interest in artificial intelligence and data science.
      <br></br><br></br>To further my knowledge and skills, I have built and am building full stack projects that align with my interests and passions. These projects include developing 
      pixel-perfect web applications, implementing machine learning models, and analyzing data sets to extract meaningful insights. 
      <br></br><br></br>When I am not coding, I am probably running, rock climbing, or gaming!
      </p>
      </Reveal>
      </div>

      {/*logos*/}
      <div className = "logos">
      <a href="https://www.linkedin.com/in/elvisthai/" target="_blank">
        
      <img className = "linkedin" src="src\images\linkedinLogo.png" alt="linkedinLogo"></img>
      </a>
      
      <a href="https://github.com/elvisThai" target="_blank">
      <img className = "github" src="src\images\github.png" alt="linkedinLogo"></img>
      </a>
  
      </div>

      {/*skills section*/}
      <div className = "heading skills">
      <Reveal>
      <h1 id = "skills"><br></br><br></br><br></br><br></br><br></br><br></br>skills</h1>
      </Reveal>
      <Reveal>
      <p className = "skillCategory">LANGUAGES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FRAMEWORKS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TOOLS</p>
      </Reveal>
      <Reveal>
        <ul className = "skillList">
          <li>Python</li>
          <li>Java</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
        </ul>
      </Reveal>
      <Reveal>
        <ul className = "skillList frameworks">
          <li>React</li>
          <li>Node.js</li>
        </ul></Reveal>
    
        <Reveal>
        <ul className = "skillList tools">
          <li>Git&nbsp;&&nbsp;Github</li>
          <li>VS&nbsp;Code</li>
          <li>PyCharm</li>
          <li>IntelliJ</li>
          <li>Eclipse</li>
        </ul></Reveal>

      </div>

      {/*projects section*/}
      <div className = "heading projects">
      <Reveal>
      <h1 id = "projects"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>projects</h1>
      </Reveal>
      <Reveal>
      <p className = "projectsParagraph">coming soon</p>
      </Reveal>
      </div>

       {/*contact section*/}
      <div className = "heading">
      <Reveal>
      <h1 id = "contact"><br></br><br></br><br></br><br></br><br></br><br></br>contact</h1>
      </Reveal>
     
      <Reveal>
      <a className="email contact" href="mailto:elvisthai246@gmail.com">elvis.thai@outlook.com</a>
      </Reveal>
      <Reveal>
      <h3 className = "contact">416-662-1097</h3>
      </Reveal>
      

      </div>

    </div>
  );
}

export default App;
