import React from 'react'

import Linkedin from '../img/icons/linkedin.png'
import Github from '../img/icons/github.svg'
import Twitter from '../img/icons/gorjeo.png'

export default function Bruno(props) {

  const lang = props.lang;

  return (
    <div>
        <h1>BRUNO CONESTA</h1>
        <h2>{lang.bruno[0]}</h2>
        <h4>{lang.bruno[1]} <a href="mailto:bconesta@gmail.com">bconesta@gmail.com</a></h4>
        <a className='download' href="/files/resume.pdf" download="resume.pdf">{lang.bruno[2]}</a>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/bruno-conesta/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="" />
                </a>
            </li>
            <li>
                <a href="https://github.com/bconesta" target="_blank" rel="noreferrer">
                    <img src={Github} alt="" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/brunardou6" target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="" />
                </a>
            </li>
        </ul>
    </div>
  )
}
