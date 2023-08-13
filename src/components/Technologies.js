import React from 'react';
import './Technologies.css'; // Update the path to your CSS file
import html5Icon from '../assets/icons/html-5.png';
import css3Icon from '../assets/icons/css-3.png';
import jsIcon from '../assets/icons/js.png';
import atomIcon from '../assets/icons/atom.png';
import nodeJSIcon from '../assets/icons/nodejs.png';
import expressJSIcon from '../assets/icons/expressjs.png';
const technologies = [
  { name: 'HTML', icon: html5Icon },
  { name: 'CSS', icon: css3Icon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: atomIcon },
  { name: 'Node.js', icon: nodeJSIcon },
  { name: 'Express.js', icon: expressJSIcon },
  // Add more technologies as needed
];

const Technologies = () => {
    return (
      <div className="technologies-container">
        <h1 className="technologies-heading">TECHNOLOGIES</h1>
        <div className="technologies-list">
          {technologies.map((tech, index) => (
            <div key={index} className="technology">
              <img src={tech.icon} alt={tech.name} className="icon" />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Technologies;
