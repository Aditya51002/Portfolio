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
                <li><Link to="/achievements">ACHIEVEMENTS</Link></li>
                <li><Link to="/learning">LEARNING</Link></li>
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

        .dropdown-container {
          position: relative;
        }

        .dropdown-menu-comic {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border: 4px solid #000;
          box-shadow: 8px 8px 0 #000;
          padding: 10px 0;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          animation: dropDownPop 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes dropDownPop {
          0% { transform: translateX(-50%) translateY(-10px) scale(0.9); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
        }

        .dropdown-menu-comic li {
          list-style: none;
        }

        .dropdown-menu-comic a {
          padding: 12px 25px;
          display: block;
          font-size: 1.2rem;
          color: #000;
          text-decoration: none;
          transition: 0.2s;
          border-left: 0 solid var(--accent);
        }

        .dropdown-menu-comic a:hover {
          background: #000;
          color: #fff;
          border-left: 10px solid var(--accent);
          padding-left: 30px;
        }

        /* SFX pointer for dropdown */
        .dropdown-menu-comic::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 12px solid #000;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
