import React from 'react';
import { 
  Code, 
  Smartphone, 
  Brain, 
  ShieldCheck, 
  Database, 
  Wrench, 
  Languages, 
  Users,
  Activity,
  Zap,
  Layers,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "LANGUAGES",
      icon: <Languages size={28} />,
      color: "#4ade80",
      skills: ["JAVASCRIPT & TYPESCRIPT", "JAVA & KOTLIN", "PYTHON", "HTML5 & CSS3", "SQL (SQLITE/POSTGRESQL)"],
      size: "medium"
    },
    {
      title: "WEB DEVELOPMENT",
      icon: <Code size={28} />,
      color: "#facc15",
      skills: ["REACT 19 & VITE", "REACT ROUTER 7", "TAILWIND CSS", "FRAMER MOTION", "BOOTSTRAP 5", "AXIOS / REACT-TOASTIFY"],
      size: "large"
    },
    {
      title: "MOBILE & ANDROID",
      icon: <Smartphone size={28} />,
      color: "#60a5fa",
      skills: ["ANDROID SDK (API 36)", "JETPACK COMPOSE", "MATERIAL DESIGN 3", "NAVIGATION COMPOSE", "GRADLE", "VIEWMODEL / COROUTINES"],
      size: "large"
    },
    {
      title: "BACKEND & API",
      icon: <Database size={28} />,
      color: "#f472b6",
      skills: ["NODE.JS & EXPRESS", "SPRING BOOT", "FLASK & FASTAPI", "MONGODB & MONGOOSE", "JWT / BCRYPTJS", "CLOUDINARY / WEBSOCKET"],
      size: "medium"
    },
    {
      title: "AI & GUI SYSTEMS",
      icon: <Brain size={28} />,
      color: "#a855f7",
      skills: ["YOLOV8 & OPENCV", "PYTORCH / ML PIPELINES", "GEMINI AI INTEGRATION", "JAVA SWING / FLATLAF", "CHART.JS / GOOGLE MAPS API"],
      size: "large"
    },
    {
      title: "QUALITY ASSURANCE",
      icon: <ShieldCheck size={28} />,
      color: "#00aa55",
      skills: ["SELENIUM AUTOMATION", "PLAYWRIGHT", "JUNIT & JMETER", "ESPRESSO TESTING", "REST API VALIDATION"],
      size: "medium"
    },
    {
      title: "TOOLS & DEV OPS",
      icon: <Wrench size={28} />,
      color: "#f87171",
      skills: ["GIT & GITHUB", "VS CODE / INTELLIJ IDEA", "POSTMAN", "DOCKER", "JWT AUTH LOGIC", "DOTENV / CORS"],
      size: "small"
    },
    {
      title: "SOFT SKILLS",
      icon: <Users size={28} />,
      color: "#fb923c",
      skills: ["TECHNICAL COMMUNICATION", "SYSTEM ARCHITECTURE", "PROBLEM SOLVING", "TEAM COLLABORATION"],
      size: "small"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="page-container-manga skills-page">
      <h2 className="page-title">POWERS & ABILITIES</h2>
      
      {/* Top Header Panel */}
      <div className="skills-header-manga">
        <div className="sfx-badge floating">WHOOSH!</div>
        <div className="header-content-manga">
          <h2 className="header-title-manga">THE ARCHITECT'S ARSENAL</h2>
          <p className="header-desc-manga">
            FROM HIGH-PERFORMANCE WEB ECOSYSTEMS TO INTELLIGENT AI SURVEILLANCE... 
            HERE IS THE FULL TECH STACK I COMMAND.
          </p>
        </div>
        <div className="speed-lines-header"></div>
      </div>

      <motion.div 
        className="skills-grid-manga"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            className={`skill-panel-manga ${cat.size}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 0.5 : -0.5 }}
          >
            <div className="panel-accent-bar" style={{ background: cat.color }}></div>
            <div className="panel-header-manga">
              <div className="icon-box-manga" style={{ borderColor: cat.color }}>
                {cat.icon}
              </div>
              <h3 className="panel-title-manga">{cat.title}</h3>
            </div>
            
            <ul className="skill-list-manga">
              {cat.skills.map((skill, i) => (
                <li key={i}>
                  <Zap size={14} className="skill-bullet" />
                  {skill}
                </li>
              ))}
            </ul>

            <div className="panel-decoration-ink"></div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .skills-page {
          background: #fff;
          max-width: 1500px;
          margin: 0 auto;
          width: 98%;
          padding: 60px 40px;
          position: relative;
        }

        .skills-header-manga {
          margin-bottom: 60px;
          border: 4px solid #000;
          padding: 40px;
          background: #fff;
          position: relative;
          box-shadow: 15px 15px 0 #000;
          overflow: hidden;
        }

        .sfx-badge {
          position: absolute;
          top: -15px;
          left: -15px;
          background: #ff0033;
          color: #fff;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          padding: 5px 20px;
          border: 3px solid #000;
          transform: rotate(-10deg);
          z-index: 5;
        }

        .header-title-manga {
          font-family: 'Bangers', cursive;
          font-size: 4rem;
          color: #000;
          line-height: 1;
          margin-bottom: 10px;
          -webkit-text-stroke: 1.5px #000;
        }

        .header-desc-manga {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.4rem;
          color: #333;
          max-width: 800px;
        }

        .speed-lines-header {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 80px,
            rgba(0,0,0,0.03) 80px,
            rgba(0,0,0,0.03) 81px
          );
          pointer-events: none;
        }

        .skills-grid-manga {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .skill-panel-manga {
          background: #fff;
          border: 4px solid #000;
          padding: 30px;
          position: relative;
          box-shadow: 10px 10px 0 #000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .skill-panel-manga.large { grid-column: span 2; }
        @media (max-width: 900px) { .skill-panel-manga.large { grid-column: span 1; } }

        .panel-accent-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 10px;
          border-bottom: 3px solid #000;
        }

        .panel-header-manga {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
          margin-top: 10px;
        }

        .icon-box-manga {
          width: 55px; height: 55px;
          border: 3px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          transform: rotate(-5deg);
        }

        .panel-title-manga {
          font-family: 'Bangers', cursive;
          font-size: 2.2rem;
          color: #000;
          letter-spacing: 1px;
        }

        .skill-list-manga {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        
        @media (max-width: 600px) {
          .skill-list-manga { grid-template-columns: 1fr; }
        }

        .skill-list-manga li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #222;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .skill-bullet {
          color: #ffcc00;
          flex-shrink: 0;
        }

        .panel-decoration-ink {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 60px;
          height: 60px;
          background: rgba(0,0,0,0.03);
          transform: rotate(45deg);
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-10px) rotate(-15deg); }
        }

        @media (max-width: 768px) {
          .header-title-manga { font-size: 2.5rem; }
          .skills-page { padding: 30px 15px; }
        }
      `}</style>
    </div>
  );
};

export default Skills;
