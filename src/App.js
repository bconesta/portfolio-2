import './App.scss';
import Navbar from './components/Navbar';
import Bruno from './sections/Bruno';
import About from './sections/About';
import Skills from './sections/Skills'
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

import Language from './language.json'

export default function App() {
  
  const lang = window.navigator.language[0] === "e" && window.navigator.language[1] === "s" ? Language["es"] : Language["en"];

  return (
    <div className="App">
      <Navbar className="navbar" lang={lang} />
      <div className="page initial" id="bruno">
        <Bruno lang={lang} />
      </div>
      <div className="page" id="about">
        <About lang={lang} /> 
      </div>
      <div className="page" id="skills">
        <Skills lang={lang} />
      </div>
      <div className="page" id="projects">
        <Projects lang={lang} />
      </div>
      {
        /*<div className="page" id="education">
        <Education />
        </div>*/
      }
      <div className="page" id="contact">
        <Contact lang={lang} />
      </div>
    </div>
  );
}
