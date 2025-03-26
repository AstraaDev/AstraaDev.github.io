import React, { useEffect, useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ repo }) => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      const response = await fetch(`https://api.github.com/repos/${repo}`);
      const data = await response.json();
      setRepoData(data);
    };

    fetchRepoData();
  }, [repo]);

  if (!repoData) {
    return <div className="project-card">Loading...</div>;
  }

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{repoData.name}</h3>
        <a href={repoData.html_url} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
      </div>
      <p>{repoData.description}</p>
      <div className="project-stats">
        <span>⭐ {repoData.stargazers_count}</span>
        <span>🍽️ {repoData.forks_count}</span>
        <span>🔧 {repoData.language || 'Unknown'}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
