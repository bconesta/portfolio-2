import React, { useState } from 'react'
import './Card.scss'

import Open from '../img/icons/open.png'
import Download from '../img/icons/download.png'
import Git from '../img/icons/git.png'
import Badge from './Badge/Badge'

export default function Card({ src, alt, title, children, badges, download, appRef, gitRef }) {

  return (
    <div className='card'>
        <div className='image'> 
            <img src={src} alt={alt} />
        </div>
        <div className='text-container'>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
        <div className='badges'>
          {
            badges.map(badge=>{
              return <Badge key={badge+Math.random()} title={badge} iconOnly/>
            })
          }
        </div>
        <div className='links'>
          <a href={appRef} style={{float: "left"}} download={download} target="_blank" rel='noreferer'> 
            <img src={download ? Download : Open} alt="" />
          </a>
          {gitRef &&
          <a href={gitRef} style={{float : 'right'}} target="_blank" rel='noreferer'>
            <img src={Git} alt="" />
          </a>
          } 
        </div>
    </div>
  )
}
