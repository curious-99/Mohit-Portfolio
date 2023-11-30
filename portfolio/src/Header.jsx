// src/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navigation container">
      <div className="nav-brand">
        <strong><Link style={{ color: 'white', textDecoration: 'none' }} to="/">iAmDeveloper</Link></strong>
      </div>
      <ul className="list-non-bullet nav-pills">
        <li className="list-item-inline">
          <Link className="link" to="/">Home</Link>
        </li>
        <li className="list-item-inline">
          <Link className="link" to="/projects">Projects</Link>
        </li>
        <li className="list-item-inline">
          <Link className="link" to="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
