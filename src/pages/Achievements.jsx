const Achievements = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">Achievements & Certifications</h2>
      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="card-header">
            <h3>Achievements</h3>
          </div>
          <ul className="icon-list">
            <li>
              <span className="icon">🏆</span>
              Solved 100+ DSA problems across multiple platforms, significantly enhancing algorithmic thinking, pattern recognition, and improved problem-solving skills.
            </li>
            <li>
              <span className="icon">🏆</span>
              Achieved the title of Top Performer in a Web Hackathon.
            </li>
          </ul>
        </div>

        <div className="achievement-card">
          <div className="card-header">
            <h3>Certificates</h3>
          </div>
          <ul className="icon-list">
            <li>
              <span className="icon">📜</span>
              <span><strong>Privacy and Security in Online Social Media</strong> - NPTEL (Oct’2025)</span>
            </li>
            <li>
              <span className="icon">📜</span>
              <span><strong>Data Structures and Algorithms</strong> - CipherSchools (Jul’2025)</span>
            </li>
            <li>
              <span className="icon">📜</span>
              <span><strong>Hardware and Operating Systems</strong> - Coursera (Sep’2024)</span>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          margin-top: 20px;
          width: 100%;
        }
        .achievement-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 25px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .achievement-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 30px rgba(0,0,0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }
        .card-header {
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .card-header h3 {
          font-size: 1.5rem;
          color: #fff;
          font-weight: 600;
        }
        .icon-list {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .icon-list li {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          color: #cccccc;
          line-height: 1.6;
          background: rgba(255, 255, 255, 0.02);
          padding: 15px;
          border-radius: 8px;
          transition: background 0.2s ease;
        }
        .icon-list li:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        .icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};
export default Achievements;
