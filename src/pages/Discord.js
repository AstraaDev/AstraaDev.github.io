import React, { useEffect } from 'react';

const Discord = () => {
  useEffect(() => {
    window.location.href = 'https://discord.gg/cA5cUXQTCG';
  }, []);

  return (
    <div>
      <p>If you are not redirected automatically, follow this link: <a href="https://discord.gg/cA5cUXQTCG">Discord Server</a></p>
    </div>
  );
};

export default Discord;
