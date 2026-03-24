const Learning = () => {
  return (
    <div className="page-container-comic learning-page">
      <h2 className="page-title-comic">CURRENT FOCUS</h2>
      
      <div className="learning-intro-comic">
        <div className="manga-panel focus-hero-panel">
          <div className="sfx-text-comic">SLAM!</div>
          <p className="comic-text">I AM CONTINUOUSLY EXPLORING NEW TECHNOLOGIES TO STAY AHEAD OF THE CURVE AND REFINE MY TECHNICAL STACK.</p>
        </div>
      </div>

      <div className="learning-grid-comic">
        <div className="manga-panel learning-item-comic">
          <div className="panel-label-comic">STAGE_01</div>
          <h3 className="learning-title-comic">ADVANCED SYSTEM DESIGN</h3>
          <p className="learning-desc-comic">DIVING DEEP INTO DISTRIBUTED SYSTEMS, MICROSERVICES ARCHITECTURES, AND SCALABLE BACKENDS.</p>
        </div>

        <div className="manga-panel learning-item-comic">
          <div className="panel-label-comic">STAGE_02</div>
          <h3 className="learning-title-comic">NEXT.JS & SSR</h3>
          <p className="learning-desc-comic">TRANSITIONING TO ROBUST, SEO-FRIENDLY FRAMEWORKS FOR ENTERPRISE-LEVEL FRONTEND DEVELOPMENT.</p>
        </div>

        <div className="manga-panel learning-item-comic">
          <div className="panel-label-comic">STAGE_03</div>
          <h3 className="learning-title-comic">DEVOPS & CLOUD</h3>
          <p className="learning-desc-comic">MASTERING DOCKER, CI/CD PIPELINES, AND AWS TO STREAMLINE DEPLOYMENT WORKFLOWS.</p>
        </div>

        <div className="manga-panel learning-item-comic">
          <div className="panel-label-comic">STAGE_04</div>
          <h3 className="learning-title-comic">SPRING BOOT & MICROSERVICES</h3>
          <p className="learning-desc-comic">BEYOND NODE.JS: BUILDING ENTERPRISE-GRADE BACKENDS WITH JAVA AND SPRING ECOSYSTEM.</p>
        </div>

        <div className="manga-panel learning-item-comic">
          <div className="panel-label-comic">STAGE_05</div>
          <h3 className="learning-title-comic">ADVANCED SOFTWARE TESTING</h3>
          <p className="learning-desc-comic">MASTERING JUNIT, MOCKITO, AND INTEGRATION TESTING FOR ROBUST, BUG-FREE SOFTWARE DELIVERY.</p>
        </div>

        <div className="manga-panel learning-item-comic">
          <div className="panel-label-comic">STAGE_06</div>
          <h3 className="learning-title-comic">AI & MACHINE LEARNING</h3>
          <p className="learning-desc-comic">EXPLORING NEURAL NETWORKS AND LLMS TO INTEGRATE INTELLIGENT CAPABILITIES INTO PRACTICAL APPS.</p>
        </div>
      </div>

      <style>{`
        .learning-page {
          padding: 60px;
          background: #fff;
        }

        .page-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 5rem;
          color: #000;
          text-align: center;
          margin-bottom: 40px;
          -webkit-text-stroke: 2px #000;
          text-shadow: 4px 4px 0 var(--accent);
        }

        .focus-hero-panel {
          text-align: center;
          margin-bottom: 50px;
          padding: 40px;
          background-image: radial-gradient(circle, #eee 1px, transparent 1px);
          background-size: 10px 10px;
        }

        .sfx-text-comic {
          position: absolute;
          top: -20px;
          right: -20px;
          background: var(--accent);
          color: #fff;
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          padding: 5px 15px;
          transform: rotate(15deg);
          border: 3px solid #000;
          box-shadow: -4px 4px 0 #000;
        }

        .comic-text {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.2rem;
          color: #333;
        }

        .learning-grid-comic {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
          position: relative;
          padding: 30px;
          transition: 0.2s;
        }

        .learning-item-comic:hover {
          transform: translateX(10px);
          border-left: 15px solid var(--accent);
          box-shadow: 15px 15px 0 #000;
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

        .learning-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          color: #000;
          margin-bottom: 10px;
        }

        .learning-desc-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .page-title-comic { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};
export default Learning;
