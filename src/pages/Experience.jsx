const Experience = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">Experience & Training</h2>
      <div className="exp-grid">
        <div className="exp-card">
          <div className="card-header">
            <h3>CipherSchools</h3>
            <span className="date-badge">Jun’25-Jul’2025</span>
          </div>
          <p className="role">Summer Training - Data Structures & Algorithms</p>
          <ul>
            <li>Completed training in Data Structures & Algorithms using Java, solving real-world problems and strengthening skills in time-complexity analysis, recursion, OOP, and efficient data handling.</li>
            <li>Implemented and optimized algorithms (searching, sorting, linked lists, stacks, queues, trees, graphs), achieving 40%–60% performance improvement through code optimization, space reduction techniques, and clean modular Java design.</li>
          </ul>
        </div>
      </div>
      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          margin-top: 20px;
          width: 100%;
        }
        .exp-card {
           background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 25px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .exp-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 30px rgba(0,0,0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          gap: 10px;
        }
        .card-header h3 {
          font-size: 1.4rem;
          color: #fff;
          font-weight: 600;
          line-height: 1.3;
        }
        .date-badge {
          font-size: 0.85rem;
          background: rgba(107, 33, 168, 0.2);
          color: var(--accent-light);
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .role {
          font-size: 1.15rem;
          color: #aaa;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .exp-card ul {
          list-style-type: none;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .exp-card li {
          color: #cccccc;
          position: relative;
          padding-left: 20px;
          line-height: 1.6;
        }
        .exp-card li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};
export default Experience;
