import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="about-section-comic">
      <div className="section-container">
        <h2 className="section-title">ABOUT <span className="highlight-comic">ME</span></h2>
        
        <div className="about-grid-comic">
          {/* Panel 1: Who Am I */}
          <div className="about-panel bento-2x2">
            <div className="sfx-text" style={{ top: '-15px', left: '10px' }}>BOOM!</div>
            <h3 className="panel-title">WHO AM I?</h3>
            <div className="speech-bubble">
              HELLO! I'M ADITYA MAURYA, A DEVELOPER ON A MISSION TO BUILD THE FUTURE!
            </div>
            <p className="panel-text">
              I'M A COMPUTER SCIENCE STUDENT WITH A PASSION FOR HIGH-PERFORMANCE SYSTEMS AND CREATIVE AI. I LOVE SOLVING COMPLEX PROBLEMS AND TURNING THEM INTO ELEGANT CODE.
            </p>
          </div>

          {/* Panel 2: What I Do */}
          <div className="about-panel bento-1x2">
            <h3 className="panel-title">WHAT I DO</h3>
            <ul className="panel-list">
              <li>FULL-STACK DEV</li>
              <li>SDET ARCHITECT</li>
              <li>AI INTEGRATION</li>
            </ul>
            <p className="panel-text">SPECIALIZING IN MERN STACK AND SCALABLE ARCHITECTURES.</p>
          </div>

          {/* Panel 3: Location */}
          <div className="about-panel bento-1x1">
            <h3 className="panel-title">LOCATION</h3>
            <p className="panel-text" style={{ fontSize: '1.5rem', textAlign: 'center' }}>📍 INDIA</p>
            <p className="panel-text" style={{ fontSize: '0.9rem' }}>OPEN TO REMOTE WORK & RELOCATION</p>
          </div>

          {/* Panel 4: Looking For */}
          <div className="about-panel bento-wide-comic">
            <h3 className="panel-title">THE MISSION</h3>
            <p className="panel-text">
              ACTIVELY SEEKING SOFTWARE ENGINEERING OPPORTUNITIES WHERE I CAN PUSH THE BOUNDARIES OF PERFORMANCE AND UX.
            </p>
            <div className="availability-tag">AVAILABLE NOW!</div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section-comic {
          padding: 80px 20px;
          background: #fff;
          border-top: 4px solid #000;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 5rem;
          color: #000;
          text-align: center;
          margin-bottom: 60px;
          -webkit-text-stroke: 1.5px #000;
        }

        .highlight-comic {
          color: var(--accent);
        }

        .about-grid-comic {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 200px;
          gap: 20px;
        }

        .about-panel {
          border: 4px solid #000;
          background: #fff;
          padding: 30px;
          box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transition: transform 0.2s;
        }

        .about-panel:hover {
          transform: translate(-3px, -3px);
          box-shadow: 12px 12px 0 var(--accent);
        }

        .bento-2x2 { grid-column: span 2; grid-row: span 2; }
        .bento-1x2 { grid-column: span 1; grid-row: span 2; }
        .bento-wide-comic { grid-column: span 3; grid-row: span 1; flex-direction: row; align-items: center; justify-content: space-between; }

        .panel-title {
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          color: #000;
          border-bottom: 3px solid #000;
          width: fit-content;
        }

        .panel-text {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #333;
        }

        .panel-list {
          list-style: square;
          margin-left: 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: var(--accent-secondary);
        }

        .availability-tag {
          background: #000;
          color: #fff;
          padding: 10px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          transform: rotate(2deg);
        }

        @media (max-width: 900px) {
          .about-grid-comic { grid-template-columns: repeat(2, 1fr); }
          .bento-wide-comic { grid-column: span 2; }
        }

        @media (max-width: 600px) {
          .about-grid-comic { grid-template-columns: 1fr; grid-auto-rows: auto; }
          .bento-2x2, .bento-1x2, .bento-wide-comic { grid-column: span 1; grid-row: auto; }
          .bento-wide-comic { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
