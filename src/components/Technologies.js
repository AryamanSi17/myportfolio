import React from 'react';
import './Technologies.css'; // Update the path to your CSS file
import html5Icon from '../assets/icons/html-5.png';
import css3Icon from '../assets/icons/css-3.png';
import jsIcon from '../assets/icons/js.png';
import atomIcon from '../assets/icons/atom.png';
import nodeJSIcon from '../assets/icons/nodejs.png';
import expressJSIcon from '../assets/icons/expressjs.png';
import nginxIcon from '../assets/icons/nginx.png'
import npmIcon from '../assets/icons/outline.png'
import BootstrapIcon from '../assets/icons/bootstrap.png'
import TailwindIcon from '../assets/icons/tailwind.png'
import GitIcon from '../assets/icons/git.png'
import LinuxIcon from '../assets/icons/linux.png'
import DockerIcon from '../assets/icons/docker.png'
import mongodbIcon from '../assets/icons/mongodb.png'
const technologies = [
  { name: 'HTML', icon: html5Icon },
  { name: 'CSS', icon: css3Icon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: atomIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Node.js', icon: nodeJSIcon },
  { name: 'Express.js', icon: expressJSIcon },
  { name: 'Nginx', icon: nginxIcon },
  { name: 'NPM', icon: npmIcon },
  { name: 'Bootstrap', icon: BootstrapIcon },
  { name: 'Tailwind', icon: TailwindIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Linux', icon: LinuxIcon },
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
