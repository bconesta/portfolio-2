import { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';

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
        <h1>HOLA</h1>
      </div>
      <div className="page" id="about">
        
      </div>
      <div className="page" id="projects">
        
      </div>
      <div className="page" id="education">
        
      </div>
      <div className="page" id="contact">
        
      </div>
    </div>
  );
}
