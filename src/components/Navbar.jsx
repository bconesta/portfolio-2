import React, { useEffect, useState } from 'react'

import Bruno from '../img/bruno.jpg'
import Arrow from '../img/icons/arrow.png'

export default function Navbar(props) {

  const [value, setValue] = useState(0);

  const lang = props.lang;

  function changeSection(){
    if(value === 0){window.location.hash = "about"}
    else if(value === 1){window.location.hash = "skills"}
    else if(value === 2){window.location.hash = "projects"}
    else if(value === 3){window.location.hash = "contact"}
  }

  useEffect(()=>{
    document.addEventListener("scroll", ()=>{
      setValue(Math.round(window.scrollY / window.innerHeight))
    })
  },[])

  return (
    <div className={props.className}>
      <div className='container'>
        <div className='foto-container'>
          <img src={Bruno} alt="brunoconesta" />
        </div>
        <ul>
          <li><a href="#" className={value===0 ? 'selected' : 'hide'}>{lang.navbar[0]}</a></li>
          <li><a href="#about" className={value===1 ? 'selected' : 'hide'}>{lang.navbar[1]}</a></li>
          <li><a href="#skills" className={value===2 ? 'selected' : 'hide'}>{lang.navbar[2]}</a></li>
          <li><a href="#projects" className={value===3 ? 'selected' : 'hide'}>{lang.navbar[3]}</a></li>
          <li><a href="#contact" className={value===4 ? 'selected' : 'hide'}>{lang.navbar[4]}</a></li>
        </ul>
        <button onClick={changeSection}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  )
}
