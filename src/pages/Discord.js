import React, { useEffect } from 'react';
import './Discord.css';

const Discord = () => {
  useEffect(() => {
    window.location.href = 'https://discord.gg/cA5cUXQTCG';
  }, []);

  return (
    <div className="discord-page">
      <div className="discord-content">
        <h1>Join Our Discord Community</h1>
        <p>If you are not redirected automatically, follow this link: <a href="https://discord.gg/cA5cUXQTCG">Discord Server</a></p>
        <div className="discord-details">
          <h2>What to Expect</h2>
          <ul>
            <li>A welcoming community of developers and enthusiasts.</li>
            <li>Channels dedicated to various programming languages and technologies.</li>
            <li>Regular events and discussions on the latest tech trends.</li>
            <li>Support and collaboration opportunities.</li>
          </ul>
        </div>
        <div className="discord-widget">
          <iframe
            src="https://discord.com/widget?id=1352258243098968134&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Discord;
