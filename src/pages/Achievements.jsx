import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const certifications = [
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      issued: "Nov 2025",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtVfByN7kOqYqP3Z6Lh6s5M7o4_8M9_O3-A&s", // Reliable NPTEL logo
      link: "#"
    },
    {
      title: "Java Data Structures and Algorithms with Java",
      issuer: "CipherSchools",
      issued: "Jun 2025",
      logo: "https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b979313.png", // Corrected CipherSchools logo
      link: "#"
    },
    {
      title: "Java programming",
      issuer: "HackerRank",
      issued: "Jun 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      link: "#"
    },
    {
      title: "Programming in C# Certification",
      issuer: "Lovely Professional University (LPU)",
      issued: "Apr 2024",
      credentialId: "33aO4dP70Q80n8co6",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Lovely_Professional_University_logo.png/220px-Lovely_Professional_University_logo.png",
      link: "#"
    },
    {
      title: "Learn to Code in Python 3: Programming beginner to advanced",
      issuer: "Udemy",
      issued: "Feb 2024",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "#"
    },
    {
      title: "DBMS",
      issuer: "Udemy",
      issued: "Feb 2024",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "#"
    },
    {
      title: "Mastering C++ Language",
      issuer: "Udemy",
      issued: "Jun 2024",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "#"
    },
    {
      title: "Adobe Premiere Pro Masterclass for Video Editing",
      issuer: "Udemy",
      issued: "Jun 2024",
      logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
      link: "#"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issued: "Sep 2023",
      logo: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="page-container glass">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="page-title"
      >
        Achievements & Certifications
      </motion.h2>

      <div className="achievements-section">
        <h3 className="section-header">Key Achievements</h3>
        <div className="achievements-list">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="achievement-item">
            <span className="bullet">🏆</span>
            <p>Solved 100+ DSA problems across multiple platforms, significantly enhancing algorithmic thinking and pattern recognition.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="achievement-item">
             <span className="bullet">🏆</span>
             <p>Achieved the title of Top Performer in a Web Hackathon.</p>
          </motion.div>
        </div>
      </div>

      <div className="certifications-section">
        <h3 className="section-header">Licenses & Certifications</h3>
        <motion.div 
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} className="cert-card glass">
              <div className="cert-logo-container">
                <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
              </div>
              <div className="cert-info">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-issued">Issued {cert.issued}</p>
                {cert.credentialId && <p className="cert-id">Credential ID {cert.credentialId}</p>}
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="show-credential-btn">
                   Show credential <span className="arrow-icon">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
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
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          position: relative;
        }

        .cert-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-light);
          transform: translateX(10px);
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
