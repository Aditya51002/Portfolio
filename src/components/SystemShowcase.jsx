import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemShowcase = () => {
  const [terminalLines, setTerminalLines] = useState([
    { text: "> Initializing system architecture...", type: "system" },
    { text: "> Scaling microservices to 50 nodes...", type: "action" },
    { text: "> Optimizing query latency... -45ms", type: "success" }
  ]);

  useEffect(() => {
    const lines = [
      "> Deploying CI/CD pipeline...",
      "> Running unit tests: 100% pass",
      "> Cache hit ratio: 98.4%",
      "> Analyzing load balancer traffic...",
      "> Auto-scaling triggered: +5 instances",
      "> Garbage collection optimized",
      "> Heartbeat: Healthy",
      "> System Architecture: Resilient"
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev.slice(-4), { 
        text: lines[index % lines.length], 
        type: index % 3 === 0 ? "action" : index % 3 === 1 ? "success" : "system" 
      }]);
      index++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="system-showcase">
      <div className="showcase-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Engineering <span className="highlight">Excellence</span>
        </motion.h2>
        <p className="section-subtitle">Architecting high-performance systems with data-driven precision.</p>
      </div>

      <div className="bento-grid">
        {/* Card 1: Live Architecture Terminal */}
        <motion.div 
          className="bento-card terminal-card glass"
          whileHover={{ y: -5 }}
        >
          <div className="card-header">
            <div className="dots"><span></span><span></span><span></span></div>
            <span className="window-title">system_monitor.sh</span>
          </div>
          <div className="terminal-body">
            <AnimatePresence>
              {terminalLines.map((line, i) => (
                <motion.div 
                  key={line.text + i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`terminal-line ${line.type}`}
                >
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Card 2: Core Expertise Radar */}
        <motion.div 
          className="bento-card expertise-card glass"
          whileHover={{ y: -5 }}
        >
          <h3>Core Constraints</h3>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-label">Scalability</div>
              <div className="stat-bar"><motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1.5 }} className="bar-fill"></motion.div></div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Latency (O)</div>
              <div className="stat-bar"><motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1.5, delay: 0.2 }} className="bar-fill"></motion.div></div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Security</div>
              <div className="stat-bar"><motion.div initial={{ width: 0 }} whileInView={{ width: "88%" }} transition={{ duration: 1.5, delay: 0.4 }} className="bar-fill"></motion.div></div>
            </div>
          </div>
          <div className="complexity-badge">O(1) mindset</div>
        </motion.div>

        {/* Card 3: Distributed Systems Visualizer */}
        <motion.div 
          className="bento-card visualizer-card glass"
          whileHover={{ y: -5 }}
        >
          <div className="data-flow">
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div 
                key={i}
                className="data-node"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
            <svg className="flow-lines">
               <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="var(--accent)" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
          </div>
          <div className="metric">
            <span className="value">99.9%</span>
            <span className="label">Uptime Architecture</span>
          </div>
        </motion.div>

        {/* Card 4: Contribution Grid */}
        <motion.div 
          className="bento-card github-card glass"
          whileHover={{ y: -5 }}
        >
          <h3>Pushing Boundaries</h3>
          <div className="grid-placeholder">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="grid-cell"
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }}
                transition={{ delay: i * 0.01 }}
                style={{ backgroundColor: Math.random() > 0.7 ? "var(--accent)" : "rgba(255,255,255,0.05)" }}
              />
            ))}
          </div>
          <p className="commit-count">568 commits this year</p>
        </motion.div>
      </div>

      <style>{`
        .system-showcase {
          width: 100%;
          min-height: 100vh;
          padding: 100px 40px;
          background: linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.05));
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }

        .showcase-header {
          text-align: center;
          max-width: 800px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 20px;
        }

        .section-title .highlight {
          color: var(--accent-light);
          position: relative;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 300px);
          gap: 24px;
          width: 100%;
          max-width: 1200px;
        }

        .bento-card {
          position: relative;
          padding: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 24px;
        }

        .terminal-card {
          grid-column: span 2;
          background: rgba(0, 0, 0, 0.4) !important;
          border: 1px solid rgba(255, 255, 255, 0.05);
          font-family: 'Fira Code', monospace;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #333;
        }

        .dots span:nth-child(1) { background: #ff5f56; }
        .dots span:nth-child(2) { background: #ffbd2e; }
        .dots span:nth-child(3) { background: #27c93f; }

        .window-title {
          font-size: 0.8rem;
          color: #666;
        }

        .terminal-body {
          flex: 1;
          font-size: 0.95rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .terminal-line.system { color: #88b0ff; }
        .terminal-line.action { color: #888; }
        .terminal-line.success { color: #4ade80; }

        .expertise-card {
          padding-top: 40px;
        }

        .expertise-card h3 {
          font-size: 1.4rem;
          color: #fff;
          margin-bottom: 30px;
        }

        .stat-item {
          margin-bottom: 20px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .stat-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: linear-gradient(to right, var(--accent), var(--accent-light));
        }

        .complexity-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 0.8rem;
          padding: 4px 12px;
          background: rgba(14, 165, 233, 0.1);
          color: var(--accent-light);
          border-radius: 12px;
          border: 1px solid rgba(14, 165, 233, 0.2);
        }

        .visualizer-card {
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           gap: 20px;
        }

        .data-flow {
          width: 100%;
          height: 100px;
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .data-node {
          width: 12px;
          height: 12px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent);
        }

        .flow-lines {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .metric {
          text-align: center;
        }

        .metric .value {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
        }

        .metric .label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .github-card {
          grid-column: span 2;
        }

        .github-card h3 {
          margin-bottom: 16px;
          color: #fff;
        }

        .grid-placeholder {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 6px;
          margin-bottom: 12px;
        }

        .grid-cell {
          aspect-ratio: 1;
          border-radius: 2px;
        }

        .commit-count {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .terminal-card, .github-card {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .terminal-card, .github-card, .expertise-card, .visualizer-card {
            grid-column: span 1;
          }
          .section-title {
             font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SystemShowcase;
