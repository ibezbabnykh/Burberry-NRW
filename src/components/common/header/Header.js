import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="center-holder">
        <Link to="/" className="logo">TVMaze</Link>
      </div>
    </header>
  );
}

export default Header;