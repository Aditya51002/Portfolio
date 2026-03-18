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
          padding: 12px 24px;
          gap: 24px;
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          margin-top: 30px;
          max-width: fit-content;
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
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          box-shadow: 0 0 10px #4ade80;
          animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }

        .status-text {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-light);
          letter-spacing: 1px;
        }

        .status-value {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 400;
        }

        .divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        .links-section {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          font-size: 1.2rem;
          text-decoration: none;
        }

        .resume-section {
          display: flex;
          align-items: center;
        }

        .resume-download-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          border: none;
          border-radius: 16px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-label {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .file-info {
          font-size: 0.7rem;
          opacity: 0.7;
          background: rgba(0, 0, 0, 0.2);
          padding: 2px 6px;
          border-radius: 6px;
        }

        @media (max-width: 900px) {
          .command-center-dock {
            flex-direction: column;
            align-items: flex-start;
            max-width: 100%;
            width: 100%;
            gap: 16px;
          }
          .divider {
            width: 100%;
            height: 1px;
          }
          .status-section, .links-section, .resume-section {
             width: 100%;
          }
          .links-section {
            justify-content: space-between;
          }
          .resume-download-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CommandCenter;
