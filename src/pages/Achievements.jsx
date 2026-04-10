const Achievements = () => {
  const certifications = [
    {
      title: "ORACLE DATA PLATFORM 2025 CERTIFIED FOUNDATIONS ASSOCIATE",
      issuer: "ORACLE",
      issued: "MAR 2026",
      platform: "ORACLE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtVfByN7kOqYqP3Z6Lh6s5M7o4_8M9_O3-A&s",
      link: "https://drive.google.com/file/d/1klri2vYQTX4mBETpnfs_mStKc4L88fKv/view?usp=drive_link"
    },
    {
      title: "ORACLE CLOUD INFRASTRUCTURE 2025 CERTIFIED AI FOUNDATIONS ASSOCIATE",
      issuer: "ORACLE",
      issued: "APR 2026",
      platform: "ORACLE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtVfByN7kOqYqP3Z6Lh6s5M7o4_8M9_O3-A&s",
      link: "https://drive.google.com/file/d/1kbBiscNmtBv0cTbFgKY0psqgU2in-TMk/view?usp=drive_link"
    },
    {
      title: "PRIVACY AND SECURITY IN SOCIAL MEDIA",
      issuer: "NPTEL",
      issued: "NOV 2025",
      platform: "NPTEL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtVfByN7kOqYqP3Z6Lh6s5M7o4_8M9_O3-A&s",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS117S145870213010337429"
    },
    {
      title: "JAVA & DATA STRUCTURES AND ALGORITHMS",
      issuer: "CIPHERSCHOOLS",
      issued: "JUN 2024",
      platform: "CIPHERSCHOOLS",
      logo: "https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b979313.png",
      link: "https://www.cipherschools.com/certificate/preview?id=6886ece6ca64e035786b28ab"
    },
    {
      title: "JAVA PROGRAMMING",
      issuer: "HACKERRANK",
      issued: "JUN 2024",
      platform: "HACKERRANK",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      link: "https://www.hackerrank.com/certificates/0848bae5b1da"
    },
    {
      title: "PROGRAMMING IN C#",
      issuer: "LPU",
      issued: "APR 2024",
      platform: "UNIVERSITY",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Lovely_Professional_University_logo.png/220px-Lovely_Professional_University_logo.png",
      credentialId: "33aO4dP70Q80n8co6",
      link: "#"
    },
    {
      title: "PYTHON: PROGRAMMING BEGINNER TO ADVANCED",
      issuer: "UDEMY",
      issued: "FEB 2024",
      platform: "UDEMY",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "https://www.udemy.com/certificate/UC-c3ba5c8c-ccfb-44be-b7e9-6bc3b9971f88/"
    },
    {
      title: "DBMS (DATABASE MANAGEMENT SYSTEMS)",
      issuer: "UDEMY",
      issued: "FEB 2024",
      platform: "UDEMY",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "https://www.udemy.com/certificate/UC-c6c0ff91-88d3-491b-b075-9edd9d955090/"
    },
    {
      title: "MASTERING C++ LANGUAGE",
      issuer: "UDEMY",
      issued: "FEB 2024",
      platform: "UDEMY",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "https://www.udemy.com/certificate/UC-c9c4a8f6-6cfc-4f57-9b3c-0e9809e5227c/"
    },
    {
      title: "ADOBE PREMIERE PRO MASTERCLASS",
      issuer: "UDEMY",
      issued: "FEB 2024",
      platform: "UDEMY",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "https://www.udemy.com/certificate/UC-22ae9890-13b3-46c0-8d08-b6346ee1c310/"
    },
    {
      title: "RESPONSIVE WEB DESIGN",
      issuer: "FREECODECAMP",
      issued: "SEP 2023",
      platform: "FREECODECAMP",
      logo: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
      link: "https://freecodecamp.org/certification/12306484/responsive-web-design"
    }
  ];

  return (
    <div className="page-container-comic achievements-page">
      <h2 className="page-title-comic">ACHIEVEMENTS</h2>
      
      <div className="achievements-intro-comic">
        <div className="manga-panel hero-achievement-panel">
          <div className="sfx-text-comic">BAM!</div>
          <h3 className="section-title-comic">MILESTONES & RECOGNITION</h3>
          <p className="comic-text-tagline">
            "EQUIPPING THE CORE WITH THE TOOLS OF THE FUTURE! VALIDATING EACH MISSION THROUGH RIGOROUS TRAINING & MASTERY."
          </p>
          <p className="comic-text-sub">A CHRONICLE OF MY TECHNICAL TRIUMPHS AND ACADEMIC CONQUESTS.</p>
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
          <h3 className="sub-header-comic">TECHNICAL CREDENTIALS</h3>
          <div className="cert-grid-comic">
            {certifications.map((cert, index) => (
              <div key={index} className="manga-panel cert-card-comic">
                <div className="platform-tab">{cert.platform}</div>
                <div className="card-inner-overlay"></div>
                <div className="cert-logo-comic">
                  <img src={cert.logo} alt={cert.issuer} />
                </div>
                <div className="cert-details-comic">
                  <h4 className="cert-name-comic">{cert.title}</h4>
                  <p className="cert-issuer-comic">{cert.issuer} | {cert.issued}</p>
                  {cert.credentialId && (
                    <p className="cert-id-badge">ID: {cert.credentialId}</p>
                  )}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-link-comic"
                  >
                    VIEW CREDENTIAL ↗
                  </a>
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
          letter-spacing: 2px;
        }

        .comic-text-tagline {
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          color: var(--accent);
          max-width: 800px;
          margin: 0 auto 20px;
          line-height: 1.2;
          background: #000;
          color: #fff;
          padding: 10px 20px;
          transform: rotate(-1deg);
          box-shadow: 8px 8px 0 var(--accent);
        }

        .comic-text-sub {
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          font-size: 1.2rem;
          color: #444;
          text-transform: uppercase;
        }

        .main-grid-comic {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.8fr 2fr;
          gap: 40px;
          align-items: start;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
          position: relative;
          padding: 40px;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
          background: #fff;
          padding: 20px;
          border: 4px solid #000;
          box-shadow: 8px 8px 0 #000;
          transition: 0.2s;
        }

        .feat-list-comic li:hover {
          transform: translate(-3px, -3px);
          box-shadow: 12px 12px 0 var(--accent);
        }

        .feat-icon { font-size: 2.5rem; }

        .feat-list-comic p {
          font-family: 'Comic Neue', cursive;
          font-weight: 800;
          font-size: 1rem;
          color: #000;
          line-height: 1.3;
        }

        .sub-header-comic {
          font-family: 'Bangers', cursive;
          font-size: 3rem;
          color: #000;
          margin-bottom: 40px;
          background: #fff;
          border: 4px solid #000;
          padding: 5px 20px;
          box-shadow: 6px 6px 0 var(--accent);
          display: inline-block;
          transform: rotate(2deg);
        }

        .cert-grid-comic {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .cert-card-comic {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 30px;
          overflow: hidden;
        }

        .platform-tab {
          position: absolute;
          top: 0;
          right: 0;
          background: #000;
          color: #fff;
          padding: 2px 12px;
          font-family: 'Bangers', cursive;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        .cert-card-comic:hover {
          transform: scale(1.03) rotate(-1deg);
          box-shadow: 15px 15px 0 var(--accent);
          border-color: var(--accent);
          z-index: 10;
        }

        .cert-card-comic::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 60%,
            transparent 100%
          );
          transform: rotate(25deg);
          transition: 0.5s;
          pointer-events: none;
        }

        .cert-card-comic:hover::after {
          left: 100%;
          top: 100%;
        }

        .cert-logo-comic {
          width: 80px;
          height: 80px;
          background: #fff;
          border: 4px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: 5px 5px 0 #000;
          margin-bottom: 10px;
        }

        .cert-logo-comic img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .cert-name-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.6rem;
          color: #000;
          line-height: 1.1;
          margin-bottom: 5px;
        }

        .cert-issuer-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 800;
          font-size: 1rem;
          color: #555;
          margin-bottom: 5px;
        }

        .cert-id-badge {
          font-family: 'Courier New', monospace;
          background: #f1f5f9;
          border: 1px dashed #000;
          padding: 3px 8px;
          font-size: 0.8rem;
          color: #444;
          width: fit-content;
          margin-bottom: 15px;
        }

        .cert-link-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #fff;
          background: #000;
          padding: 8px 15px;
          text-decoration: none;
          margin-top: auto;
          text-align: center;
          transition: 0.2s;
        }

        .cert-link-comic:hover {
          background: var(--accent);
          transform: translate(-3px, -3px);
          box-shadow: 5px 5px 0 #000;
        }

        @media (max-width: 1100px) {
          .main-grid-comic { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .cert-grid-comic { grid-template-columns: 1fr; }
          .section-title-comic { font-size: 2.8rem; }
          .comic-text-tagline { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};
export default Achievements;
