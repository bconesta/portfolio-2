import { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Bruno from './sections/Bruno';
import About from './sections/About';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {

  useEffect(()=>{
    document.querySelectorAll('.page').forEach((page) =>{
      console.log(page);
      page.addEventListener("click", () =>{
        document.querySelector("#" + page.id + "-nav").class = "selected";
        console.log(document.querySelector("#" + page.id + "-nav"))
      }, false)
    })
  }, [])
  

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
