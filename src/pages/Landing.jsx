import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import WheelDial from '../components/WheelDial';
import SystemShowcase from '../components/SystemShowcase';
import CommandCenter from '../components/CommandCenter';
import AboutSection from '../components/AboutSection';

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
      <div className="landing-page-aurora">
        
        {/* Animated Background Orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="landing-content">
          <motion.div 
            className="hero-glass-card"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Split layout inside the massive glass card */}
            <div className="hero-text-side">
              <motion.div variants={itemVariants} className="hero-badge">
                <span className="live-dot"></span> Available for Web & Android
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="hero-title">
                Hi, I'm <br />
                <span className="gradient-text">Aditya Maurya</span>
              </motion.h1>

              <motion.h2 variants={itemVariants} className="hero-subtitle">
                MERN Stack <span className="separator">•</span> SDET <span className="separator">•</span> Innovator
              </motion.h2>

              <motion.p variants={itemVariants} className="hero-description">
                I architect highly scalable web applications, robust mobile platforms, and automated test frameworks. Obsessed with clean code and unparalleled user experiences. Let's build something extraordinary.
              </motion.p>

              <motion.div variants={itemVariants}>
                <CommandCenter />
              </motion.div>

              <motion.div variants={itemVariants} className="hero-actions">
                <button 
                  className="interactive-explore-btn" 
                  onClick={() => setShowWheel(true)}
                >
                  <span className="btn-bg"></span>
                  <span className="btn-text">Explore Portfolio <span className="arrow">→</span></span>
                </button>
              </motion.div>
            </div>

            <div className="hero-image-side">
              <motion.div 
                className="profile-hologram"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <div className="hologram-ring back"></div>
                <div className="hologram-ring front"></div>
                <img src="/portrait-placeholder.png" alt="Aditya Maurya" className="hero-profile-img" />
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* Wheel Overlay */}
        {showWheel && (
          <motion.div 
            className="wheel-overlay-aurora" 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
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

      {/* High-end technical showcase targeting FAANG recruiters */}
      <SystemShowcase />

      <style>{`
        .landing-scroll-container {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .landing-scroll-container::-webkit-scrollbar {
          width: 8px;
        }
        .landing-scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        .landing-scroll-container::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 4px;
        }

        .landing-page-aurora {
          width: 100%;
          min-height: calc(100vh - 80px); /* Fill screen under navbar */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
          overflow: hidden; /* Contains background orbs to hero section */
        }

        /* --- Dynamic Aurora Background Orbs --- */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          z-index: 0;
          animation: floatOrb 15s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .orb-1 {
          background: var(--accent);
          width: 500px;
          height: 500px;
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }
        .orb-2 {
          background: var(--accent-secondary);
          width: 400px;
          height: 400px;
          bottom: -50px;
          right: -50px;
          animation-delay: -5s;
        }
        .orb-3 {
          background: var(--accent-light);
          width: 300px;
          height: 300px;
          top: 40%;
          left: 50%;
          animation: pulseOrb 8s ease-in-out infinite alternate;
        }

        @keyframes floatOrb {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-50px) scale(1.1); }
          100% { transform: translateY(30px) scale(0.9); }
        }
        @keyframes pulseOrb {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.6; }
        }

        /* --- Hero Content --- */
        .landing-content {
          width: 100%;
          max-width: 1300px;
          z-index: 10;
        }

        .hero-glass-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 30px;
          padding: 60px;
          display: flex;
          align-items: center;
          gap: 60px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .hero-text-side {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.3);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.9rem;
          color: var(--accent-light);
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-light);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-light);
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-light) 0%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.3));
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .separator {
          color: var(--accent);
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #94a3b8;
          max-width: 90%;
          font-weight: 300;
        }

        .hero-actions {
          margin-top: 15px;
        }

        /* --- Interactive Explore Button --- */
        .interactive-explore-btn {
          position: relative;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          outline: none;
          border-radius: 50px;
          overflow: hidden;
        }

        .btn-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, var(--accent), var(--accent-secondary), var(--accent));
          background-size: 200% auto;
          animation: gradientShift 3s linear infinite;
          border-radius: 50px;
          transition: 0.5s;
        }

        .interactive-explore-btn:hover .btn-bg {
          box-shadow: 0 0 30px var(--accent-glow);
        }

        .btn-text {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--bg-primary); /* cuts out interior so edge is gradient */
          margin: 2px; /* width of outline */
          padding: 16px 36px;
          border-radius: 48px;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          transition: 0.3s;
          z-index: 1;
        }

        .interactive-explore-btn:hover .btn-text {
          background: transparent;
          color: #fff;
        }

        .interactive-explore-btn .arrow {
          transition: transform 0.3s;
        }

        .interactive-explore-btn:hover .arrow {
          transform: translateX(5px);
        }

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* --- Portrait & Image Side --- */
        .hero-image-side {
          flex: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .profile-hologram {
          width: 380px;
          height: 380px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          transform-style: preserve-3d;
        }

        .hero-profile-img {
          width: 85%;
          height: 85%;
          object-fit: cover;
          border-radius: 30px;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          filter: contrast(1.1) brightness(0.9);
          transition: 0.5s;
        }

        .profile-hologram:hover .hero-profile-img {
          transform: translateZ(30px);
          filter: contrast(1.1) brightness(1);
        }

        .hologram-ring {
          position: absolute;
          inset: 0;
          border: 2px solid var(--accent);
          border-radius: 35px;
          transition: 0.5s;
        }

        .hologram-ring.back {
          transform: translateZ(-20px) rotate(-5deg);
          border-color: var(--accent-secondary);
          opacity: 0.5;
        }

        .hologram-ring.front {
          transform: translateZ(20px) rotate(5deg);
          border-color: var(--accent-light);
          opacity: 0.8;
        }

        .profile-hologram:hover .hologram-ring.back {
          transform: translateZ(-30px) rotate(-10deg) scale(1.05);
        }

        .profile-hologram:hover .hologram-ring.front {
          transform: translateZ(30px) rotate(10deg) scale(1.05);
        }

        /* --- Wheel Overlay --- */
        .wheel-overlay-aurora {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(2, 6, 23, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
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
          background: var(--accent-secondary);
          border-color: var(--accent-light);
          transform: scale(1.1) rotate(90deg);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-glass-card {
            flex-direction: column;
            padding: 40px;
            text-align: center;
            gap: 40px;
          }
          .hero-text-side {
            align-items: center;
          }
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-description {
            max-width: 100%;
          }
          .orb-1, .orb-2 {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
            justify-content: center;
          }
          .profile-hologram {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
