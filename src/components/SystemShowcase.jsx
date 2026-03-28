import React from 'react';
import { motion } from 'framer-motion';

const SystemShowcase = () => {
  const skillCategories = [
    {
      title: "LANGUAGES & CORE",
      skills: [
        { name: "C", icon: "C" },
        { name: "C++", icon: "C++" },
        { name: "JAVA", icon: "☕" },
        { name: "PYTHON", icon: "🐍" },
        { name: "JAVASCRIPT", icon: "JS" },
        { name: "TYPESCRIPT", icon: "TS" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "DSA", icon: "🧠" },
        { name: "SQL", icon: "🗄️" }
      ]
    },
    {
      title: "FRAMEWORKS & QA",
      skills: [
        { name: "REACT", icon: "⚛️" },
        { name: "REDUX", icon: "🔄" },
        { name: "NODE.JS", icon: "🟢" },
        { name: "MANUAL TESTING", icon: "✔️" },
        { name: "SELENIUM", icon: "Se" },
        { name: "POSTMAN", icon: "🚀" },
        { name: "JUNIT", icon: "🧪" },
        { name: "TESTNG", icon: "🧪" }
      ]
    },
    {
      title: "DEVOPS & TOOLS",
      skills: [
        { name: "DOCKER", icon: "🐳" },
        { name: "DEVOPS", icon: "♾️" },
        { name: "GIT/GITHUB", icon: "🐙" },
        { name: "MAVEN", icon: "羽" },
        { name: "VS CODE", icon: "💻" },
        { name: "ECLIPSE", icon: "🌑" },
        { name: "LINUX", icon: "🐧" }
      ]
    }
  ];





  return (
    <section className="system-showcase-comic">
      <div className="showcase-header-comic">
        <h2 className="section-title-comic">ENGINEERING <span className="highlight-comic">EXCELLENCE</span></h2>
        <p className="section-subtitle-comic">ARCHITECTING HIGH-PERFORMANCE SYSTEMS WITH DATA-DRIVEN PRECISION.</p>
      </div>

      <div className="showcase-content-comic">
        {/* Skills Showcase Grid */}
        <div className="skills-showcase-manga">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-cluster">
              <div className="cluster-label">{cat.title}</div>
              <div className="skills-inner-grid">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-icon-card">
                    <div className="icon-wrapper">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .system-showcase-comic {
          padding: 80px 40px;
          background: #fff;
          border-top: 4px solid #000;
        }

        .showcase-header-comic {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 4rem;
          color: #000;
          letter-spacing: 2px;
        }

        .highlight-comic {
          color: var(--accent);
          -webkit-text-stroke: 1px #000;
        }

        .section-subtitle-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.2rem;
          color: #444;
        }

        .showcase-content-comic {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .skills-showcase-manga {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 20px;
        }
        
        .skill-category-cluster {
          background: #111;
          border: 4px solid #000;
          padding: 30px 20px;
          box-shadow: 10px 10px 0 var(--accent);
          position: relative;
        }

        .cluster-label {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: #fff;
          padding: 2px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          white-space: nowrap;
          border: 2px solid #fff;
        }

        .skills-inner-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .skill-icon-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 15px 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: all 0.2s;
        }

        .skill-icon-card:hover {
          background: rgba(255,255,255,0.15);
          transform: scale(1.05);
          border-color: var(--accent);
        }

        .icon-wrapper {
          font-size: 2rem;
          color: #fff;
          font-weight: bold;
        }

        .skill-name {
          color: #aaa;
          font-size: 0.75rem;
          font-family: 'Bangers', cursive;
          text-align: center;
          text-transform: uppercase;
        }

        @media (max-width: 1000px) {
          .skills-showcase-manga { grid-template-columns: 1fr; }
          .section-title-comic { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default SystemShowcase;
