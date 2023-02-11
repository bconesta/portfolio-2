import React, { useEffect, useState } from 'react'

import Bruno from '../img/bruno.jpg'

export default function Navbar(props) {

  const [value, setValue] = useState(0);

  useEffect(()=>{
    document.addEventListener("scroll", ()=>{
      setValue(Math.round(window.scrollY / window.innerHeight))
    })
  },[])

  /*useEffect(()=>{
    if(value===0){window.location.hash = ''}
    if(value===1){window.location.hash = 'about'}
    if(value===2){window.location.hash = 'projects'}
    if(value===3){window.location.hash = 'education'}
    if(value===4){window.location.hash = 'contact'}
  })*/
  
  return (
    <div className={props.className}>
      <div className='container'>
        <div className='foto-container'>
          <img src={Bruno} alt="brunoconesta" />
        </div>
        <ul>
          <li><a href="#" className={value===0 ? 'selected' : ''}>BRUNO</a></li>
          <li><a href="#about" className={value===1 ? 'selected' : ''}>ABOUT</a></li>
          <li><a href="#projects" className={value===2 ? 'selected' : ''}>PROJECTS</a></li>
          <li><a href="#education" className={value===3 ? 'selected' : ''}>EDUCATION</a></li>
          <li><a href="#contact" className={value===4 ? 'selected' : ''}>CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}
