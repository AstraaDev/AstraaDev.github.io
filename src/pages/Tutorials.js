import React from 'react';
import VideoCard from '../components/VideoCard';
import './Tutorials.css';

const Tutorials = () => {
  const videos = [
    'https://www.youtube.com/watch?v=S8-p0E-sX6g',
  ];

  return (
    <div className="tutorials">
      <div className="tutorials-container">
        <h2>Featured Tutorials</h2>
        <div className="videos-grid">
          {videos.map((videoUrl, index) => (
            <VideoCard key={index} videoUrl={videoUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
