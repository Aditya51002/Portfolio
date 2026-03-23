import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar-comic">
      <div className="nav-container">
        <div className="logo-comic">
          <Link to="/">ADITYA MAURYA</Link>
        </div>
        
        <ul className="nav-links-comic">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li 
            className="dropdown-container"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="explore-trigger">EXPLORE ▾</span>
            
            {isDropdownOpen && (
              <ul className="dropdown-menu-comic">
                <li><Link to="/skills">SKILLS</Link></li>
                <li><Link to="/education">EDUCATION</Link></li>
                <li><Link to="/experience">EXPERIENCE</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <style>{`
        .navbar-comic {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fff;
          border-bottom: 4px solid #000;
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

        .logo-comic a {
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          color: #000;
          letter-spacing: 2px;
        }

        .nav-links-comic {
          display: flex;
          gap: 30px;
          font-family: 'Bangers', cursive;
        }

        .nav-links-comic a, .explore-trigger {
          font-size: 1.25rem;
          color: #000;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .nav-links-comic a:hover, .explore-trigger:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }

        .dropdown-menu-comic {
          position: absolute;
          top: 100%;
          right: 0;
          background: #fff;
          border: 3px solid #000;
          box-shadow: 6px 6px 0 #000;
          padding: 10px 0;
          min-width: 180px;
        }

        .dropdown-menu-comic li {
          list-style: none;
        }

        .dropdown-menu-comic a {
          padding: 10px 20px;
          display: block;
          font-size: 1.1rem;
        }

        .dropdown-menu-comic a:hover {
          background: #f0f0f0;
          color: var(--accent);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
