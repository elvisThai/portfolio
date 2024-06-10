import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal'; 

const NavList = () => {
  return (
    <ul className="nav-list" style={{right: "80.5%", top: "52%", position: "fixed" }}>
      <li style={{listStyle: 'none'}}>
        <a
          href="#"
          style={{ marginLeft: '20%', marginTop: '5%', lineHeight: '50%', color: '#D3D3D3', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '130%' }}
        >
          <motion.span
           whileHover={{ scale: 1.2, x: '20%' }}
           style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}}
          >
            <p>About</p>
          </motion.span>
        </a>
      </li>
      <li style={{listStyle: 'none' }}>
        <a
          href="#skills"
          style={{ marginLeft: '20%', marginTop: '5%', lineHeight: '50%', color: '#D3D3D3', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '130%' }}
        >
          <motion.span
            whileHover={{ scale: 1.2, x: '20%' }}
            style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}}
          >
            <p>Skills</p>
          </motion.span>
        </a>
      </li>
      <li style={{listStyle: 'none' }}>
        <a
          href="#projects"
          style={{ marginLeft: '20%', marginTop: '5%', lineHeight: '50%', color: '#D3D3D3', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '130%' }}
        >
          <motion.span
            whileHover={{ scale: 1.2, x: '20%' }}
            style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}}
          >
            <p>Projects</p>
          </motion.span>
        </a>
      </li>
      <li style={{listStyle: 'none' }}>
        <a
          href="#contact"
          style={{ marginLeft: '20%', marginTop: '5%', lineHeight: '50%', color: '#D3D3D3', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '130%' }}
        >
          <motion.span
            whileHover={{ scale: 1.2, x: '20%' }}
            style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}} 
          >
            <p>Contact</p>
          </motion.span>
        </a>
      </li>
    </ul>
  )
}

export default NavList;
