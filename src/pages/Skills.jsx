const Skills = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Languages</h3>
          <p>Java, C++, Python, JavaScript, Kotlin, HTML/CSS</p>
        </div>
        <div className="skill-card">
          <h3>Frameworks</h3>
          <p>Android SDK, Express.js, React.js, Node.js, Flask, Spring Boot</p>
        </div>
        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, Android Studio, VS Code, IntelliJ IDEA, Postman, Docker</p>
        </div>
        <div className="skill-card">
          <h3>Databases</h3>
          <p>MongoDB, SQL</p>
        </div>
        <div className="skill-card">
          <h3>CS Fundamentals</h3>
          <p>Data Structures & Algorithms, OOP, Operating Systems, Computer Networks</p>
        </div>
        <div className="skill-card">
          <h3>Soft Skills</h3>
          <p>Analytical Thinking, Team Collaboration, Adaptability, Communication, Time Management</p>
        </div>
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 20px;
          width: 100%;
        }
        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 25px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 30px rgba(0,0,0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }
        .skill-card h3 {
          color: var(--accent-light);
          margin-bottom: 12px;
          font-size: 1.4rem;
          font-weight: 600;
        }
        .skill-card p {
          color: #ddd;
          font-size: 1.05rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
export default Skills;
