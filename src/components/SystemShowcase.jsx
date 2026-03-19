import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemShowcase = () => {
  const [terminalLines, setTerminalLines] = useState([
    { text: "> Running unit tests: 100% pass", type: "success" },
    { text: "> Cache hit ratio: 98.4%", type: "system" },
    { text: "> Analyzing load balancer traffic...", type: "action" }
  ]);

  // Simulator State
  const [load, setLoad] = useState(20);
  const [isCaching, setIsCaching] = useState(false);
  const [isScaling, setIsScaling] = useState(false);
  const [metrics, setMetrics] = useState({ latency: 45, throughput: 1200, cpu: 15 });

  useEffect(() => {
    // Terminal Animation
    const lines = [
      "> Auto-scaling triggered: +5 instances",
      "> Garbage collection optimized",
      "> Heartbeat: Healthy",
      "> System Architecture: Resilient",
      "> Running unit tests: 100% pass",
      "> Cache hit ratio: 98.4%",
      "> Analyzing load balancer traffic..."
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

  // Simulator Logic
  useEffect(() => {
    const baseLatency = 100;
    const loadFactor = load / 10;
    const cacheReduction = isCaching ? 0.7 : 0;
    const scaleBenefit = isScaling ? 0.5 : 1;

    const newLatency = Math.max(10, Math.floor((baseLatency * loadFactor * scaleBenefit) * (1 - cacheReduction)));
    const newThroughput = Math.floor((load * 150 * (isScaling ? 2.5 : 1)));
    const newCPU = Math.min(100, Math.floor((load * 2) / (isScaling ? 2 : 1)));

    setMetrics({ latency: newLatency, throughput: newThroughput, cpu: newCPU });
  }, [load, isCaching, isScaling]);

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

      <div className="showcase-content">
        <div className="showcase-glow"></div>
        
        {/* Row 1: The Terminal (Identity) */}
        <motion.div 
          className="terminal-container"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="bento-card terminal-card glass">
            <div className="card-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <span className="window-title">system_monitor.sh</span>
            </div>
            <div className="terminal-body">
              <AnimatePresence mode='popLayout'>
                {terminalLines.map((line, i) => (
                  <motion.div 
                    key={line.text + i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`terminal-line ${line.type}`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Row 2: The Simulator (Depth) */}
        <motion.div 
          className="simulator-container glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="simulator-header">
            <h3>Scale & Performance Simulator</h3>
            <div className="live-badge">REAL-TIME SIMULATION</div>
          </div>

          <div className="simulator-main">
            {/* Control Panel */}
            <div className="controls">
              <div className="control-group">
                <label>System Load: {load}%</label>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={load} 
                  onChange={(e) => setLoad(parseInt(e.target.value))}
                  className="stylized-slider"
                />
              </div>
              <div className="toggles">
                <button 
                  className={`toggle-btn ${isCaching ? 'active' : ''}`}
                  onClick={() => setIsCaching(!isCaching)}
                >
                  {isCaching ? '✅' : '⚡'} Enable Redis Cache
                </button>
                <button 
                  className={`toggle-btn ${isScaling ? 'active' : ''}`}
                  onClick={() => setIsScaling(!isScaling)}
                >
                  {isScaling ? '✅' : '🌐'} Horizontal Scaling
                </button>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="metrics-grid">
              <div className="metric-card">
                <span className="label">Latency</span>
                <span className="value">{metrics.latency}ms</span>
                <div className="mini-trend" style={{ background: metrics.latency < 50 ? '#4ade80' : metrics.latency < 200 ? '#facc15' : '#f87171' }}></div>
              </div>
              <div className="metric-card">
                <span className="label">Throughput</span>
                <span className="value">{metrics.throughput.toLocaleString()} req/s</span>
              </div>
              <div className="metric-card">
                <span className="label">CPU Usage</span>
                <span className="value">{metrics.cpu}%</span>
                <div className="usage-bar"><div className="fill" style={{ width: `${metrics.cpu}%`, background: metrics.cpu > 80 ? '#f87171' : '#4ade80' }}></div></div>
              </div>
            </div>

            {/* Architecture Visualization */}
            <div className="arch-viz">
               <div className={`node lb ${load > 70 && !isScaling ? 'stress' : ''}`}>LB</div>
               <div className="flow">
                  <motion.div 
                    animate={{ x: [0, 100], opacity: [1, 0] }} 
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    className="packet"
                  />
               </div>
               <div className="server-group">
                 <div className={`node srv ${load > 50 && !isScaling ? 'stress' : ''}`}>App</div>
                 {isScaling && <div className="node srv">App</div>}
                 {isScaling && <div className="node srv">App</div>}
               </div>
               <div className="flow"></div>
               <div className={`node db`}>DB</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .system-showcase {
          width: 100%;
          min-height: 100vh;
          padding: 100px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          background: linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.05));
          position: relative;
          overflow: hidden;
        }

        .showcase-header {
          text-align: center;
          max-width: 800px;
          z-index: 10;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 20px;
        }

        .section-title .highlight {
          color: var(--accent-light);
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        .showcase-content {
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          z-index: 1;
        }

        .showcase-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(100px);
          pointer-events: none;
          z-index: -1;
        }

        /* --- Terminal Styling --- */
        .terminal-container {
          width: 100%;
        }

        .terminal-card {
          min-height: 300px;
          background: rgba(0, 0, 0, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-family: 'Fira Code', monospace;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          padding: 24px;
          border-radius: 24px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .window-title { color: #888; font-size: 0.85rem; }

        /* --- Simulator Styling --- */
        .simulator-container {
          padding: 32px;
          border-radius: 32px;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .simulator-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .simulator-header h3 { font-size: 1.5rem; color: #fff; }

        .live-badge {
          background: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .simulator-main {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
        }

        .controls { display: flex; flex-direction: column; gap: 30px; }

        .control-group { display: flex; flex-direction: column; gap: 12px; }
        .control-group label { color: var(--text-secondary); font-size: 0.9rem; }

        .stylized-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          outline: none;
        }
        .stylized-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: var(--accent);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px var(--accent);
        }

        .toggles { display: flex; flex-direction: column; gap: 12px; }
        .toggle-btn {
          padding: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          color: #fff;
          cursor: pointer;
          transition: 0.3s;
          text-align: left;
          font-size: 0.9rem;
        }
        .toggle-btn.active {
          background: rgba(14, 165, 233, 0.1);
          border-color: var(--accent);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.2);
        }

        .metrics-grid {
          grid-column: span 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .metric-card {
          padding: 20px;
          background: rgba(0,0,0,0.2);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }
        .metric-card .label { color: #888; font-size: 0.8rem; }
        .metric-card .value { font-size: 1.8rem; font-weight: 700; color: #fff; }
        
        .mini-trend { position: absolute; bottom: 0; left: 0; height: 3px; width: 100%; transition: 0.5s; }
        .usage-bar { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; }
        .usage-bar .fill { height: 100%; transition: 0.3s; border-radius: 2px; }

        .arch-viz {
          grid-column: span 2;
          height: 150px;
          background: rgba(0,0,0,0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 40px;
        }

        .node {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 0.8rem;
          transition: 0.3s;
        }
        .node.stress { border-color: #f87171; box-shadow: 0 0 15px rgba(248, 113, 113, 0.3); animation: shake 0.5s infinite; }

        .server-group { display: flex; gap: 10px; }
        .flow { flex: 1; height: 1px; background: rgba(255,255,255,0.05); position: relative; margin: 0 20px; }
        .packet { position: absolute; width: 10px; height: 1px; background: var(--accent); box-shadow: 0 0 10px var(--accent); }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }

        @media (max-width: 1000px) {
          .simulator-main { grid-template-columns: 1fr; }
          .metrics-grid { grid-column: span 1; }
          .arch-viz { display: none; }
        }
      `}</style>
    </section>
  );
};

export default SystemShowcase;
