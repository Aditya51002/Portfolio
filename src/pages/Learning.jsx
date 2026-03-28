const Learning = () => {
  const learningMissions = [
    {
      id: "ARC_01",
      title: "ADVANCED SYSTEM DESIGN",
      desc: "DIVING DEEP INTO DISTRIBUTED SYSTEMS, MICROSERVICES ARCHITECTURES, AND SCALABLE BACKENDS.",
      difficulty: 5,
      xp: 85,
      icon: "⚡",
      sfx: "SURGE!",
      status: "DOMINATING"
    },
    {
      id: "ARC_02",
      title: "NEXT.JS & SSR",
      desc: "TRANSITIONING TO ROBUST, SEO-FRIENDLY FRAMEWORKS FOR ENTERPRISE-LEVEL FRONTEND DEVELOPMENT.",
      difficulty: 4,
      xp: 92,
      icon: "⚛️",
      sfx: "GLITCH!",
      status: "AWAKENED"
    },
    {
      id: "ARC_03",
      title: "DEVOPS & CLOUD",
      desc: "MASTERING DOCKER, CI/CD PIPELINES, AND AWS TO STREAMLINE DEPLOYMENT WORKFLOWS.",
      difficulty: 4,
      xp: 78,
      icon: "🐳",
      sfx: "BOOM!",
      status: "DEPLOYED"
    },
    {
      id: "ARC_04",
      title: "SPRING BOOT & MICROSERVICES",
      desc: "BEYOND NODE.JS: BUILDING ENTERPRISE-GRADE BACKENDS WITH JAVA AND SPRING ECOSYSTEM.",
      difficulty: 5,
      xp: 65,
      icon: "☕",
      sfx: "CRACKLE!",
      status: "ENGAGED"
    },
    {
      id: "ARC_05",
      title: "ADVANCED SOFTWARE TESTING",
      desc: "MASTERING JUNIT, MOCKITO, AND INTEGRATION TESTING FOR ROBUST, BUG-FREE SOFTWARE DELIVERY.",
      difficulty: 3,
      xp: 98,
      icon: "🧪",
      sfx: "PRECISION!",
      status: "PURIFIED"
    },
    {
      id: "ARC_06",
      title: "AI & MACHINE LEARNING",
      desc: "EXPLORING NEURAL NETWORKS AND LLMS TO INTEGRATE INTELLIGENT CAPABILITIES INTO PRACTICAL APPS.",
      difficulty: 5,
      xp: 45,
      icon: "🧠",
      sfx: "EXPAND!",
      status: "UNCERTAIN"
    }
  ];

  return (
    <div className="page-container-comic learning-page">
      <div className="halftone-overlay"></div>
      
      <div className="learning-hero-banner">
        <div className="rank-badge">S-RANK CANDIDATE</div>
        <h2 className="title-comic-xl">SKILL <span className="highlight-magenta">AWAKENING</span></h2>
        <div className="chapter-subtitle">ROADMAP TO TECHNICAL SINGULARITY</div>
      </div>

      <div className="learning-intro-panel">
        <div className="manga-panel training-grounds">
          <div className="panel-label-top">TRAINING GROUNDS</div>
          <p className="mission-briefing">
            "THE PATH TO MASTERY IS NOT A STRAIGHT LINE. EACH ARC REPRESENTS A NEW FRONTIER, A NEW BATTLE, AND A NEW OPPORTUNITY TO TRANSCEND CURRENT LIMITATIONS."
          </p>
          <div className="status-dock">
            <div className="status-item"><span className="label">HP:</span> 100/100</div>
            <div className="status-item"><span className="label">MP:</span> 99/99</div>
            <div className="status-item"><span className="label">STR:</span> 95</div>
          </div>
        </div>
      </div>

      <div className="roadmap-path-container">
        {learningMissions.map((mission, idx) => (
          <div 
            key={mission.id} 
            className={`mission-arc-panel ${idx % 2 === 0 ? 'path-left' : 'path-right'}`}
          >
            <div className="manga-panel quest-card">
              <div className="arc-indicator">{mission.id}</div>
              <div className="status-tab">{mission.status}</div>
              
              <div className="quest-header">
                <div className="quest-icon-frame">{mission.icon}</div>
                <div className="quest-title-info">
                  <h3 className="quest-label">{mission.title}</h3>
                  <div className="diff-meter">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < mission.difficulty ? "star active" : "star"}>★</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="quest-brief">{mission.desc}</p>

              <div className="progress-section">
                <div className="xp-info">
                  <span>MASTERY PROGRESS</span>
                  <span>XP {mission.xp}%</span>
                </div>
                <div className="neon-progress-bar">
                  <div className="neon-fill" style={{ width: `${mission.xp}%` }}></div>
                </div>
              </div>

              <div className="card-sfx">{mission.sfx}</div>
              <div className="speed-lines-overlay"></div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .learning-page {
          padding: 80px 20px;
          background: #fff;
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .halftone-overlay {
          position: fixed;
          inset: 0;
          background-image: radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 15px 15px;
          pointer-events: none;
          z-index: 0;
        }

        .learning-hero-banner {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .rank-badge {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 5px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          margin-bottom: 20px;
          transform: skewX(-10deg);
          box-shadow: 5px 5px 0 var(--accent);
        }

        .title-comic-xl {
          font-family: 'Bangers', cursive;
          font-size: 7rem;
          color: #000;
          line-height: 0.85;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .highlight-magenta {
          color: var(--accent);
          -webkit-text-stroke: 2px #000;
          text-shadow: 8px 8px 0 rgba(0,0,0,0.1);
        }

        .chapter-subtitle {
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          color: #333;
          letter-spacing: 3px;
        }

        .learning-intro-panel {
          max-width: 900px;
          margin: 0 auto 100px;
          position: relative;
          z-index: 1;
        }

        .training-grounds {
          background: #fff;
          border: 6px solid #000;
          padding: 50px;
          text-align: center;
          box-shadow: 15px 15px 0 rgba(0,0,0,0.1);
        }

        .panel-label-top {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: #fff;
          padding: 5px 30px;
          font-family: 'Bangers', cursive;
          font-size: 1.4rem;
          border: 3px solid #fff;
        }

        .mission-briefing {
          font-family: 'Comic Neue', cursive;
          font-weight: 800;
          font-size: 1.4rem;
          color: #222;
          max-width: 800px;
          margin: 0 auto 30px;
          line-height: 1.4;
          font-style: italic;
        }

        .status-dock {
          display: flex;
          justify-content: center;
          gap: 40px;
          border-top: 4px solid #000;
          padding-top: 30px;
        }

        .status-item {
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          color: #333;
        }

        .status-item .label {
          color: var(--accent);
          margin-right: 5px;
        }

        .roadmap-path-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
        }

        .mission-arc-panel {
          width: 60%;
          z-index: 1;
        }

        .path-left { align-self: flex-start; }
        .path-right { align-self: flex-end; }

        .quest-card {
          border: 5px solid #000;
          background: #fff;
          padding: 40px;
          position: relative;
          box-shadow: 12px 12px 0 #000;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .quest-card:hover {
          transform: scale(1.03) translateY(-10px) !important;
          box-shadow: 20px 20px 0 var(--accent);
          border-color: var(--accent);
        }

        .quest-card:hover .speed-lines-overlay {
          opacity: 0.15;
          transform: scale(1.2);
        }

        .arc-indicator {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #000;
          color: #fff;
          padding: 2px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.3rem;
          z-index: 2;
        }

        .status-tab {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--accent);
          color: #fff;
          padding: 5px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1rem;
          transform: rotate(0deg);
        }

        .quest-header {
          display: flex;
          gap: 25px;
          align-items: center;
          margin-bottom: 25px;
        }

        .quest-icon-frame {
          width: 80px;
          height: 80px;
          border: 4px solid #000;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          box-shadow: 6px 6px 0 #000;
        }

        .quest-label {
          font-family: 'Bangers', cursive;
          font-size: 2.2rem;
          color: #000;
          line-height: 1;
          margin-bottom: 5px;
        }

        .diff-meter {
          display: flex;
          gap: 5px;
        }

        .star { font-size: 1.2rem; color: #ddd; }
        .star.active { color: var(--accent); }

        .quest-brief {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.15rem;
          color: #444;
          margin-bottom: 35px;
          line-height: 1.4;
        }

        .progress-section {
          margin-top: auto;
        }

        .xp-info {
          display: flex;
          justify-content: space-between;
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #000;
        }

        .neon-progress-bar {
          height: 18px;
          background: #eee;
          border: 3px solid #000;
          position: relative;
        }

        .neon-fill {
          height: 100%;
          background: var(--accent);
          box-shadow: 0 0 15px var(--accent);
          transition: width 1.5s ease-out;
        }

        .card-sfx {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          color: rgba(0,0,0,0.05);
          text-transform: uppercase;
          transform: rotate(-10deg);
          pointer-events: none;
        }

        .speed-lines-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(45deg, transparent 48%, #000 49%, #000 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, #000 49%, #000 51%, transparent 52%);
          background-size: 30px 30px;
          opacity: 0;
          transition: all 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 1000px) {
          .mission-arc-panel { width: 100%; }
          .title-comic-xl { font-size: 4rem; }
          .status-dock { flex-direction: column; align-items: center; gap: 10px; }
          .quest-header { flex-direction: column; align-items: flex-start; }
          .path-left, .path-right { align-self: center; }
        }
      `}</style>
    </div>
  );
};

export default Learning;
