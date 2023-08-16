// App.js
import React from 'react';
import { Element } from 'react-scroll'; 
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Technologies from './components/Technologies';
import ProjectCaraousel from './components/ProjectCaraousel';
import Education from './components/Education';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileCard />
      <Technologies />
      <Element name="projects" className="element">
        <ProjectCaraousel />
      </Element>
      <Education />
      <Element name="contact" className="element">
      <Contact />
      </Element>
    </div>
  );
}

export default App;
