import React from 'react';
import './Card.css';
import avatar from '../assets/astraadev.png';

const Card = ({ username, tagline }) => {
  return (
    <div className="card">
      <img src={avatar} alt="Profile Picture" className="avatar" />
      <div className="username">{username}</div>
      <div className="tagline">{tagline}</div>
    </div>
  );
};

export default Card;
