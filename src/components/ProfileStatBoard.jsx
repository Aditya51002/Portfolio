import React from 'react';
import { motion } from 'framer-motion';

const ProfileStatBoard = () => {
  const stats = [
    { label: 'HP (PERFORMANCE)', value: 98, color: '#ff0033' },
    { label: 'MP (CREATIVITY)', value: 99, color: '#00ccff' },
    { label: 'STR (SYSTEM DESIGN)', value: 95, color: '#ffcc00' },
    { label: 'INT (LOGIC)', value: 100, color: '#9933ff' },
    { label: 'AGI (DEPLOYMENT)', value: 92, color: '#00ff66' },
  ];

  return (
    <div className="stat-board-manga">
      <div className="status-header-comic">
        <div className="status-label">STATUS PANEL</div>
        <div className="level-badge">LVL 99</div>
      </div>

      <div className="profile-hero-section">
        <div className="avatar-frame">
          <img 
            src="/hero_manga.png" 
            alt="Aditya Maurya Avatar" 
            className="manga-avatar-img" 
          />
          <div className="glitch-overlay"></div>
        </div>
        <div className="class-badge">CLASS: SYSTEM ARCHITECT</div>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={stat.label} className="stat-row">
            <div className="stat-label-text">{stat.label}</div>
            <div className="stat-bar-bg">
              <motion.div 
                className="stat-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${stat.value}%` }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                style={{ backgroundColor: stat.color }}
              />
            </div>
            <div className="stat-value-text">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="special-skills-manga">
        <div className="skills-badge">SPECIAL SKILLS ACTIVE</div>
        <div className="skills-list-mini">
          <span>{`{ MERN_SORCERY }`}</span>
          <span>{`{ SDET_MASTERY }`}</span>
          <span>{`{ KOTLIN_BLADE }`}</span>
        </div>
      </div>

      <style>{`
        .stat-board-manga {
          width: 100%;
          background: #fff;
          border: 6px solid #000;
          padding: 25px;
          position: relative;
          box-shadow: 12px 12px 0 #000;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .status-header-comic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 4px solid #000;
          padding-bottom: 10px;
        }

        .status-label {
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          color: #000;
          letter-spacing: 2px;
        }

        .level-badge {
          background: #000;
          color: #fff;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          padding: 2px 12px;
          transform: skew(-10deg);
        }

        .profile-hero-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .avatar-frame {
          width: 100px;
          height: 100px;
          border: 4px solid #000;
          background: #eee;
          position: relative;
          overflow: hidden;
        }

        .manga-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1);
        }

        .class-badge {
          font-family: 'Bangers', cursive;
          font-size: 1.3rem;
          color: var(--accent);
          text-transform: uppercase;
        }

        .stats-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stat-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .stat-label-text {
          width: 140px;
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          font-size: 0.8rem;
          color: #555;
        }

        .stat-bar-bg {
          flex: 1;
          height: 12px;
          background: #eee;
          border: 2px solid #000;
          position: relative;
        }

        .stat-bar-fill {
          height: 100%;
          border-right: 2px solid #000;
        }

        .stat-value-text {
          width: 30px;
          font-family: 'Bangers', cursive;
          font-size: 1rem;
          text-align: right;
        }

        .special-skills-manga {
          border-top: 4px solid #000;
          padding-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skills-badge {
          font-family: 'Bangers', cursive;
          font-size: 1rem;
          color: #fff;
          background: #000;
          padding: 2px 10px;
          width: fit-content;
        }

        .skills-list-mini {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-family: 'Courier New', monospace;
          font-weight: 900;
          font-size: 0.85rem;
          color: var(--accent);
        }
      `}</style>
    </div>
  );
};

export default ProfileStatBoard;
