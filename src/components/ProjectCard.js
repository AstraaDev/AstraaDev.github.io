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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  if (!repoData) {
    return <div className="project-card">Loading...</div>;
  }

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{'@' + repoData.full_name}</h3>
        <a href={repoData.html_url} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
      </div>
      <p>{repoData.description}</p>
      <div className="project-stats">
        <span>⭐ {repoData.stargazers_count}</span>
        <span>🍽️ {repoData.forks_count}</span>
        <span>🕒 Last update: {formatDate(repoData.updated_at)}</span>
        <span>🔧 {repoData.language || 'Unknown'}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
