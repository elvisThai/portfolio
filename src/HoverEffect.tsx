import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal'; 

const NavList = () => {
  return (
    <ul className="nav-list" style={{marginRight: "10%", marginTop: "2%" }}>
      <li style={{listStyle: 'none'}}>
        <a
          href="#"
          style={{ marginLeft: '15%', marginTop: '5%', lineHeight: '50%', color: '#fff', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '150%' }}
        >
          <motion.span
           whileHover={{ scale: 1.1, marginLeft: '2%' }}
           style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}}
          >
            <Reveal><p>About</p></Reveal>
          </motion.span>
        </a>
      </li>
      <li style={{listStyle: 'none' }}>
        <a
          href="#"
          style={{ marginLeft: '15%', marginTop: '5%', lineHeight: '50%', color: '#fff', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '150%' }}
        >
          <motion.span
            whileHover={{ scale: 1.1, marginLeft: '2%' }}
            style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}}
          >
            <Reveal><p>Skills</p></Reveal>
          </motion.span>
        </a>
      </li>
      <li style={{listStyle: 'none' }}>
        <a
          href="#"
          style={{ marginLeft: '15%', marginTop: '5%', lineHeight: '50%', color: '#fff', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '150%' }}
        >
          <motion.span
            whileHover={{ scale: 1.1, marginLeft: '2%' }}
            style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}}
          >
            <Reveal><p>Projects</p></Reveal>
          </motion.span>
        </a>
      </li>
      <li style={{listStyle: 'none' }}>
        <a
          href="#"
          style={{ marginLeft: '15%', marginTop: '5%', lineHeight: '50%', color: '#fff', textDecoration: 'none', fontFamily: '"Reddit Sans", sans-serif', fontSize: '150%' }}
        >
          <motion.span
            whileHover={{ scale: 1.1, marginLeft: '2%' }}
            style={{ display: 'inline-block', transition: 'margin-left 0.1s linear'}} 
          >
            <Reveal><p>Contact</p></Reveal>
          </motion.span>
        </a>
      </li>
    </ul>
  )
}

export default NavList;
