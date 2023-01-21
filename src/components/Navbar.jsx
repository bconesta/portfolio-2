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
          <li><a href="" className='selected'>BRUNO</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">PROJECTS</a></li>
          <li><a href="">EDUCATION</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}
