import React from 'react';

const Experience = () => {
  return (
    <div className="page-container-comic experience-page">
      <h2 className="page-title-comic">EXPERIENCE</h2>
      
      {/* Top Status Panel / Tagline */}
      <div className="experience-status-panel">
        <div className="status-badge-manga">MISSION STATUS: READY</div>
        <div className="status-text-container">
          <h3 className="status-header">CHAPTER 0: THE AWAKENING</h3>
          <p className="status-desc">
            WHILE THE FORMAL INTERNSHIP CHAPTER IS YET TO BE WRITTEN, THE POWER GAINED THROUGH 
            RIGOROUS TRAINING AT <span className="highlight-cipher">CIPHERSCHOOLS</span> AND 
            REAL-WORLD NGO DEPLOYMENTS RIVALS THE BATTLE-HARDENED. MY CAPABILITY IS MEASURED 
            BY THE IMPACT I DELIVER—ARCHITECTURE THAT SCALES, AND SOLUTIONS THAT MATTER.
          </p>
        </div>
        <div className="speed-lines-status"></div>
      </div>

      <div className="experience-main-comic">
        {/* Card 1: Java + DSA */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">ALGORITHMIC_MASTERY</div>
          <div className="training-header-comic">
            <h3 className="comic-company">CIPHERSCHOOLS</h3>
            <span className="comic-date">JUL 2024 - AUG 2024</span>
          </div>
          <p className="comic-role">Java + Data Structures & Algorithms Training</p>
          <ul className="comic-feat-list">
            <li>Mastered core data structures by designing and implementing Single & Doubly Linked Lists, along with optimized Stack and Queue systems, ensuring efficient memory and time complexity handling.</li>
            <li>Built and analyzed hierarchical data models using Binary Trees, Binary Search Trees (BST), and Generic Trees, enhancing understanding of recursive and tree traversal algorithms.</li>
            <li>Developed high-performance solutions using advanced data structures like Heaps and HashMaps, enabling faster data retrieval and priority-based processing.</li>
            <li>Applied advanced algorithmic techniques including Dynamic Programming to solve complex optimization problems with improved time-space trade-offs.</li>
            <li>Implemented graph algorithms such as BFS, DFS, Minimum Spanning Tree (MST), Dijkstra, and Floyd-Warshall, demonstrating strong capabilities in solving real-world network and pathfinding problems.</li>
            <li>Strengthened competitive coding skills by successfully completing multiple timed coding assessments on platforms like Codeforces and HackerRank, improving accuracy under pressure.</li>
            <li>Designed robust Java applications with efficient file handling and exception management, ensuring reliability, scalability, and clean error handling practices.</li>
          </ul>
        </div>

        {/* Card 2: MERN + DevOps */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">SYSTEM_ARCHITECT</div>
          <div className="training-header-comic">
            <h3 className="comic-company">CIPHERSCHOOLS</h3>
            <span className="comic-date">JAN 2024 - FEB 2024</span>
          </div>
          <p className="comic-role">MERN Stack + DevOps + Cloud Computing Training (Winter Training)</p>
          <ul className="comic-feat-list">
            <li>Developed scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring modular architecture and responsive UI/UX design.</li>
            <li>Engineered RESTful APIs using Node.js and Express.js, enabling seamless frontend-backend communication and efficient data handling.</li>
            <li>Designed and managed NoSQL databases (MongoDB) with optimized schemas, improving query performance and data scalability.</li>
            <li>Implemented modern frontend interfaces using React.js, incorporating reusable components, state management, and dynamic rendering for enhanced user experience.</li>
            <li>Applied DevOps practices by using Git & GitHub for version control, ensuring smooth collaboration, branching strategies, and CI/CD-ready workflows.</li>
            <li>Deployed and managed applications on cloud platforms, gaining hands-on experience with cloud computing concepts, hosting, and scalability strategies.</li>
            <li>Utilized containerization concepts (Docker - basic exposure) and deployment pipelines to improve application portability and consistency across environments.</li>
            <li>Built production-ready systems focusing on performance optimization, error handling, and scalable backend architecture.</li>
          </ul>
        </div>
      </div>

      <style>{`
        .experience-page {
          padding: 80px 40px;
          background: #fff;
          border: 4px solid #000;
          box-shadow: 15px 15px 0 rgba(0,0,0,0.1);
          max-width: 1500px;
          margin: 0 auto;
          width: 98%;
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

        /* Status Panel Styling */
        .experience-status-panel {
          border: 6px solid #000;
          background: #fff;
          margin-bottom: 60px;
          padding: 40px;
          position: relative;
          box-shadow: 20px 20px 0 #000;
          transform: skew(-2deg);
        }

        .status-badge-manga {
          position: absolute;
          top: -22px;
          left: 15px;
          background: #ff0033;
          color: #fff;
          font-family: 'Bangers', cursive;
          font-size: 1.4rem;
          padding: 6px 25px;
          border: 4px solid #000;
          transform: rotate(-3deg) skew(2deg);
          z-index: 20;
          box-shadow: 8px 8px 0 rgba(0,0,0,0.2);
          text-shadow: 2px 2px 0 #000;
        }

        .status-header {
          font-family: 'Bangers', cursive;
          font-size: 2.8rem;
          color: #000;
          margin-bottom: 15px;
          transform: skew(2deg);
        }

        .status-desc {
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          font-size: 1.4rem;
          color: #333;
          line-height: 1.4;
          max-width: 1100px;
          transform: skew(2deg);
        }

        .highlight-cipher {
          color: #000;
          text-decoration: underline 4px #ffcc00;
          padding: 0 4px;
        }

        .speed-lines-status {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            rgba(0,0,0,0.03) 60px,
            rgba(0,0,0,0.03) 61px
          );
          pointer-events: none;
        }

        .experience-main-comic {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin: 0 auto;
          align-items: stretch;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 #000;
          position: relative;
          padding: 40px;
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
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
          z-index: 5;
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
          font-size: 2.3rem;
          color: #000;
          line-height: 1;
        }

        .comic-date {
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
          color: #fff;
          background: #000;
          padding: 5px 15px;
          white-space: nowrap;
        }

        .comic-role {
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          font-size: 1.3rem;
          color: var(--accent);
          margin-bottom: 25px;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .comic-feat-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .comic-feat-list li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #333;
          padding-left: 30px;
          position: relative;
          line-height: 1.3;
        }

        .comic-feat-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 1.3rem;
          font-weight: 900;
        }

        @media (max-width: 1200px) {
          .experience-main-comic { grid-template-columns: 1fr; }
          .page-title-comic { font-size: 3rem; }
          .experience-status-panel { transform: skew(0); padding: 30px; }
          .status-header { font-size: 2.22rem; transform: skew(0); }
          .status-desc { transform: skew(0); font-size: 1.2rem; }
        }

        @media (max-width: 768px) {
          .training-header-comic { flex-direction: column; align-items: flex-start; gap: 10px; }
          .experience-page { padding: 40px 20px; }
          .comic-company { font-size: 2rem; }
          .page-title-comic { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
