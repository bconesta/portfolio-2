import NextBadge from './badges/nextjs.svg'
import ReactBadge from './badges/react.png'
import AngularBadge from './badges/angular.png'
import IonicBadge from './badges/ionic.png'
import TypeBadge from './badges/typescript.png'
import JSBadge from './badges/js.png'
import SassBadge from './badges/sass.png'
import HtmlBadge from './badges/html.png'
import CSSBadge from './badges/css.png'
import PythonBadge from './badges/python.png'
import CPPBadge from './badges/cpp.png'
import BootstrapBadge from './badges/bootstrap.png'
import JiraBadge from './badges/jira.png'
import VSCodeBadge from './badges/vscode.png'
import DiscordBadge from './badges/discord.png'
import TeamsBadge from './badges/teams.png'
import GitBadge from './badges/git.png'
import NodeBadge from './badges/node.png'
import SpanishBadge from './badges/spanish.jpg'
import EnglishBadge from './badges/english.jpg'
import MongoBadge from './badges/mongodb.svg'
import MySQLBadge from './badges/mysql.png'
import FirebaseBadge from './badges/firebase.png'
import VercelBadge from './badges/vercel.png'
import OpenAIBadge from './badges/openai.png'

export default function Badge({ title, color, iconOnly=false }) {
  const badge = 
  title === 'HTML5' ? HtmlBadge :
  title === 'CSS3' ? CSSBadge :
  title === 'JavaScript' ? JSBadge :
  title === 'TypeScript' ? TypeBadge :
  title === 'C++' ? CPPBadge :
  title === 'Python' ? PythonBadge :
  title === 'Next.js' ? NextBadge :
  title === 'React' ? ReactBadge :
  title === 'Angular' ? AngularBadge :
  title === 'Node.js' ? NodeBadge : 
  title === 'Ionic' ? IonicBadge : 
  title === 'SASS' ? SassBadge :
  title === 'Bootstrap' ? BootstrapBadge :
  title === 'MongoDB' ? MongoBadge : 
  title === 'MySQL' ? MySQLBadge :
  title === 'Firebase' ? FirebaseBadge :
  title === 'Jira' ? JiraBadge :
  title === 'Git' ? GitBadge :
  title === 'VS Code' ? VSCodeBadge :
  title === 'Teams' ? TeamsBadge :
  title === 'Discord' ? DiscordBadge :
  title === 'Nativo' ? SpanishBadge : 
  title === 'B2 level' ? EnglishBadge :
  title === 'OpenAI' ? OpenAIBadge :
  title === 'Vercel' ? VercelBadge : ''

  const styles = {
    div:{
      color: color,
      height: '35px',
      backgroundColor: '#ccccf8',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '5px',
      padding: '2px 5px'
    },
    img:{
      height: '80%',
      display: 'inline-block',
      marginRight: '3px'
    },
    p:{
      fontWeight: 'bold'
    },
    imgOnly:{
      width: '28px',
      padding: '7px',
      marginRight: '5px',
      borderRadius: '5px',
      backgroundColor: '#ccccf8'
    }
  }
  return !iconOnly ? (
    <div style={styles.div} className='skill-badge'>
      <img src={badge} style={styles.img} alt='badge' />
      <p style={styles.p}>{title}</p>
    </div>
  ) : (
    <img src={badge} style={styles.imgOnly} alt='badge' title={title}/>
  )
}
