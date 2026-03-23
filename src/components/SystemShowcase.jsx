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
  const [metrics, setMetrics] = useState({ latency: 45, throughput: 1200, cpu: 15 });

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

        {/* Metrics Row */}
        <div className="metrics-row-comic">
          <div className="manga-panel metric-card-comic">
            <div className="metric-label">LATENCY</div>
            <div className="metric-value">{metrics.latency}MS</div>
          </div>
          <div className="manga-panel metric-card-comic">
            <div className="metric-label">THROUGHPUT</div>
            <div className="metric-value">{metrics.throughput.toLocaleString()} R/S</div>
          </div>
          <div className="manga-panel metric-card-comic">
            <div className="metric-label">CPU</div>
            <div className="metric-value">{metrics.cpu}%</div>
            <div className="cpu-bar-comic"><div className="fill" style={{ width: `${metrics.cpu}%` }}></div></div>
          </div>
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

        .metrics-row-comic {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .metric-card-comic {
          text-align: center;
          padding: 20px;
        }

        .metric-label {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #888;
        }

        .metric-value {
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: #000;
          margin: 10px 0;
        }

        .cpu-bar-comic {
          height: 12px;
          background: #eee;
          border: 2px solid #000;
        }

        .cpu-bar-comic .fill {
          height: 100%;
          background: var(--accent);
          transition: width 0.3s;
        }

        @media (max-width: 900px) {
          .panel-grid-comic { grid-template-columns: 1fr; }
          .metrics-row-comic { grid-template-columns: 1fr; }
          .section-title-comic { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default SystemShowcase;
