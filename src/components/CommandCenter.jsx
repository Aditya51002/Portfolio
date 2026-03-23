import React from 'react';
import { motion } from 'framer-motion';

const CommandCenter = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Aditya51002', icon: '⚡' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/aditya-maurya', icon: '🔗' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Mail', url: 'mailto:contact@adityamaurya.com', icon: '✉️' }
  ];

  return (
    <motion.div 
      className="command-center-dock glass"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {/* Live Status Section */}
      <div className="status-section">
        <div className="status-indicator">
          <span className="pulse"></span>
          <span className="status-text">CURRENT FOCUS</span>
        </div>
        <div className="status-value">Architecting Scalable Systems & O(1) Performance</div>
      </div>

      <div className="divider"></div>

      {/* Social Links Section */}
      <div className="links-section">
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            title={link.name}
          >
            <span className="icon">{link.icon}</span>
          </motion.a>
        ))}
      </div>

      <div className="divider"></div>

      {/* Resume Portal */}
      <div className="resume-section">
        <motion.button 
          className="resume-download-btn"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--accent-glow)' }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-icon">📄</span>
          <span className="btn-label">Get Resume</span>
          <span className="file-info">PDF • 240KB</span>
        </motion.button>
      </div>

      <style>{`
        .command-center-dock {
          display: flex;
          align-items: center;
          padding: 15px 30px;
          gap: 30px;
          border: 3px solid #000;
          background: #fff;
          box-shadow: 6px 6px 0 #000;
          margin-top: 30px;
          max-width: fit-content;
          background-image: radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 6px 6px;
        }

        .status-section {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse {
          width: 10px;
          height: 10px;
          background: var(--accent);
          border: 2px solid #000;
          border-radius: 50%;
          animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        .status-text {
          font-family: 'Bangers', cursive;
          font-size: 0.9rem;
          color: #000;
          letter-spacing: 1px;
        }

        .status-value {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.95rem;
          color: #333;
        }

        .divider {
          width: 3px;
          height: 40px;
          background: #000;
        }

        .links-section {
          display: flex;
          gap: 15px;
        }

        .social-btn {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #000;
          background: #fff;
          box-shadow: 3px 3px 0 #000;
          transition: all 0.2s;
          font-size: 1.5rem;
          text-decoration: none;
        }

        .social-btn:hover {
          transform: translate(-1px, -1px);
          box-shadow: 5px 5px 0 var(--accent);
        }

        .resume-section {
          display: flex;
          align-items: center;
        }

        .resume-download-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 25px;
          background: var(--accent);
          border: 3px solid #000;
          box-shadow: 4px 4px 0 #000;
          color: #fff;
          font-family: 'Bangers', cursive;
          cursor: pointer;
          transition: all 0.2s;
        }

        .resume-download-btn:hover {
          transform: translate(-1px, -1px);
          box-shadow: 6px 6px 0 #000;
        }

        .btn-label {
          font-weight: 300;
          font-size: 1.2rem;
          letter-spacing: 1px;
        }

        .file-info {
          font-size: 0.8rem;
          background: #000;
          color: #fff;
          padding: 2px 8px;
        }

        @media (max-width: 900px) {
          .command-center-dock {
            flex-direction: column;
            align-items: flex-start;
            max-width: 100%;
            width: 100%;
            gap: 20px;
          }
          .divider {
            width: 100%;
            height: 3px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CommandCenter;
