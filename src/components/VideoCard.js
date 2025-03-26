import React, { useEffect, useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const videoId = videoUrl.split('v=')[1].split('&')[0];
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch video data');
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

  return (
    <div className="video-card">
      <iframe
        width="100%"
        height="200"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={videoData.snippet.title}
      ></iframe>
      <h3>{videoData.snippet.title}</h3>
      <p>{videoData.snippet.description}</p>
      <div className="video-stats">
        <span>👀 {videoData.statistics.viewCount}</span>
        <span>👍 {videoData.statistics.likeCount}</span>
      </div>
    </div>
  );
};

export default VideoCard;
