import React from 'react';

const Skills = () => {
  return (
    <div className="page-container-comic skills-page">
      <h2 className="page-title">SKILLS</h2>
      
      {/* Top Header Panel */}
      <div className="skills-header-comic">
        <div className="badge-comic">POWERS & ABILITIES</div>
        <h2 className="header-title">THE CORE TOOLKIT</h2>
        <p className="header-desc">A COMPREHENSIVE OVERVIEW OF MY TECHNICAL PROFICIENCIES AND ARCHITECTURAL MASTERY.</p>
      </div>

      <div className="skills-grid-comic">
        {/* Languages */}
        <div className="skill-panel-comic">
          <div className="panel-header-comic">
            <h3>LANGUAGES</h3>
            <div className="dot-comic green"></div>
          </div>
          <ul className="skill-list-comic">
            <li>JAVASCRIPT & TYPESCRIPT</li>
            <li>JAVA & KOTLIN</li>
            <li>PYTHON</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="skill-panel-comic">
          <div className="panel-header-comic">
            <h3>FRONTEND</h3>
            <div className="dot-comic yellow"></div>
          </div>
          <ul className="skill-list-comic">
            <li>REACT.JS (HOOKS)</li>
            <li>ANDROID SDK</li>
            <li>TAILWIND CSS</li>
            <li>FRAMER MOTION</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-panel-comic">
          <div className="panel-header-comic">
            <h3>BACKEND</h3>
            <div className="dot-comic pink"></div>
          </div>
          <ul className="skill-list-comic">
            <li>NODE.JS & EXPRESS</li>
            <li>SPRING BOOT</li>
            <li>FLASK</li>
            <li>MONGODB</li>
          </ul>
        </div>

        {/* Core Tools */}
        <div className="skill-panel-comic">
          <div className="panel-header-comic">
            <h3>TOOLS</h3>
            <div className="dot-comic blue"></div>
          </div>
          <ul className="skill-list-comic">
            <li>GIT & GITHUB</li>
            <li>VS Code</li>
            <li>Eclipse</li>
            <li>DOCKER</li>
            <li>POSTMAN</li>
            <li>ALGORITHMS & DS</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skill-panel-comic">
          <div className="panel-header-comic">
            <h3>SOFT SKILLS</h3>
            <div className="dot-comic purple"></div>
          </div>
          <ul className="skill-list-comic">
            <li>COMMUNICATION</li>
            <li>TEAMWORK</li>
            <li>PROBLEM SOLVING</li>
            <li>ADAPTABILITY</li>
          </ul>
        </div>
      </div>

      <style>{`
        .skills-page {
          padding: 60px;
          background: #fff;
          border: 4px solid #000;
          box-shadow: 15px 15px 0 rgba(0,0,0,0.1);
        }

        .skills-header-comic {
          margin-bottom: 40px;
          border-bottom: 4px solid #000;
          padding-bottom: 30px;
        }

        .badge-comic {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 5px 15px;
          font-family: 'Bangers', cursive;
          margin-bottom: 15px;
        }

        .header-title {
          font-family: 'Bangers', cursive;
          font-size: 3.5rem;
          color: #000;
          line-height: 1;
        }

        .header-desc {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.2rem;
          color: #444;
          margin-top: 10px;
        }

        .skills-grid-comic {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .skill-panel-comic {
          border: 4px solid #000;
          background: #fff;
          padding: 25px;
          box-shadow: 6px 6px 0 #000;
          transition: transform 0.2s;
        }

        .skill-panel-comic:hover {
          transform: translate(-3px, -3px);
          box-shadow: 10px 10px 0 var(--accent);
        }

        .panel-header-comic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
        }

        .panel-header-comic h3 {
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          color: #000;
        }

        .dot-comic {
          width: 15px; height: 15px;
          border: 2px solid #000;
        }
        .green { background: #4ade80; }
        .yellow { background: #facc15; }
        .pink { background: #f472b6; }
        .blue { background: #60a5fa; }
        .purple { background: #a855f7; }

        .skill-list-comic {
          list-style: none;
          padding: 0;
        }

        .skill-list-comic li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-list-comic li::before {
          content: '✔';
          color: var(--accent);
          font-weight: 900;
        }

        @media (max-width: 768px) {
          .header-title { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Skills;
