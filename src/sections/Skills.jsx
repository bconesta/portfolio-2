import React from 'react'

import Badge from '../components/Badge/Badge'

export default function Skills(props) {
  
  const lang = props.lang;

  return (
    <div>
        <h1>{lang.skills[0]}</h1>
        <h2>{lang.skills[1]}</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge title="HTML5" />
          <Badge title="CSS3" />
          <Badge title="JavaScript" />
          <Badge title="TypeScript" />
          <Badge title="C++" />
          <Badge title="Python" />
        </div>
        <h2>{lang.skills[2]}</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge title="Next.js" />
          <Badge title="React" />
          <Badge title="Angular" />
          <Badge title="Node.js" />
          <Badge title="Ionic" />
          <Badge title="SASS" />
          <Badge title="Bootstrap" />
        </div>
        <h2>{lang.skills[3]}</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge title="MongoDB" />
          <Badge title="MySQL" />
          <Badge title="Firebase" />
        </div>
        <h2>{lang.skills[4]}</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge title="Jira" />
          <Badge title="Git" />
          <Badge title="Node.js" />
          <Badge title="VS Code" />
          <Badge title="Teams" />
          <Badge title="Discord" />
        </div>
        <h2>{lang.skills[5]}</h2>
        <div className="badges-skills" style={{margin: 0}}>
          <Badge title={lang.skills[6]} />
          <Badge title="B2 level" />
        </div>
    </div>
  )
}
