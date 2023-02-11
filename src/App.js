import './App.scss';
import Navbar from './components/Navbar';
import Bruno from './sections/Bruno';
import About from './sections/About';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <div className="page initial" id="bruno">
        <Bruno />
      </div>
      <div className="page" id="about">
        <About /> 
      </div>
      <div className="page" id="projects">
        <Projects />
      </div>
      <div className="page" id="education">
        <Education />
      </div>
      <div className="page" id="contact">
        <Contact />
      </div>
    </div>
  );
}
