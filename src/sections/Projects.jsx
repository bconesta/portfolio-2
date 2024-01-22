import Card from '../components/Card'
import CardsCarousel from '../components/CardsCarousel/CardsCarousel'

export default function Projects(props) {
  
  const lang = props.lang;

  return (
    <div style={{margin : '0 0 0 50px'}} className="projects-container" >
      <h1>{lang.projects.tittle}</h1>
      <h2>{lang.projects.featured}</h2>
      <CardsCarousel projects={lang.projects.list}/>
    </div>
  )
}
