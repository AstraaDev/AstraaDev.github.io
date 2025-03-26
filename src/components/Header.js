import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/tutorials">Tutorials</Link></li>
          <li><Link to="/discord">Discord</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
