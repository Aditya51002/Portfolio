const About = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">About Me</h2>
      <div className="about-grid">
        {/* Card 1: Who you are (Large Block) */}
        <div className="about-card bento-large">
          <div className="card-header">
            <h3>Who I Am</h3>
          </div>
          <div className="card-body">
            <p className="highlight-text">
              Hello! I'm <strong className="gradient-text">Aditya Maurya</strong>, a highly motivated Computer Science student and Developer based in India.
            </p>
            <p>
              I have a profound passion for solving complex algorithmic problems, exploring system design architectures, and building scalable web applications. My goal is to craft digital experiences that are not only functional but also visually stunning.
            </p>
          </div>
        </div>

        {/* Card 2: What you do (Wide Block) */}
        <div className="about-card bento-wide">
          <div className="card-header">
            <h3>What I Do</h3>
          </div>
          <div className="card-body">
            <p>
              I specialize in full-stack development using <strong>MongoDB, Express.js, React, and Node.js</strong>.
            </p>
            <p>
              My primary focus is writing clean, accessible code, designing modern user-friendly interfaces, and leveraging cutting-edge web technologies to deliver impactful products.
            </p>
          </div>
        </div>

        {/* Card 3: Education (Small Block) */}
        <div className="about-card bento-small glass-highlight">
          <div className="card-header">
            <h3>Education</h3>
          </div>
          <div className="card-body">
            <p>
              <strong>B.Tech in CSE</strong><br />
              Lovely Professional University<br />
              <span className="text-secondary" style={{fontSize: '0.9rem'}}>Currently Pursuing</span>
            </p>
          </div>
        </div>

        {/* Card 4: Location (Small Block) */}
        <div className="about-card bento-small glass-highlight">
          <div className="card-header">
            <h3>Location</h3>
          </div>
          <div className="card-body">
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
              📍 India
            </p>
            <p className="text-secondary" style={{fontSize: '0.9rem'}}>
              Open to Remote & Relocation
            </p>
          </div>
        </div>

        {/* Card 5: Looking For (Wide Block) */}
        <div className="about-card bento-wide-bottom">
          <div className="card-header">
            <h3>Looking For</h3>
          </div>
          <div className="card-body" style={{ flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
            <p style={{ flex: 1 }}>
              Actively seeking <strong>Software Engineering</strong> and <strong>Full-Stack Development</strong> opportunities where I can contribute to challenging projects in collaborative environments that push the boundaries of technology.
            </p>
            <div className="availability-badge">Available Now</div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(150px, auto);
          gap: 20px;
          margin-top: 20px;
          width: 100%;
        }

        /* Bento Box Layout Classes */
        .bento-large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .bento-wide {
          grid-column: span 1;
          grid-row: span 2;
        }

        .bento-small {
          grid-column: span 1;
          grid-row: span 1;
        }

        .bento-wide-bottom {
          grid-column: span 3;
          grid-row: span 1;
        }

        .about-card {
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Subtle gradient glow inside card */
        .about-card::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%; right: -50%; bottom: -50%;
          background: radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }

        .about-card:hover::before {
          opacity: 1;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(147, 51, 234, 0.5);
          box-shadow: 0 15px 35px rgba(0,0,0, 0.4), 0 0 20px rgba(107, 33, 168, 0.2);
          background: rgba(30, 30, 30, 0.6);
        }

        /* Highlight cards specifically */
        .glass-highlight {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
        }

        .card-header {
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .card-header h3 {
          font-size: 1.5rem;
          color: #fff;
          font-weight: 600;
          letter-spacing: 0.5px;
          display: inline-block;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 5px;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }

        .card-body p {
          color: #cccccc;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .text-secondary {
          color: var(--text-secondary) !important;
        }

        .highlight-text {
          font-size: 1.2rem !important;
          color: #eee !important;
          line-height: 1.6 !important;
        }

        .gradient-text {
          background: linear-gradient(to right, #fff, var(--accent-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .availability-badge {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(74, 222, 128, 0.3);
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.1);
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-large { grid-column: span 2; grid-row: span 2; }
          .bento-wide { grid-column: span 2; grid-row: auto; }
          .bento-small { grid-column: span 1; grid-row: auto; }
          .bento-wide-bottom { grid-column: span 2; grid-row: auto; }
          .card-body { flex-direction: column !important; }
        }

        @media (max-width: 650px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .bento-large, .bento-wide, .bento-small, .bento-wide-bottom {
            grid-column: span 1;
            grid-row: auto;
          }
          .card-body { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  );
};
export default About;
