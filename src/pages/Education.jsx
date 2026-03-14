const Education = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">Education</h2>
      <div className="edu-grid">
        <div className="edu-card">
          <div className="card-header">
            <h3>Lovely Professional University</h3>
            <span className="date-badge">Jalandhar, Punjab</span>
          </div>
          <p className="degree">Bachelor of Technology (CSE)</p>
          <div className="score-pill"> (Pursuing)</div>
        </div>

        <div className="edu-card">
          <div className="card-header">
            <h3>Vishnu Bhagwan Public School</h3>
            <span className="date-badge">Apr’20 – Mar’21</span>
          </div>
          <p className="degree">Intermediate (Class 12th)</p>
          <div className="score-pill"> Prayagraj, UP</div>
        </div>

        <div className="edu-card">
          <div className="card-header">
            <h3>Army Public School</h3>
            <span className="date-badge">Apr’18 – Mar’19</span>
          </div>
          <p className="degree">Matriculation (Class 10th)</p>
          <div className="score-pill">Prayagraj, UP</div>
        </div>
      </div>
      <style>{`
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          margin-top: 20px;
          width: 100%;
        }
        .edu-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 25px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .edu-card:hover {
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
        .degree {
          font-size: 1.15rem;
          color: #aaa;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .score-pill {
          display: inline-block;
          font-size: 0.95rem;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 6px 14px;
          border-radius: 6px;
          align-self: flex-start;
          border: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>
    </div>
  );
};
export default Education;
