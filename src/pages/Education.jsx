const Education = () => {
  return (
    <div className="page-container-comic education-page">
      <h2 className="page-title-comic">EDUCATION</h2>
      
      <div className="education-intro-comic">
        <div className="manga-panel edu-hero-panel">
          <div className="speech-bubble-comic left">ACADEMIC JOURNEY!</div>
          <p className="comic-text">A CHRONICLE OF MY FORMAL QUEST FOR KNOWLEDGE AND TECHNICAL MASTERY.</p>
        </div>
      </div>

      <div className="edu-grid-comic">
        {/* B.Tech */}
        <div className="manga-panel edu-card-comic btech-panel">
          <div className="panel-label-comic">DEGREE_NODE</div>
          <h3 className="edu-degree-comic">B.TECH IN COMPUTER SCIENCE</h3>
          <p className="edu-uni-comic">LOVELY PROFESSIONAL UNIVERSITY</p>
          <div className="edu-footer-comic">
            <span className="edu-date-comic">AUG 2021 - PRESENT</span>
            <span className="edu-status-comic">PURSUING</span>
          </div>
          <div className="edu-subjects-comic">
            <span>DATA STRUCTURES</span>
            <span>ALGORITHMS</span>
            <span>OPERATING SYSTEMS</span>
            <span>DBMS</span>
          </div>
        </div>

        {/* 12th */}
        <div className="manga-panel edu-card-comic inter-panel">
          <div className="panel-label-comic">SCHOOL_NODE_A</div>
          <h3 className="edu-degree-comic">INTERMEDIATE (CLASS 12TH)</h3>
          <p className="edu-uni-comic">VISHNU BHAGWAN PUBLIC SCHOOL</p>
          <div className="edu-footer-comic">
            <span className="edu-date-comic">APR 2020 - MAR 2021</span>
          </div>
          <div className="edu-subjects-comic">
            <span>PHYSICS</span>
            <span>CHEMISTRY</span>
            <span>MATHS</span>
          </div>
        </div>

        {/* 10th */}
        <div className="manga-panel edu-card-comic matric-panel">
          <div className="panel-label-comic">SCHOOL_NODE_B</div>
          <h3 className="edu-degree-comic">MATRICULATION (CLASS 10TH)</h3>
          <p className="edu-uni-comic">ARMY PUBLIC SCHOOL</p>
          <div className="edu-footer-comic">
            <span className="edu-date-comic">APR 2018 - MAR 2019</span>
          </div>
          <div className="edu-subjects-comic">
            <span>SCIENCE</span>
            <span>MATHS</span>
            <span>HINDI</span>
          </div>
        </div>
      </div>

      <style>{`
        .education-page {
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

        .edu-hero-panel {
          text-align: center;
          margin-bottom: 50px;
          padding: 40px;
          background-image: radial-gradient(circle, #eee 1px, transparent 1px);
          background-size: 15px 15px;
        }

        .speech-bubble-comic {
          position: relative;
          background: #000;
          color: #fff;
          padding: 10px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          display: inline-block;
          margin-bottom: 20px;
          border: 3px solid #000;
        }

        .comic-text {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.2rem;
          color: #333;
        }

        .edu-grid-comic {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 #000;
          position: relative;
          padding: 30px;
          transition: 0.2s;
        }

        .manga-panel:hover {
          transform: translate(-5px, -5px);
          box-shadow: 15px 15px 0 var(--accent);
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

        .edu-degree-comic {
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          color: #000;
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .edu-uni-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 20px;
        }

        .edu-footer-comic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .edu-date-comic {
          font-family: 'Bangers', cursive;
          font-size: 1rem;
          background: #eee;
          padding: 2px 10px;
          border: 2px solid #000;
        }

        .edu-status-comic {
          font-family: 'Bangers', cursive;
          font-size: 1rem;
          color: var(--accent);
        }

        .edu-subjects-comic {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .edu-subjects-comic span {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.9rem;
          background: #fff;
          border: 2px solid #000;
          padding: 2px 10px;
        }

        .btech-panel { border-top: 15px solid #000; }
        .inter-panel { border-top: 15px solid #666; }
        .matric-panel { border-top: 15px solid #ccc; }

        @media (max-width: 768px) {
          .page-title-comic { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default Education;
