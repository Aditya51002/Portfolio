import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import WheelDial from '../components/WheelDial';
import CommandCenter from '../components/CommandCenter';
import AboutSection from '../components/AboutSection';
import SystemShowcase from '../components/SystemShowcase';
import ProfileStatBoard from '../components/ProfileStatBoard';

const Landing = () => {
  const [showWheel, setShowWheel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showWheel) {
      setShowWheel(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Framer motion variants for orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // cascades animations nicely
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="landing-scroll-container">
      <div className="landing-page-manga">
        <div className="landing-content">
          <motion.div 
            className="hero-manga-panel"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <div className="sfx-text" style={{ top: '-35px', left: '-50px', transform: 'rotate(-12deg)', fontSize: '3.5rem' }}>WHOOSH!</div>
            
            <div className="hero-text-side">
              <motion.div variants={itemVariants} className="hero-badge-comic">
                AVAILABLE FOR HIRE
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="hero-title">
                ADITYA <br />
                MAURYA
              </motion.h1>

              <motion.h2 variants={itemVariants} className="hero-subtitle">
                WEB DEVELOPER • SOFTWARE ENGINEER • ANDROID DEVELOPER
              </motion.h2>

              <motion.p variants={itemVariants} className="hero-description">
                ARCHITECTING HIGH-PERFORMANCE SYSTEMS AND CREATIVE AI INTEGRATIONS. OBSESSED WITH CLEAN CODE AND IMPACTFUL EXPERIENCES.
              </motion.p>

              <motion.div variants={itemVariants} style={{ marginTop: '20px' }}>
                <CommandCenter />
              </motion.div>

              <motion.div variants={itemVariants} className="hero-actions">
                <button 
                  className="interactive-explore-btn-comic" 
                  onClick={() => setShowWheel(true)}
                >
                  EXPLORE PORTFOLIO →
                </button>
              </motion.div>
            </div>

            <div className="hero-image-side">
              <motion.div 
                className="portrait-panel"
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <img src="/hero_manga.png" alt="Aditya Maurya Manga Portrait" className="hero-profile-img" />
                <div className="stat-board-overlay">
                  <ProfileStatBoard />
                </div>
                <div className="caption-box">DEVELOPER / ARCHITECT</div>
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* Wheel Overlay */}
        {showWheel && (
          <motion.div 
            className="wheel-overlay-comic" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWheel(false)}
          >
            <div className="wheel-wrapper" onClick={(e) => e.stopPropagation()}>
              <WheelDial onClose={() => setShowWheel(false)} />
              <button className="close-wheel-btn" onClick={() => setShowWheel(false)}>×</button>
            </div>
          </motion.div>
        )}
      </div>

      {/* About Section extracted from About page */}
      <AboutSection />

      {/* Engineering Excellence Status Board / Icon Cards */}
      <SystemShowcase />

      <style>{`
        .landing-scroll-container {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          background: var(--bg-primary);
        }

        .landing-page-manga {
          width: 100%;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
        }

        .hero-manga-panel {
          background: #fff;
          border: 4px solid #000;
          box-shadow: 15px 15px 0 rgba(0,0,0,0.15);
          display: flex;
          align-items: stretch;
          gap: 0;
          position: relative;
          overflow: visible;
        }

        .hero-text-side {
          flex: 1.2;
          padding: 60px;
          border-right: 4px solid #000;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background-image: radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 8px 8px;
        }

        .hero-badge-comic {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 5px 15px;
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
          transform: rotate(-2deg);
          width: fit-content;
        }

        .hero-title {
          font-size: 6rem;
          line-height: 0.9;
          color: #000;
          -webkit-text-stroke: 1px #000;
          text-shadow: 6px 6px 0 rgba(0,0,0,0.05);
        }

        .hero-subtitle {
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          color: var(--accent);
          letter-spacing: 1px;
        }

        .hero-description {
          font-family: 'Comic Neue', cursive;
          font-weight: 600;
          font-size: 1.15rem;
          color: #444;
          max-width: 90%;
          text-transform: uppercase;
        }

        .interactive-explore-btn-comic {
          background: #000;
          color: #fff;
          border: none;
          padding: 15px 40px;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 6px 6px 0 var(--accent);
        }

        .interactive-explore-btn-comic:hover {
          transform: translate(-2px, -2px);
          box-shadow: 10px 10px 0 var(--accent);
        }

        .hero-image-side {
          flex: 0.8;
          background: #222;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          overflow: hidden;
        }

        .portrait-panel {
          width: 100%;
          height: 100%;
          border: 4px solid #000;
          background: #000;
          position: relative;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.3);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .stat-board-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          z-index: 2;
          transform: scale(0.9);
          transform-origin: bottom center;
        }

        .caption-box {
          position: absolute;
          top: 20px;
          right: -10px;
          background: #fff;
          border: 3px solid #000;
          padding: 5px 15px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          box-shadow: 4px 4px 0 #000;
          z-index: 3;
        }

        .wheel-overlay-comic {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .close-wheel-btn {
          position: absolute;
          top: 20px; right: 20px;
          background: #000;
          color: #fff;
          width: 50px; height: 50px;
          border-radius: 50%;
          font-size: 2rem;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 1000px) {
          .hero-manga-panel { flex-direction: column; }
          .hero-text-side { border-right: none; border-bottom: 4px solid #000; }
          .hero-title { font-size: 4.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Landing;
