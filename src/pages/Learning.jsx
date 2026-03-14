const Learning = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">Current Focus</h2>
      <div className="content-wrapper">
        <p>I am continuously exploring new technologies to stay ahead of the curve and refine my technical stack. My current learning phase is focused on:</p>
        
        <div className="learning-item">
          <h3>Advanced System Design</h3>
          <p>Diving deep into distributed systems, microservices architectures, and understanding how to build highly scalable and fault-tolerant backends.</p>
        </div>

        <div className="learning-item">
          <h3>Next.js & Server-Side Rendering</h3>
          <p>Transitioning from standard React Single Page Applications (SPAs) to robust, SEO-friendly frameworks like Next.js for enterprise-level frontend development.</p>
        </div>

        <div className="learning-item">
          <h3>DevOps & Cloud Deployment</h3>
          <p>Expanding my knowledge on Docker containerization, CI/CD pipelines, and cloud computing platforms like AWS to streamline deployment workflows.</p>
        </div>
      </div>

      <style>{`
        .learning-item {
          margin-top: 25px;
          background: rgba(255, 255, 255, 0.03);
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid var(--accent);
          transition: transform 0.3s ease;
        }

        .learning-item:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.05);
          border-left-color: var(--accent-light);
        }

        .learning-item h3 {
          font-size: 1.4rem;
          color: var(--accent-light);
          margin-bottom: 8px;
        }

        .learning-item p {
          color: #cccccc;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
export default Learning;
