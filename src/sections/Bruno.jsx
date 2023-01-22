import React from 'react'

import Linkedin from '../img/icons/linkedin.png'
import Github from '../img/icons/github.svg'
import Twitter from '../img/icons/gorjeo.png'

export default function Bruno() {
  return (
    <div>
        <h1>BRUNO CONESTA</h1>
        <h2>WELCOME TO MY PORTFOLIO AS FRONT-END DEVELOPER</h2>
        <h4>If you are interested in contact me, write me at <a href="mailto:bconesta@gmail.com">bconesta@gmail.com</a></h4>
        <a className='download' href="/resume.pdf" download="resume.pdf">Download my resume</a>
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
