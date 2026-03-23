const Experience = () => {
  return (
    <div className="page-container-comic experience-page">
      <h2 className="page-title-comic">EXPERIENCE</h2>
      
      <div className="experience-main-comic">
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">TRAINING_LOG</div>
          <div className="training-header-comic">
            <h3 className="comic-company">CIPHERSCHOOLS</h3>
            <span className="comic-date">JUN 2025 - JUL 2025</span>
          </div>
          <p className="comic-role">SUMMER TRAINING - DATA STRUCTURES & ALGORITHMS</p>
          <ul className="comic-feat-list">
            <li>MASTERED THE ART OF DATA STRUCTURES & ALGORITHMS USING JAVA.</li>
            <li>OPTIMIZED ALGORITHMS FOR SEARCHING, SORTING, AND GRAPH THEORY.</li>
            <li>ACHIEVED 40%-60% PERFORMANCE GAINS THROUGH RECURSIVE OPTIMIZATION.</li>
          </ul>
        </div>
      </div>

      <style>{`
        .experience-page {
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

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
          position: relative;
          padding: 40px;
          margin: 0 auto;
          max-width: 1000px;
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

        .training-header-comic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 4px solid #000;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        .comic-company {
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: #000;
        }

        .comic-date {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #fff;
          background: #000;
          padding: 5px 15px;
        }

        .comic-role {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--accent);
          margin-bottom: 20px;
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
          padding-left: 30px;
          position: relative;
        }

        .comic-feat-list li::before {
          content: '★';
          position: absolute;
          left: 0;
          color: #000;
          font-size: 1.4rem;
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
