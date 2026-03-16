import React from 'react';

const Education = () => {
  return (
    <div className="page-container glass edu-page">
      <h2 className="page-title">Education</h2>

      {/* Top Header Card */}
      <div className="edu-header about-card">
        <div className="badge badge-yellow">EDUCATION</div>
        <h2>Academic Journey</h2>
        <p>A concise overview of my formal education and foundational computer science studies.</p>
      </div>

      <div className="edu-layout">
        {/* Card 1: B.Tech */}
        <div className="about-card edu-detail-card">
          <div className="edu-top">
            <div>
              <h3 className="degree-title">B.Tech in Computer Science and Engineering</h3>
              <p className="university-name">Lovely Professional University, Jalandhar, Punjab</p>
              <p className="edu-years text-secondary">Aug 2021 – Present</p>
            </div>
          </div>

          <div className="pill cgpa-pill">
            (Pursuing)
          </div>

          <div className="subject-pills">
            <span className="pill pill-yellow">Data Structures</span>
            <span className="pill pill-blue">Algorithms</span>
            <span className="pill pill-pink">Operating Systems</span>
            <span className="pill pill-yellow">DBMS</span>
            <span className="pill pill-blue">Computer Networks</span>
          </div>
        </div>

        {/* Card 2: 12th */}
        <div className="about-card edu-detail-card">
          <div className="edu-top">
            <div>
              <h3 className="degree-title">Intermediate (Class 12th) - Science</h3>
              <p className="university-name">Vishnu Bhagwan Public School, Prayagraj, UP</p>
              <p className="edu-years text-secondary">Apr 2020 – Mar 2021</p>
            </div>
          </div>

          <div className="subject-pills">
            <span className="pill pill-yellow">Physics</span>
            <span className="pill pill-blue">Chemistry</span>
            <span className="pill pill-pink">Mathematics</span>
            <span className="pill pill-yellow">English</span>
            <span className="pill pill-blue">Computer Science</span>
            <span className="pill pill-blue">Physical Education</span>
          </div>
        </div>

        {/* Card 3: 10th */}
        <div className="about-card edu-detail-card">
          <div className="edu-top">
            <div>
              <h3 className="degree-title">Matriculation (Class 10th)</h3>
              <p className="university-name">Army Public School, Prayagraj, UP</p>
              <p className="edu-years text-secondary">Apr 2018 – Mar 2019</p>
            </div>
          </div>

          <div className="subject-pills">
            <span className="pill pill-yellow">Science</span>
            <span className="pill pill-blue">Mathematics</span>
            <span className="pill pill-pink">Social Studies</span>
            <span className="pill pill-yellow">English</span>
            <span className="pill pill-blue">Computer Science</span>
            <span className="pill pill-yellow">Hindi</span>
          </div>
        </div>
      </div>

      <style>{`
        .edu-page {
          max-width: 1200px; /* Increased to allow wider cards */
        }

        .edu-header {
          margin-bottom: 30px;
          text-align: left;
          padding: 30px 40px;
        }

        .edu-header h2 {
          font-size: 2.2rem;
          color: #fff;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .edu-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .badge-yellow {
          background: rgba(250, 204, 21, 0.15);
          color: #facc15;
          border: 1px solid rgba(250, 204, 21, 0.3);
        }

        .edu-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          align-items: stretch;
        }

        .about-card {
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(147, 51, 234, 0.5);
          box-shadow: 0 15px 35px rgba(0,0,0, 0.4), 0 0 20px rgba(107, 33, 168, 0.2);
          background: rgba(30, 30, 30, 0.6);
        }

        .edu-detail-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .degree-title {
          font-size: 1.6rem;
          color: #fff;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .university-name {
          font-size: 1.15rem;
          color: #e0e0e0;
          margin-bottom: 4px;
        }

        .edu-years {
          font-size: 0.95rem;
        }

        .text-secondary {
          color: var(--text-secondary);
        }

        .pill {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .cgpa-pill {
          align-self: flex-start;
          background: rgba(74, 222, 128, 0.15);
          color: #4ade80;
          border: 1px solid rgba(74, 222, 128, 0.3);
        }

        .subject-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 10px;
        }

        .pill-yellow {
          background: rgba(250, 204, 21, 0.1);
          color: #facc15;
          border: 1px solid rgba(250, 204, 21, 0.2);
        }

        .pill-blue {
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa;
          border: 1px solid rgba(96, 165, 250, 0.2);
        }

        .pill-pink {
          background: rgba(244, 114, 182, 0.1);
          color: #f472b6;
          border: 1px solid rgba(244, 114, 182, 0.2);
        }

        /* Color-coded edges for columns, matching the skills style */
        .edu-detail-card:nth-child(1) { border-left: 4px solid #4ade80; }
        .edu-detail-card:nth-child(2) { border-left: 4px solid #facc15; }
        .edu-detail-card:nth-child(3) { border-left: 4px solid #60a5fa; }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .edu-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .edu-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;
