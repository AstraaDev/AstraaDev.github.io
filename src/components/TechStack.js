import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const techs = [
    'C', 'C++', 'Assembly', 'Python', 'JavaScript', 'Java', 'Shell',
    'Git', 'Docker', 'MySQL', 'PostgreSQL', 'PHP', 'React.js', 'Node.js'
  ];

  return (
    <div className="tech-stack">
      <strong>Tech Stack</strong>
      <div className="tech-list">
        {techs.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
