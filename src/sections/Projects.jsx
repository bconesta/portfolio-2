import React from 'react'
import Card from '../components/Card'

import Planty from '../img/planty/all.png'
import Domodin from '../img/domodin/all.png'
import Oldport from '../img/oldport.png'

import ReactBadge from '../img/badges/react.png'
import AngularBadge from '../img/badges/angular.png'
import IonicBadge from '../img/badges/ionic.png'
import TypeBage from '../img/badges/typescript.png'
import JSBadge from '../img/badges/js.png'
import SassBadge from '../img/badges/sass.png'
import HtmlBadge from '../img/badges/html.png'

export default function Projects() {
  return (
    <div style={{margin : '0 0 0 50px'}}>
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
    </div>
  )
}
