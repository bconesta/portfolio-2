import React from 'react'
import Card from '../components/Card'

import Waiot from '../img/waiot/all.png'
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

export default function Projects(props) {
  
  const lang = props.lang;

  return (
    <div style={{margin : '0 0 0 50px'}} className="projects-container" >
      <h1>{lang.projects.tittle}</h1>
      <h2>{lang.projects.featured}</h2>
      <div className="featured-container">
      <Card 
        src={Waiot} 
        alt='Waiot' 
        title='WAIOT' 
        badges={[[ReactBadge, "React.js"], [JSBadge, "JavaScript"], [SassBadge, "Sass"]]}
        appref="https://waiot-2.vercel.app"
        gitref="https://github.com/bconesta/waiot-2"
      >
        {lang.projects.waiot}
      </Card>
      <Card 
        src={Planty} 
        alt='Mi planty' 
        title='MI PLANTY' 
        badges={[[IonicBadge, "Ionic framework"], [AngularBadge, "Angular"], [TypeBage, "TypeScript"], [SassBadge, "Sass"]]}
        download="miplanty_v1.02.apk"
        appref="/files/miplanty_v1.02.apk"
        gitref="https://github.com/bconesta/MiPlanty"
      >
        {lang.projects.planty}
      </Card>
      <Card 
        src={Domodin} 
        alt='Domodin' 
        title='DOMODIN' 
        badges={[[IonicBadge, "Ionic framework"], [AngularBadge, "Angular"], [TypeBage, "TypeScript"], [SassBadge, "Sass"]]}
        appref="https://domotica-120ce.web.app/login"
      >
        {lang.projects.domodin}
      </Card>      
      <Card 
        src={Oldport} 
        alt='Old portfolio' 
        title='PORTFOLIO' 
        badges={[[ReactBadge, "React.js"], [JSBadge, "JavaScript"], [SassBadge, "Sass"]]}
        appref="https://bconesta.github.io/portfolio/"
        gitref="https://github.com/bconesta/portfolio"
      >
        {lang.projects.portfolio}
      </Card>  
      <Card 
        src={Memotest} 
        alt='Memotest' 
        title='MEMOTEST' 
        badges={[[ReactBadge, "React.js"], [JSBadge, "JavaScript"], [CSSBadge, "CSS3"]]}
        appref="https://memomiga.vercel.app"
        gitref="https://github.com/bconesta/memotest-react"
      >
        {lang.projects.memotest}
      </Card>
      <Card 
        src={Roulette} 
        alt='Roulette' 
        title='ROULETTE' 
        badges={[[ReactBadge, "React.js"], [JSBadge, "JavaScript"], [SassBadge, "Sass"]]}
        appref="https://roulettemiga.vercel.app"
        gitref="https://github.com/bconesta/roulette-react"
      >
        {lang.projects.roulette}
      </Card>
      </div> 
    </div>
  )
}
