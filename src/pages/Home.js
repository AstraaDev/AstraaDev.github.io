import React from 'react';
import Card from '../components/Card';
import InfoCard from '../components/InfoCard';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import EducationCard from '../components/EducationCard';
import './Home.css';

const Home = () => {
  const projects = [
    'AstraaDev/Discord-All-Tools-In-One',
    'AstraaDev/FarmMergeValley-Injector',
    'AstraaDev/Discord-SelfBot',
    'AstraaDev/Discord-OAuth2',
    'twip4/GameBoy',
  ];

  const educations = [
    { degree: 'Computer Engineering Student in Cybersecurity', institution: '@ EPITA Paris', from: '', to: '' },
  ];

  return (
    <div className="home">
      <div className="left-section">
        <Card username="a5traa" tagline="Unix Lover" />
        <InfoCard />
        <TechStack />
        <EducationCard educations={educations} />
      </div>
      <div className="right-section">
        <div className="projects-container">
          <h2>Github Projects</h2>
          <div className="projects-grid">
            {projects.map((repo, index) => (
              <ProjectCard key={index} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
