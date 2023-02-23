import React from 'react'
import Card from '../components/Card'

import Planty from '../img/planty/all.png'
import Domodin from '../img/domodin/all.png'
import Oldport from '../img/oldport.png'
import Memotest from '../img/memotest/memotest.png'
import Roulette from '../img/roulette/roulette.png'

import ReactBadge from '../img/badges/react.png'
import AngularBadge from '../img/badges/angular.png'
import IonicBadge from '../img/badges/ionic.png'
import TypeBage from '../img/badges/typescript.png'
import JSBadge from '../img/badges/js.png'
import SassBadge from '../img/badges/sass.png'
import HtmlBadge from '../img/badges/html.png'
import CSSBadge from '../img/badges/css.png'

export default function Projects() {
  return (
    <div style={{margin : '0 0 0 50px'}} className="projects-container" >
      <h1>PROJECTS</h1>
      <h2>Featured projects</h2>
      <div className="featured-container">
      <Card 
        src={Planty} 
        alt='Mi planty' 
        title='MI PLANTY' 
        badges={[[IonicBadge, "Ionic framework"], [AngularBadge, "Angular"], [TypeBage, "TypeScript"], [SassBadge, "Sass"]]}
        download="miplanty_v1.02.apk"
        appref="/files/miplanty_v1.02.apk"
        gitref="https://github.com/bconesta/MiPlanty"
      >
        Mobile app for monitoring plants climate conditions
      </Card>
      <Card 
        src={Domodin} 
        alt='Domodin' 
        title='DOMODIN' 
        badges={[[IonicBadge, "Ionic framework"], [AngularBadge, "Angular"], [TypeBage, "TypeScript"], [SassBadge, "Sass"]]}
        appref="https://domotica-120ce.web.app/login"
      >
        Mobile PWA for controlling home devices
      </Card>      
      <Card 
        src={Oldport} 
        alt='Old portfolio' 
        title='PORTFOLIO' 
        badges={[[ReactBadge, "React.js"], [JSBadge, "JavaScript"], [SassBadge, "Sass"]]}
        appref="https://bconesta.github.io/portfolio/"
        gitref="https://github.com/bconesta/portfolio"
      >
        Older version of my developer portfolio
      </Card>  
      <Card 
        src={Memotest} 
        alt='Memotest' 
        title='MEMOTEST' 
        badges={[[ReactBadge, "React.js"], [JSBadge, "JavaScript"], [CSSBadge, "CSS3"]]}
        appref="https://memomiga.vercel.app"
        gitref="https://github.com/bconesta/memotest-react"
      >
        Game made for a company as a freelancer
      </Card>
      <Card 
        src={Roulette} 
        alt='Roulette' 
        title='ROULETTE' 
        badges={[[ReactBadge, "React.js"], [JSBadge, "JavaScript"], [SassBadge, "Sass"]]}
        appref="https://roulettemiga.vercel.app"
        gitref="https://github.com/bconesta/roulette-react"
      >
        Roulette generator for making choices
      </Card>
      </div> 
    </div>
  )
}
