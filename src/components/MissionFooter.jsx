import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const MissionFooter = () => {
  const location = useLocation();
  const path = location.pathname;

  // Configuration for each page's footer content
  const footerConfigs = {
    '/': {
      label: 'INITIAL MISSION LOG COMPLETE',
      nextText: 'EXPLORE MY PROJECTS',
      nextPath: '/projects',
      sfx: 'WHAM!'
    },
    '/skills': {
      label: 'ARSENAL ANALYSIS COMPLETE',
      nextText: 'VIEW FIELD EXPERIENCE',
      nextPath: '/experience',
      sfx: 'CLICK!'
    },
    '/education': {
      label: 'ACADEMIC RECORDS VERIFIED',
      nextText: 'SEE CERTIFICATIONS',
      nextPath: '/achievements',
      sfx: 'STAMP!'
    },
    '/experience': {
      label: 'BATTLE HISTORY ARCHIVED',
      nextText: 'VIEW EDUCATION',
      nextPath: '/education',
      sfx: 'SWOOSH!'
    },
    '/achievements': {
      label: 'TROPHY ROOM EXPANDED',
      nextText: 'SEE ONGOING LEARNING',
      nextPath: '/learning',
      sfx: 'BING!'
    },
    '/learning': {
      label: 'ROADMAP PROTOCOLS ACTIVE',
      nextText: 'ESTABLISH CONTACT',
      nextPath: '/contact',
      sfx: 'ZAP!'
    },
    '/contact': {
      label: 'COMMUNICATION CHANNEL OPEN',
      nextText: 'RETURN TO COMMAND CENTER',
      nextPath: '/',
      sfx: 'VWOOM!'
    }
  };

  const config = footerConfigs[path];

  // Don't render if it's the projects page or if no config exists
  if (path === '/projects' || !config) {
    return null;
  }

  return (
    <footer className="mission-footer-comic">
      <div className="footer-panel-manga">
        <div className="footer-label-comic">{config.label}</div>
        <div className="footer-sfx">{config.sfx}</div>
        
        <div className="footer-content-comic">
          <Link to={config.nextPath} className="next-mission-btn">
            <span className="btn-label">NEXT MISSION</span>
            <span className="btn-text">{config.nextText} ➔</span>
          </Link>
        </div>
      </div>

      <style>{`
        .mission-footer-comic {
          width: 100%;
          max-width: 1200px;
          margin: 100px auto 40px;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .footer-panel-manga {
          width: 100%;
          border: 4px solid #000;
          background: #fff;
          padding: 40px 60px;
          position: relative;
          box-shadow: 12px 12px 0 rgba(0,0,0,0.1);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .footer-label-comic {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: #fff;
          padding: 4px 25px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          letter-spacing: 2px;
          border: 3px solid #fff;
        }

        .footer-sfx {
          position: absolute;
          top: 10px;
          right: 20px;
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: rgba(0,0,0,0.05);
          transform: rotate(15deg);
          pointer-events: none;
        }

        .next-mission-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          gap: 5px;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .next-mission-btn .btn-label {
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          font-size: 0.9rem;
          color: var(--accent);
          letter-spacing: 2px;
        }

        .next-mission-btn .btn-text {
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: #000;
          transition: 0.2s;
        }

        .next-mission-btn:hover {
          transform: scale(1.05);
        }

        .next-mission-btn:hover .btn-text {
          color: var(--accent);
          text-shadow: 4px 4px 0 #000;
        }

        @media (max-width: 768px) {
          .next-mission-btn .btn-text { font-size: 1.8rem; }
          .footer-panel-manga { padding: 30px; }
        }
      `}</style>
    </footer>
  );
};

export default MissionFooter;
