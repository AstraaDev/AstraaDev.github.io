import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className="info-card">
      <div><span className="icon">📍</span><strong>Based in:</strong> <span>France</span></div>
      <div><span className="icon">🔗</span><strong>GitHub:</strong> <a href="https://github.com/AstraaDev">AstraaDev</a></div>
      <div><span className="icon">📧</span><strong>Email:</strong> <a href="mailto:astraa.contact@gmail.com?subject=Hello AstraaDev">astraa.contact@gmail.com</a></div>
    </div>
  );
};

export default InfoCard;
