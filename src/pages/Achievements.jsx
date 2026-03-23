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
        .achievements-page {
          padding: 60px 40px;
          min-height: 100vh;
        }

        .achievements-intro-comic {
          max-width: 1200px;
          margin: 0 auto 60px;
        }

        .hero-achievement-panel {
          text-align: center;
          padding: 60px;
          background-image: radial-gradient(circle, #eee 1.5px, transparent 1.5px);
          background-size: 20px 20px;
        }

        .section-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 4rem;
          color: #000;
          margin-bottom: 20px;
        }

        .comic-text {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.4rem;
          color: #333;
        }

        .main-grid-comic {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          align-items: start;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
          position: relative;
          padding: 40px;
        }

        .panel-label-comic {
          position: absolute;
          top: -15px;
          left: 20px;
          background: #000;
          color: #fff;
          padding: 2px 15px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
        }

        .feat-list-comic {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .feat-list-comic li {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 20px;
          border: 3px solid #000;
          box-shadow: 5px 5px 0 #000;
        }

        .feat-icon { font-size: 2.5rem; }

        .feat-list-comic p {
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
          color: #000;
          line-height: 1.3;
        }

        .sub-header-comic {
          font-family: 'Bangers', cursive;
          font-size: 3rem;
          color: #000;
          margin-bottom: 30px;
          border-bottom: 5px solid #000;
          width: fit-content;
        }

        .cert-grid-comic {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .cert-card-comic {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 25px;
          transition: 0.2s;
        }

        .cert-card-comic:hover {
          transform: translate(-5px, -5px);
          box-shadow: 15px 15px 0 var(--accent);
          border-color: var(--accent);
        }

        .cert-logo-comic {
          width: 70px;
          height: 70px;
          background: #fff;
          border: 3px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          box-shadow: 4px 4px 0 #000;
        }

        .cert-logo-comic img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .cert-name-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.4rem;
          color: #000;
          line-height: 1.1;
        }

        .cert-issuer-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.9rem;
          color: #666;
        }

        .cert-link-comic {
          font-family: 'Bangers', cursive;
          font-size: 1rem;
          color: var(--accent-secondary);
          text-decoration: underline;
          margin-top: auto;
        }

        .cert-link-comic:hover {
          color: var(--accent);
        }

        @media (max-width: 1000px) {
          .main-grid-comic { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .cert-grid-comic { grid-template-columns: 1fr; }
          .section-title-comic { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};
export default Achievements;
