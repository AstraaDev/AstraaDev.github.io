import React from 'react';
import './EducationCard.css';

const EducationCard = ({ educations }) => {
  return (
    <div className="education-card">
      <h2>Education</h2>
      {educations.map((education, index) => (
        <div key={index} className="education-item">
          <span className="education-bullet">•</span>
          <div className="education-details">
            <p className="education-dates">{education.from || 'undefined'} - {education.to || 'undefined'}</p>
            <strong className="education-degree">{education.degree}</strong>
            <p className="education-institution">{education.institution}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
