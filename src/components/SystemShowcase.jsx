import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemShowcase = () => {
  const [terminalLines, setTerminalLines] = useState([
    { text: "> RUNNING UNIT TESTS: 100% PASS", type: "success" },
    { text: "> CACHE HIT RATIO: 98.4%", type: "system" },
    { text: "> ANALYZING LOAD BALANCER TRAFFIC...", type: "action" }
  ]);

  const [load, setLoad] = useState(20);
  const [isCaching, setIsCaching] = useState(false);
  const [isScaling, setIsScaling] = useState(false);

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

  useEffect(() => {
    const lines = [
      "> AUTO-SCALING TRIGGERED: +5 INSTANCES",
      "> GARBAGE COLLECTION OPTIMIZED",
      "> HEARTBEAT: HEALTHY",
      "> SYSTEM ARCHITECTURE: RESILIENT",
      "> RUNNING UNIT TESTS: 100% PASS",
      "> CACHE HIT RATIO: 98.4%",
      "> ANALYZING LOAD BALANCER TRAFFIC..."
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev.slice(-4), { 
        text: lines[index % lines.length], 
        type: index % 3 === 0 ? "action" : index % 3 === 1 ? "success" : "system" 
      }]);
      index++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="system-showcase-comic">
      <div className="showcase-header-comic">
        <h2 className="section-title-comic">ENGINEERING <span className="highlight-comic">EXCELLENCE</span></h2>
        <p className="section-subtitle-comic">ARCHITECTING HIGH-PERFORMANCE SYSTEMS WITH DATA-DRIVEN PRECISION.</p>
      </div>

      <div className="showcase-content-comic">
        <div className="panel-grid-comic">
          {/* Terminal Panel */}
          <div className="manga-panel terminal-panel-comic">
            <div className="panel-label-comic">SYSTEM_LOGS.EXE</div>
            <div className="terminal-body-comic">
              <AnimatePresence mode='popLayout'>
                {terminalLines.map((line, i) => (
                  <motion.div 
                    key={line.text + i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`terminal-line-comic ${line.type}`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="manga-panel controls-panel-comic">
            <div className="panel-label-comic">CONTROL_CENTER</div>
            <div className="controls-comic">
              <div className="control-group-comic">
                <label>SYSTEM LOAD: <span className="load-val">{load}%</span></label>
                <input 
                  type="range" min="10" max="100" value={load} 
                  onChange={(e) => setLoad(parseInt(e.target.value))}
                  className="comic-range"
                />
              </div>
              <div className="toggles-comic">
                <button 
                  className={`comic-toggle ${isCaching ? 'active' : ''}`}
                  onClick={() => setIsCaching(!isCaching)}
                >
                  REDIS CACHE: {isCaching ? 'ON' : 'OFF'}
                </button>
                <button 
                  className={`comic-toggle ${isScaling ? 'active' : ''}`}
                  onClick={() => setIsScaling(!isScaling)}
                >
                  H-SCALING: {isScaling ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>
        </div>

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

        .panel-grid-comic {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 30px;
        }

        .manga-panel {
          background: #fff;
          border: 4px solid #000;
          position: relative;
          padding: 30px;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
        }

        .panel-label-comic {
          position: absolute;
          top: -15px;
          left: 20px;
          background: #000;
          color: #fff;
          padding: 2px 15px;
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
        }

        .terminal-panel-comic {
          background: #111;
          color: #4ade80;
          min-height: 250px;
          font-family: monospace;
          box-shadow: 10px 10px 0 var(--accent);
        }

        .terminal-line-comic {
          margin-bottom: 8px;
          font-size: 1.1rem;
        }

        .terminal-line-comic.action { color: #60a5fa; }
        .terminal-line-comic.success { color: #4ade80; }
        .terminal-line-comic.system { color: #facc15; }

        .controls-comic {
          display: flex;
          flex-direction: column;
          gap: 25px;
          height: 100%;
          justify-content: center;
        }

        .control-group-comic label {
          display: block;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          margin-bottom: 15px;
        }

        .load-val { color: var(--accent); }

        .comic-range {
          -webkit-appearance: none;
          width: 100%;
          height: 15px;
          background: #eee;
          border: 3px solid #000;
          outline: none;
        }

        .comic-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 30px;
          height: 30px;
          background: #000;
          cursor: pointer;
          border: 2px solid #fff;
        }

        .toggles-comic {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .comic-toggle {
          background: #fff;
          border: 3px solid #000;
          padding: 10px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .comic-toggle.active {
          background: #000;
          color: #fff;
          transform: translate(4px, 4px);
          box-shadow: none;
        }

        .comic-toggle:not(.active) {
          box-shadow: 4px 4px 0 #000;
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
          .panel-grid-comic { grid-template-columns: 1fr; }
          .section-title-comic { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default SystemShowcase;
