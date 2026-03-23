const Achievements = () => {
  const certifications = [
    {
      title: "PRIVACY AND SECURITY IN SOCIAL MEDIA",
      issuer: "NPTEL",
      issued: "NOV 2025",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtVfByN7kOqYqP3Z6Lh6s5M7o4_8M9_O3-A&s",
      link: "#"
    },
    {
      title: "JAVA DATA STRUCTURES & ALGORITHMS",
      issuer: "CIPHERSCHOOLS",
      issued: "JUN 2025",
      logo: "https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b979313.png",
      link: "#"
    },
    {
      title: "JAVA PROGRAMMING",
      issuer: "HACKERRANK",
      issued: "JUN 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      link: "#"
    },
    {
      title: "PROGRAMMING IN C# CERTIFICATION",
      issuer: "LPU",
      issued: "APR 2024",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Lovely_Professional_University_logo.png/220px-Lovely_Professional_University_logo.png",
      link: "#"
    },
    {
      title: "PYTHON 3: BEGINNER TO ADVANCED",
      issuer: "UDEMY",
      issued: "FEB 2024",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "#"
    },
    {
      title: "DATABASE MANAGEMENT SYSTEMS",
      issuer: "UDEMY",
      issued: "FEB 2024",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "#"
    },
    {
      title: "RESPONSIVE WEB DESIGN",
      issuer: "FREECODECAMP",
      issued: "SEP 2023",
      logo: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
      link: "#"
    }
  ];

  return (
    <div className="page-container-comic achievements-page">
      <h2 className="page-title-comic">ACHIEVEMENTS</h2>
      
      <div className="achievements-intro-comic">
        <div className="manga-panel hero-achievement-panel">
          <div className="sfx-text-comic">BAM!</div>
          <h3 className="section-title-comic">MILESTONES & RECOGNITION</h3>
          <p className="comic-text">A CHRONICLE OF MY TECHNICAL TRIUMPHS AND ACADEMIC CONQUESTS.</p>
        </div>
      </div>

      <div className="main-grid-comic">
        {/* Key Achievements */}
        <div className="manga-panel key-achievements-panel">
          <div className="panel-label-comic">TOP FEATS</div>
          <ul className="feat-list-comic">
            <li>
              <span className="feat-icon">🏆</span>
              <p>SOLVED 100+ DSA PROBLEMS ACROSS MULTIPLE PLATFORMS, MASTERING THE ART OF ALGORITHMIC CRAFT.</p>
            </li>
            <li>
              <span className="feat-icon">🏆</span>
              <p>ACHIEVED TOP PERFORMER STATUS IN A WEB HACKATHON, DOMINATING THE FRONTEND ARENA.</p>
            </li>
          </ul>
        </div>

        {/* Certifications Grid */}
        <div className="cert-section-comic">
          <h3 className="sub-header-comic">CERTIFICATIONS</h3>
          <div className="cert-grid-comic">
            {certifications.map((cert, index) => (
              <div key={index} className="manga-panel cert-card-comic">
                <div className="cert-logo-comic">
                  <img src={cert.logo} alt={cert.issuer} />
                </div>
                <div className="cert-details-comic">
                  <h4 className="cert-name-comic">{cert.title}</h4>
                  <p className="cert-issuer-comic">{cert.issuer} | {cert.issued}</p>
                  <a href={cert.link} className="cert-link-comic">VIEW CREDENTIAL ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .achievements-section, .certifications-section {
          margin-top: 40px;
          width: 100%;
        }

        .section-header {
          font-size: 1.8rem;
          color: #fff;
          margin-bottom: 25px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 10px;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .achievement-item {
          display: flex;
          gap: 15px;
          padding: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--surface-border);
          box-shadow: var(--shadow-lg), var(--surface-inner-glow);
          border-radius: 12px;
          color: #ccc;
          line-height: 1.6;
        }

        .bullet { font-size: 1.2rem; }

        .certifications-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .cert-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          border-radius: 16px;
          background: var(--surface-bg);
          border: 1px solid var(--surface-border);
          box-shadow: var(--shadow-lg), var(--surface-inner-glow);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cert-card:hover {
          background: #1e293b;
          border-color: var(--accent);
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0,0,0, 0.4), 0 0 20px var(--accent-glow);
        }

        .cert-logo-container {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .cert-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cert-title {
          font-size: 1.2rem;
          color: #fff;
          font-weight: 600;
        }

        .cert-issuer {
          font-size: 1rem;
          color: #fff;
          opacity: 0.9;
        }

        .cert-issued, .cert-id {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .show-credential-btn {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 20px;
          border: 1.5px solid rgba(255, 255, 255, 0.7);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .show-credential-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
          transform: translateY(-2px);
        }

        .arrow-icon { font-size: 0.8rem; }

        @media (max-width: 768px) {
          .cert-card {
            flex-direction: column;
            gap: 15px;
          }
          .cert-logo-container {
            width: 50px;
            height: 50px;
          }
           .cert-title { font-size: 1.1rem; }
        }
      `}</style>
    </div>
  );
};
export default Achievements;
