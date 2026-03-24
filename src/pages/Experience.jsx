const Experience = () => {
  return (
    <div className="page-container-comic experience-page">
      <h2 className="page-title-comic">EXPERIENCE</h2>
      
      <div className="experience-main-comic">
        {/* JPMorgan */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">DEVELOPMENT_LOG</div>
          <div className="training-header-comic">
            <h3 className="comic-company">JPMORGAN CHASE & CO.</h3>
            <span className="comic-date">Jan’25-PRESENT</span>
          </div>
          <p className="comic-role">SOFTWARE ENGINEERING VIRTUAL EXPERIENCE</p>
          <ul className="comic-feat-list">
            <li>Interfaced with a stock price data feed using Python and perspective-python library.</li>
            <li>Analyzed and visualized financial data using Perspective, JPMorgan's open-source tool.</li>
            <li>Implemented technical analysis indicators (Ratio, Bounds) to identify trading opportunities.</li>
            <li>Collaborated in an Agile environment to build a real-time reactive dashboard.</li>
          </ul>
        </div>

        {/* MERN Developer */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">PROJECT_INTELLIGENCE</div>
          <div className="training-header-comic">
            <h3 className="comic-company">MERN STACK DEVELOPER</h3>
            <span className="comic-date">2024 - PRESENT</span>
          </div>
          <p className="comic-role">FULL-STACK WEB DEVELOPMENT</p>
          <ul className="comic-feat-list">
            <li>Built scalable RESTful APIs with Node.js & Express for real-world NGO platforms.</li>
            <li>Implemented secure JWT-based authentication and role-based access control.</li>
            <li>Architected complex state management using Redux & React Hooks for high performance.</li>
            <li>Integrated Cloudinary for media management and optimized asset delivery at scale.</li>
          </ul>
        </div>

        {/* Super School */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">ALGORITHMIC_MASTERY</div>
          <div className="training-header-comic">
            <h3 className="comic-company">SUPER SCHOOL</h3>
            <span className="comic-date">MAY 2025 - JUL 2025</span>
          </div>
          <p className="comic-role">DATA STRUCTURES & ALGORITHMS TRAINING</p>
          <ul className="comic-feat-list">
            <li>Deep-dived into advanced Data Structures and Algorithmic optimization techniques.</li>
            <li>Solved 300+ problems on LeetCode/CodeChef focusing on Dynamic Programming & Graphs.</li>
            <li>Mastered complexity analysis (Big O) and space-time trade-off strategies.</li>
            <li>Implemented fundamental data structures from scratch in Java for deep understanding.</li>
          </ul>
        </div>
      </div>

      <style>{`
        .experience-page {
          padding: 60px;
          background: #fff;
          border: 4px solid #000;
          box-shadow: 15px 15px 0 rgba(0,0,0,0.1);
        }

        .page-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 5rem;
          color: #000;
          text-align: center;
          margin-bottom: 50px;
          -webkit-text-stroke: 2.5px #000;
          text-shadow: 6px 6px 0 var(--accent);
        }

        .experience-main-comic {
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 #000;
          position: relative;
          padding: 40px;
          transition: transform 0.2s;
        }

        .manga-panel:hover {
          transform: translate(-4px, -4px);
          box-shadow: 14px 14px 0 var(--accent);
        }

        .panel-label-comic {
          position: absolute;
          top: -15px;
          left: 20px;
          background: #000;
          color: #fff;
          padding: 4px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          border: 2px solid #000;
        }

        .training-header-comic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 4px solid #000;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }

        .comic-company {
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: #000;
          line-height: 1;
        }

        .comic-date {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #fff;
          background: #000;
          padding: 5px 20px;
          white-space: nowrap;
        }

        .comic-role {
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--accent);
          margin-bottom: 25px;
          text-transform: uppercase;
        }

        .comic-feat-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .comic-feat-list li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.2rem;
          color: #333;
          padding-left: 35px;
          position: relative;
          line-height: 1.4;
        }

        .comic-feat-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 1.5rem;
          font-weight: 900;
        }

        @media (max-width: 768px) {
          .page-title-comic { font-size: 3rem; }
          .training-header-comic { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
