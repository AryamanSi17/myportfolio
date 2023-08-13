import React from 'react';
import './Education.css';
import icon1 from '../assets/images/eduicons/icon1.jpg';
import icon2 from '../assets/images/eduicons/icon2.jpg';
import icon3 from '../assets/images/eduicons/icon3.jpg';
const educationData = [
    {
      title: 'Class 10th',
      school: 'Little Flower School, Gorakhpur',
      result: '92 %',
    },
    {
      title: 'Class 12th',
      school: 'Aatmdeep Vidyalyaya',
      result: '90 %',
    },
    {
      title: 'College',
      school: 'Dr.BR Ambedkar National Institute of Technology',
      result: '7.71 CGPA',
    },
    // Add more education data as needed
  ];
  
  const icons = [icon1, icon2, icon3];

  const EducationComponent = () => {
      return (
        <div className="education-container">
           <h2 className="education-heading">EDUCATION</h2>
          {educationData.map((education, index) => (
            <div key={index} className={`education-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3>{education.title}</h3>
              <div className="school-info">
                <img src={icons[index]} alt="School Icon" className="school-icon" />
                <p>{education.school}</p>
              </div>
              <p>{education.result}</p>
            </div>
          ))}
        </div>
      );
  };
  
  
  export default EducationComponent;
  