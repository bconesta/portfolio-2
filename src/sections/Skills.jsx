import React from 'react'

import Badge from '../components/Badge'

import ReactBadge from '../img/badges/react.png'
import AngularBadge from '../img/badges/angular.png'
import IonicBadge from '../img/badges/ionic.png'
import TypeBadge from '../img/badges/typescript.png'
import JSBadge from '../img/badges/js.png'
import SassBadge from '../img/badges/sass.png'
import HtmlBadge from '../img/badges/html.png'
import CSSBadge from '../img/badges/css.png'
import PythonBadge from '../img/badges/python.png'
import CPPBadge from '../img/badges/cpp.png'
import BootstrapBadge from '../img/badges/bootstrap.png'
import JiraBadge from '../img/badges/jira.png'
import VSCodeBadge from '../img/badges/vscode.png'
import DiscordBadge from '../img/badges/discord.png'
import TeamsBadge from '../img/badges/teams.png'
import GitBadge from '../img/badges/git.png'
import NodeBadge from '../img/badges/node.png'
import SpanishBadge from '../img/badges/spanish.jpg'
import EnglishBadge from '../img/badges/english.jpg'

export default function Skills() {
  return (
    <div>
        <h1>SKILLS</h1>
        <h2>Programming languages</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge src={HtmlBadge} tittle="HTML5" />
          <Badge src={CSSBadge} tittle="CSS3" />
          <Badge src={JSBadge} tittle="JavaScript" />
          <Badge src={TypeBadge} tittle="TypeScript" />
          <Badge src={CPPBadge} tittle="C++" />
          <Badge src={PythonBadge} tittle="Python" />
        </div>
        <h2>Frameworks and libraries</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge src={ReactBadge} tittle="React" />
          <Badge src={AngularBadge} tittle="Angular" />
          <Badge src={IonicBadge} tittle="Ionic" />
          <Badge src={SassBadge} tittle="SASS" />
          <Badge src={BootstrapBadge} tittle="Bootstrap" />
        </div>
        <h2>Software and tools</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge src={JiraBadge} tittle="Jira" />
          <Badge src={GitBadge} tittle="Git" />
          <Badge src={NodeBadge} tittle="Node.js" />
          <Badge src={VSCodeBadge} tittle="VS Code" />
          <Badge src={TeamsBadge} tittle="Teams" />
          <Badge src={DiscordBadge} tittle="Discord" />
        </div>
        <h2>Languages</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge src={SpanishBadge} tittle="Native" />
          <Badge src={EnglishBadge} tittle="B2 level" />
        </div>
    </div>
  )
}
