import React from 'react';
import Card from '../components/Card';
import InfoCard from '../components/InfoCard';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const projects = [
    'AstraaDev/Discord-All-Tools-In-One',
    'AstraaDev/FarmMergeValley-Injector',
    'AstraaDev/Discord-SelfBot',
    'AstraaDev/Discord-OAuth2',
    'twip4/GameBoy',
  ];

  return (
    <div className="home">
      <div className="left-section">
        <Card username="a5traa" tagline="Unix Lover" />
        <InfoCard />
        <TechStack />
      </div>
      <div className="right-section">
        <div className="projects-container">
          <h2>Featured Projects</h2>
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
