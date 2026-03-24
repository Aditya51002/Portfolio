import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="about-section-comic">
      <div className="section-container">
        <h2 className="section-title">ABOUT <span className="highlight-comic">ME</span></h2>
        
        <div className="about-grid-comic">
          {/* Panel 1: Who Am I */}
          <div className="about-panel bento-2x2">
            <div className="sfx-text" style={{ top: '-20px', left: '-10px', transform: 'rotate(-10deg)' }}>BOOM!</div>
            <h3 className="panel-title">WHO AM I?</h3>
            <div className="speech-bubble">
              HELLO! I’M ADITYA MAURYA — A RESULTS-DRIVEN SOFTWARE ENGINEER BUILDING SCALABLE, HIGH-PERFORMANCE, AND RELIABLE DIGITAL SYSTEMS.
            </div>
            <p className="panel-text">
              I design, build, and optimize end-to-end applications, combining full-stack development, software testing, and Android engineering to deliver robust, production-ready solutions.
            </p>
            <p className="panel-text" style={{ fontSize: '0.95rem' }}>
              I specialize in scalable MERN architectures, automation testing frameworks, and modern Android development (Kotlin + Jetpack Compose). I thrive on solving complex problems, engineering efficient systems, and ensuring software quality through rigorous testing and optimization.
            </p>
            <p className="panel-text" style={{ fontSize: '0.95rem' }}>
              With a strong foundation in system design, performance tuning, and AI-driven solutions, I continuously push boundaries to build faster, smarter, and more resilient applications.
            </p>
          </div>

          {/* Panel 2: What I Do */}
          <div className="about-panel bento-1x2">
            <h3 className="panel-title">WHAT I DO</h3>
            <ul className="panel-list" style={{ fontSize: '0.9rem', listStyle: 'none', marginLeft: 0 }}>
              <li><strong>BUILD SCALABLE FULL-STACK APPLICATIONS</strong> using MERN stack with clean architecture and high performance</li>
              <li><strong>ENGINEER AUTOMATION TESTING FRAMEWORKS</strong> using Selenium, JMeter, and API testing to ensure reliability and quality</li>
              <li><strong>DEVELOP MODERN ANDROID APPLICATIONS</strong> using Kotlin and Jetpack Compose with seamless UI/UX</li>
              <li><strong>OPTIMIZE SYSTEM PERFORMANCE</strong> by improving backend efficiency, reducing latency, and enhancing scalability</li>
              <li><strong>DESIGN API-DRIVEN ARCHITECTURES</strong> for secure, efficient, and maintainable systems</li>
              <li><strong>INTEGRATE AI & REAL-TIME FEATURES</strong> to build intelligent and responsive applications</li>
            </ul>
          </div>

          {/* Panel 3: Location */}
          <div className="about-panel bento-1x1">
            <h3 className="panel-title">LOCATION</h3>
            <p className="panel-text" style={{ fontSize: '1.5rem', textAlign: 'center' }}>📍 PHAGWARA, PUNJAB, INDIA</p>
            <p className="panel-text" style={{ fontSize: '0.9rem' }}>OPEN TO REMOTE WORK & RELOCATION</p>
          </div>

          {/* Panel 4: Looking For */}
          <div className="about-panel bento-wide-comic">
            <h3 className="panel-title">THE MISSION</h3>
            <p className="panel-text">
              I BUILD SYSTEMS THAT ARE FAST, SCALABLE, AND RELIABLE — TRANSFORMING COMPLEX IDEAS INTO REAL-WORLD SOLUTIONS THAT CREATE IMPACT.
            </p>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div className="availability-tag">AVAILABLE NOW!</div>
            </Link>
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
          -webkit-text-stroke: 1px #000;
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
          overflow: visible; /* Added to prevent clipping of SFX text */
        }

        .about-panel:hover {
          transform: translate(-3px, -3px);
          box-shadow: 12px 12px 0 var(--accent);
        }

        .availability-tag {
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          padding: 10px 20px;
          background: var(--accent-secondary);
          color: #fff;
          border: 3px solid #000;
          box-shadow: 5px 5px 0 #000;
          transition: all 0.2s ease-in-out;
          text-align: center;
          white-space: nowrap;
        }

        .availability-tag:hover {
          background: var(--accent);
          color: #000;
          cursor: pointer;
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
          font-weight: 400;
          font-size: 1.1rem;
          color: #333;
        }

        .panel-list {
          list-style: none;
          margin-left: 0;
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
          color: var(--accent-secondary);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .panel-list li {
          position: relative;
          padding-left: 20px;
          line-height: 1.2;
        }

        .panel-list li::before {
          content: '■';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 0.8rem;
          top: 2px;
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
