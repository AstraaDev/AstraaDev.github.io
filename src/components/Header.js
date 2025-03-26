import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li className="nav-item"><Link to="/tutorials" className="nav-link">Tutorials</Link></li>
          <li className="nav-item"><Link to="/discord" className="nav-link">Discord</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
