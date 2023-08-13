import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectCaraousel.css'; // Create this CSS file for additional styling
import project1Image from '../assets/images/projects/project1.jpg';
import project2Image from '../assets/images/projects/project2.jpg';

const projectData = [
  {
    title: 'Project 1',
    image: project1Image,
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    image: project2Image,
    link: 'https://example.com/project2',
  },
  // Add more project data as needed
];

const ProjectCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">PROJECTS</h2>
      <Carousel showThumbs={false} infiniteLoop={true}>
        {projectData.map((project, index) => (
          <div key={index} className="carousel-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <p>{project.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
