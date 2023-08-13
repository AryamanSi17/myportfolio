import React from 'react';
import { Element } from 'react-scroll'; 
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Technologies from './components/Technologies';
import ProjectCaraousel from './components/ProjectCaraousel';
import Education from './components/Education';

// ... other imports

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileCard />
      <Technologies />
    {/* Use Element to define the section for Project.js */}
      <Element name="projects" className="element">
        <ProjectCaraousel />
      </Element>
      {/* ... other components */}
      <Education />
    </div>
  );
}

export default App;
