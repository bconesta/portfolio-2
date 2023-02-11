import React, { useState } from 'react'
import './Card.scss'

import Open from '../img/icons/open.png'
import Download from '../img/icons/download.png'
import Git from '../img/icons/git.png'

export default function Card(props) {

  return (
    <div className='card'>
        <div className='image'> 
            <img src={props.src} alt={props.alt} />
        </div>
        <div className='text-container'>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </div>
        <div className='badges'>
          {
            props.badges.map((badge)=>{
              return <img src={badge[0]} title={badge[1]} />
            })
          }
        </div>
        <div className='links'>
          <a href={props.appref} download={props.download} target="_blank" rel='noreferer'> 
            {!props.download && <img src={Open} alt="" />}
            {props.download && <img src={Download} alt="" />}
          </a>
          {props.gitref &&
          <a href={props.gitref} style={{float : 'right'}} target="_blank" rel='noreferer'>
            <img src={Git} alt="" />
          </a>
          } 
        </div>
    </div>
  )
}
