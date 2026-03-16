import React from 'react';

const Skills = () => {
  return (
    <div className="page-container glass skills-page">
      <h2 className="page-title">Skills</h2>
      
      {/* Top Header Card */}
      <div className="skills-header about-card">
        <div className="badge badge-yellow">SKILLS</div>
        <h2>Core Toolkit</h2>
        <p>A comprehensive overview of my technical proficiencies, frameworks, and foundational computer science skills.</p>
      </div>

      <div className="skills-layout">
        {/* Column 1: Languages */}
        <div className="about-card skill-column">
          <div className="column-header">
            <h3>Languages</h3>
            <span className="dot dot-green"></span>
          </div>
          <ul className="skill-list">
            <li>JavaScript & TypeScript</li>
            <li>Java & Kotlin</li>
            <li>Python</li>
            <li>C & C++</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Column 2: Frontend & Mobile */}
        <div className="about-card skill-column">
          <div className="column-header">
            <h3>Frontend & App</h3>
            <span className="dot dot-yellow"></span>
          </div>
          <ul className="skill-list">
            <li>React.js (Hooks, Context)</li>
            <li>Android SDK</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Column 3: Backend & DB */}
        <div className="about-card skill-column">
          <div className="column-header">
            <h3>Backend & DB</h3>
            <span className="dot dot-pink"></span>
          </div>
          <ul className="skill-list">
            <li>Node.js & Express.js</li>
            <li>Spring Boot</li>
            <li>Flask</li>
            <li>MongoDB & Mongoose</li>
            <li>RESTful APIs</li>
            <li>Auth (JWT)</li>
          </ul>
        </div>

        {/* Column 4: Tools & Core */}
        <div className="about-card skill-column">
          <div className="column-header">
            <h3>Tools & Core</h3>
            <span className="dot dot-blue"></span>
          </div>
          <ul className="skill-list">
            <li>Git & GitHub</li>
            <li>Docker Basics</li>
            <li>Postman</li>
            <li>VS Code & IntelliJ</li>
            <li>Data Structures & Algos</li>
            <li>Operating Systems</li>
          </ul>
        </div>
      </div>

      <style>{`
        .skills-page {
          max-width: 1200px; /* Increased to allow wider cards */
        }

        .skills-header {
          margin-bottom: 30px;
          text-align: left;
          padding: 30px 40px;
        }

        .skills-header h2 {
          font-size: 2.2rem;
          color: #fff;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .skills-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .badge-yellow {
          background: rgba(250, 204, 21, 0.15);
          color: #facc15;
          border: 1px solid rgba(250, 204, 21, 0.3);
        }

        .skills-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          align-items: stretch;
        }

        .about-card {
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(147, 51, 234, 0.5);
          box-shadow: 0 15px 35px rgba(0,0,0, 0.4), 0 0 20px rgba(107, 33, 168, 0.2);
          background: rgba(30, 30, 30, 0.6);
        }

        .skill-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
          min-height: 380px; /* Increased height for better visual proportions */
          /* Add a subtle left border to mimic the reference image's color-coded edges */
          border-left: 4px solid rgba(255, 255, 255, 0.1);
        }

        /* Color-coded edges for columns */
        .skill-column:nth-child(1) { border-left-color: #4ade80; }
        .skill-column:nth-child(2) { border-left-color: #facc15; }
        .skill-column:nth-child(3) { border-left-color: #f472b6; }
        .skill-column:nth-child(4) { border-left-color: #60a5fa; }

        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .column-header h3 {
          font-size: 1.35rem;
          color: #fff;
          font-weight: 600;
          margin: 0;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 3px;
        }
        
        .dot-green { background-color: #4ade80; }
        .dot-yellow { background-color: #facc15; }
        .dot-pink { background-color: #f472b6; }
        .dot-blue { background-color: #60a5fa; }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .skill-list li {
          color: #cccccc;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-list li::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .skills-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .skills-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
