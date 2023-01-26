import React from 'react'

import Bruno from '../img/bruno.jpg'

export default function Navbar(props) {
  return (
    <div className={props.className}>
      <div className='container'>
        <div className='foto-container'>
          <img src={Bruno} alt="brunoconesta" />
        </div>
        <ul>
          <li><a href="#" id="bruno-nav" className='selected'>BRUNO</a></li>
          <li><a href="#about" id="about-nav">ABOUT</a></li>
          <li><a href="#projects" id="projects-nav">PROJECTS</a></li>
          <li><a href="#education" id="education-nav">EDUCATION</a></li>
          <li><a href="#contact" id="contact-nav">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}
