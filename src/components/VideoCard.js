import React, { useEffect, useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const videoId = videoUrl.split('v=')[1].split('&')[0];
    const fetchVideoData = async () => {
      try {
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        if (!apiKey) {
          throw new Error('API key is not defined');
        }
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideoData(data.items[0]);
        } else {
          setError('No video data found');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVideoData();
  }, [videoUrl]);

  if (error) {
    return <div className="video-card">Error: {error}</div>;
  }

  if (!videoData) {
    return <div className="video-card">Loading...</div>;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoData.id}`;

  return (
    <div className="video-card">
      <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videoData.snippet.title}
        ></iframe>
      </div>
      <div className="video-details">
        <h3>{videoData.snippet.title}</h3>
        <p>{videoData.snippet.description.split('\n').map((line, index) => (
          <span key={index}>{line}<br /></span>
        ))}</p>
        <div className="video-stats">
          <span>👀 {videoData.statistics.viewCount}</span>
          <span>👍 {videoData.statistics.likeCount}</span>
        </div>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="watch-button">
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
