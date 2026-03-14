const About = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="card-header">
            <h3>Profile & Objective</h3>
          </div>
          <div className="card-body">
            <p className="highlight-text">
              Hello! I'm <strong>Aditya Maurya</strong>, a highly motivated Computer Science student and a Full-Stack MERN Developer based in India.
            </p>
            <p>
              Currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University, I have a profound passion for building robust web applications, exploring system design architectures, and solving complex algorithmic problems.
            </p>
            <p>
              I specialize in developing scalable applications using <strong>MongoDB, Express.js, React, and Node.js</strong>. My primary focus is on writing clean, accessible code, designing modern user-friendly interfaces, and leveraging cutting-edge web technologies to deliver impactful products.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          margin-top: 20px;
          width: 100%;
        }
        .about-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 35px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .about-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 30px rgba(0,0,0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }
        .card-header {
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .card-header h3 {
          font-size: 1.6rem;
          color: #fff;
          font-weight: 600;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .card-body p {
          color: #cccccc;
          line-height: 1.8;
          font-size: 1.1rem;
        }
        .highlight-text {
          font-size: 1.25rem !important;
          color: var(--accent-light) !important;
          font-weight: 500;
        }
        .highlight-text strong {
          color: #fff;
        }
      `}</style>
    </div>
  );
};
export default About;
