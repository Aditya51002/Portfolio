import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import WheelDial from '../components/WheelDial';

const Landing = () => {
  const [showWheel, setShowWheel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showWheel) {
      setShowWheel(true);
      // Clean up the window history state so the wheel doesn't pop up again if the user simply refreshes the page
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="landing-page">
      <div className="landing-content">
        
        {/* Left Section: Intro and Photo */}
        <div className="left-section">
          
          <motion.div 
            className="intro-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3 
              className="greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I am
            </motion.h3>
            <motion.h1 
              className="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Aditya Maurya
            </motion.h1>
            <motion.h2 
              className="role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              MERN Stack <span className="dot">•</span> Web <span className="dot">•</span> Android <span className="dot">•</span> SDET
            </motion.h2>
            <motion.p 
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Software Engineer dedicated to architecting robust, scalable, and high-performance applications. Leveraging deep expertise across full-stack modern web technologies, mobile development, and rigorous software testing, I build resilient systems designed to deliver exceptional user experiences and drive impact at enterprise scale.
            </motion.p>
            <motion.button 
              className="explore-btn" 
              onClick={() => setShowWheel(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              Explore <span className="arrow">→</span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="photo-container glass"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="photo-placeholder">
              <img src="/portrait-placeholder.png" alt="Aditya Maurya" className="profile-img" />
            </div>
            {/* Decorative corner accents */}
            <div className="corner top-left"></div>
            <div className="corner bottom-right"></div>
          </motion.div>

        </div>

        {/* Right Section: Wheel Dial is now an Overlay */}
        {showWheel && (
          <div className="wheel-overlay" onClick={() => setShowWheel(false)}>
            <div className="wheel-wrapper" onClick={(e) => e.stopPropagation()}>
              <WheelDial onClose={() => setShowWheel(false)} />
              <button className="close-wheel-btn" onClick={() => setShowWheel(false)}>×</button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .landing-page {
          width: 100%;
          height: calc(100vh - 80px); /* Minus navbar */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
        }

        .landing-content {
          width: 100%;
          max-width: 1400px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .left-section {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .intro-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          animation: slideUp 1s ease forwards;
        }

        .greeting {
          font-size: 1.2rem;
          color: var(--accent-light);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .name {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 5px;
          background: linear-gradient(to right, #fff, var(--accent-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .role {
          font-size: 1.8rem;
          font-weight: 300;
          color: var(--text-secondary);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .dot {
          color: var(--accent);
          font-size: 1.2rem;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #cccccc;
          margin-bottom: 40px;
          max-width: 90%;
        }

        .explore-btn {
          padding: 15px 35px;
          font-size: 1.1rem;
          font-family: inherit;
          font-weight: 600;
          color: #fff;
          background: transparent;
          border: 1px solid var(--accent-light);
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .explore-btn:hover {
          background: var(--accent-light);
          box-shadow: 0 0 20px var(--accent-glow);
          transform: translateY(-2px);
        }

        .explore-btn .arrow {
          transition: transform 0.3s ease;
        }

        .explore-btn:hover .arrow {
          transform: translateX(5px);
        }

        /* Photo Rectangular Container */
        .photo-container {
          flex: 0.8;
          height: 480px;
          border-radius: 20px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px;
        }

        .photo-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg-primary);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .photo-container:hover .profile-img {
          transform: scale(1.03);
        }

        .corner {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid var(--accent-light);
        }

        .top-left {
          top: -10px;
          left: -10px;
          border-right: none;
          border-bottom: none;
          border-top-left-radius: 10px;
        }

        .bottom-right {
          bottom: -10px;
          right: -10px;
          border-left: none;
          border-top: none;
          border-bottom-right-radius: 10px;
        }

        /* Wheel Overlay Styles */
        .wheel-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 10, 10, 0.5); /* Semi-transparent dark background */
          backdrop-filter: blur(15px); /* Strong blur effect */
          -webkit-backdrop-filter: blur(15px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.4s ease forwards;
        }

        .wheel-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .close-wheel-btn {
          position: absolute;
          top: -40px;
          right: -40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-color);
          color: #fff;
          font-size: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          z-index: 1010;
        }

        .close-wheel-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive adjustments for unscrollable compact views */
        @media (max-width: 1200px) {
          .landing-content {
            gap: 20px;
          }
          .name { font-size: 3rem; }
          .role { font-size: 1.5rem; }
          .photo-container { display: none; /* Hide photo on smaller screens to prioritize wheel */ }
        }
      `}</style>
    </div>
  );
};

export default Landing;
