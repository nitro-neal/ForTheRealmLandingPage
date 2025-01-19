import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Logo will be added later */}
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#media">Media</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="buy-button">Buy Now</button>
      </div>
    </header>
  );
}

export default Header; 