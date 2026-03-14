import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Aditya<span>.</span></Link>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li 
            className="dropdown-container"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="explore-trigger">Explore ▾</span>
            
            {isDropdownOpen && (
              <ul className="dropdown-menu glass">
                <li><Link to="/skills" onClick={() => setIsDropdownOpen(false)}>Skills</Link></li>
                <li><Link to="/education" onClick={() => setIsDropdownOpen(false)}>Education</Link></li>
                <li><Link to="/experience" onClick={() => setIsDropdownOpen(false)}>Experience</Link></li>
                <li><Link to="/achievements" onClick={() => setIsDropdownOpen(false)}>Achievements</Link></li>
                <li><Link to="/learning" onClick={() => setIsDropdownOpen(false)}>Current Focus</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 100;
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
        }

        .logo a {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .logo span {
          color: var(--accent-light);
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a, .explore-trigger {
          font-size: 1.1rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
          color: #fff;
          cursor: pointer;
        }

        .nav-links a:hover, .explore-trigger:hover {
          color: var(--accent-light);
        }

        .nav-links a::after, .explore-trigger::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent-light);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after, .explore-trigger:hover::after {
          width: 100%;
        }

        .dropdown-container {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 20px);
          right: -20px;
          width: 200px;
          background: rgba(15, 15, 20, 0.85); /* Dark solid glass */
          border: 1px solid var(--border-color);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          padding: 10px 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          animation: slideDown 0.2s ease forwards;
        }

        /* Invisible bridge to prevent hover loss over the gap */
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          width: 100%;
          height: 20px;
        }

        .dropdown-menu li {
          list-style: none;
        }

        .dropdown-menu a {
          display: block;
          padding: 10px 20px;
          font-size: 1rem;
          color: #cccccc;
        }

        .dropdown-menu a::after {
          display: none; /* Hide bottom border on dropdown items */
        }

        .dropdown-menu a:hover {
          background: rgba(255,255,255,0.05);
          color: var(--accent-light);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
