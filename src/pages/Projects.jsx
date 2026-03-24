import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Arv-Foundation",
      date: "Jan’25 - Present",
      tech: "MERN, MongoDB, Cloudinary, JWT",
      description: "A full-stack platform empowering NGOs with public engagement tools for initiatives, partnerships, and donations.",
      details: [
        "Built a full-stack NGO platform for Arv Foundation to manage outreach, engagement, and impact at scale.",
        "Developed a responsive frontend using React + Vite for initiatives, drives, gallery, and multilingual user experience.",
        "Engineered a secure backend with Node.js/Express + MongoDB to handle forms, applications, contributions, and dynamic content.",
        "Implemented role-based admin authentication with protected routes for safe content and operations management.",
        "Created an admin dashboard to manage website sections, images, volunteer/internship/partnership requests, and donation-related data.",
        "Structured the project for real-world deployment with clean APIs, modular architecture, and maintainable code practices."
      ],
      github: "https://github.com/Aditya51002/Arv-Foundation",
      demo: "#"
    },
    {
      title: "Library Management System",
      date: "Jun’25 - Sep’2025",
      tech: "Java, Java Swing, MongoDB, JWT",
      description: "A modern desktop application streamlining book handling and user management with a gradient-based role-controlled UI.",
      details: "A comprehensive desktop application designed to modernize traditional library operations. Features include a sleek gradient-based UI, role-based access control (Admin/Librarian/User), and robust data handling utilizing MongoDB. Essential functions like book issuance, return tracking, and inventory management are fully automated.",
      github: "https://github.com/Aditya51002/Library-Management-System",
      demo: "#"
    },
    {
      title: "AI Creative Writing Assistant",
      date: "Feb’25 - Mar’2025",
      tech: "HTML, CSS(Tailwind), JS, Python, Google AI API",
      description: "An AI-powered creative assistant supporting writers with story ideas and plot development through a unique manga-inspired interface.",
      details: "Leveraging the Google AI API, this application acts as a digital muse for writers. It features a unique manga-style user interface built with Tailwind CSS. It helps users brainstorm story ideas, develop intricate plots, and overcome writer's block by generating intelligent, context-aware writing prompts.",
      github: "https://github.com/Aditya51002/Ink-wise"
    },
    {
      title: "E-Commerce Platform",
      date: "2024",
      tech: "React, Node.js, Express, MongoDB",
      description: "A robust e-commerce application featuring product catalog management, user authentication, and shopping cart functionality.",
      details: "A fully functional e-commerce storefront. The platform includes secure user authentication, an intuitive product catalog, dynamic shopping cart functionality, and order processing. The backend is built with Express and Node.js, utilizing MongoDB for flexible data storage.",
      github: "https://github.com/Aditya51002/E-Commerce",
      demo: "#"
    },
    {
      title: "Food Delivery App",
      date: "2024",
      tech: "MERN Stack, Redux",
      description: "A seamless food delivery platform enabling users to browse restaurants, customize orders, and track deliveries efficiently.",
      details: "Designed to provide a smooth food ordering experience, this app allows users to browse local restaurants, view detailed menus, customize their orders, and track delivery status. Redux is utilized for complex state management across the application, ensuring a highly responsive UI.",
      github: "https://github.com/Aditya51002/Food-Delivery",
      demo: "#"
    },
    {
      title: "Hospital Management",
      date: "2024",
      tech: "Java, MySQL, JDBC",
      description: "A comprehensive management system designed to streamline hospital administration, patient records, and appointment scheduling.",
      details: "A core Java and JDBC-backed desktop application aimed at optimizing hospital workflows. It handles patient registration, appointment scheduling, and doctor availability tracking. The robust relational database design in MySQL ensures data integrity and fast retrieval of patient medical histories.",
      github: "https://github.com/Aditya51002/Hospital-Mangement",
      demo: "#"
    },
    {
      title: "AI Crop Recommendation",
      date: "2024",
      tech: "Python, Machine Learning, Flask",
      description: "An intelligent predictive system leveraging ML models to recommend suitable crops based on soil metrics and environmental factors.",
      details: "This machine learning project assists farmers by analyzing soil metrics (Nitrogen, Phosphorous, Potassium, pH) and environmental factors (rainfall, temperature) to predict the most profitable crop. It features a trained ML model deployed via a user-friendly Flask API.",
      github: "https://github.com/Aditya51002/AI-Based-Crop-Recommendation-System-",
      demo: "#"
    }
  ];

  return (
    <div className="page-container-comic projects-page">
      <h2 className="page-title">PROJECTS</h2>
      
      <div className="projects-grid-comic">
        {projects.map((project, index) => (
          <div 
            className="project-panel-comic" 
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <div className="sfx-text" style={{ top: '-10px', right: '10px' }}>NEW!</div>
            <div className="panel-header">
              <h3 className="panel-title">{project.title}</h3>
              <span className="panel-date">{project.date}</span>
            </div>
            
            <div className="panel-tech">
              {project.tech.split(', ').map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <p className="panel-desc">{project.description}</p>
            
            <div className="panel-actions">
              <button className="panel-btn primary">DETAILS</button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay-comic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-panel-comic"
              initial={{ scale: 0.8, rotate: 5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: -5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-panel-btn" onClick={() => setSelectedProject(null)}>×</button>

              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-date">{selectedProject.date}</p>
              
              <div className="modal-tech">
                {selectedProject.tech.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="modal-body">
                {Array.isArray(selectedProject.details) ? (
                  <ul className="modal-list">
                    {selectedProject.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{selectedProject.details || selectedProject.description}</p>
                )}
              </div>

              <div className="modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-link-btn">GITHUB</a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="modal-link-btn highlight">DEMO</a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .page-container-comic {
          padding: 40px;
          background: #fff;
          border: 4px solid #000;
          box-shadow: 15px 15px 0 #000;
          max-width: 1200px;
          width: 95%;
          margin: 0 auto;
        }

        .projects-grid-comic {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .project-panel-comic {
          border: 4px solid #000;
          padding: 30px;
          background: #fff;
          box-shadow: 8px 8px 0 #000;
          cursor: pointer;
          transition: transform 0.2s;
          position: relative;
        }

        .project-panel-comic:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0 var(--accent);
        }

        .panel-title {
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          color: #000;
          margin-bottom: 10px;
        }

        .panel-date {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 2px 10px;
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.8rem;
        }

        .panel-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 15px 0;
        }

        .tech-badge {
          border: 1.5px solid #000;
          padding: 2px 10px;
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.8rem;
          background: #f0f0f0;
        }

        .panel-desc {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          color: #444;
          line-height: 1.4;
          margin-bottom: 20px;
        }

        .panel-btn {
          width: 100%;
          border: 3px solid #000;
          padding: 10px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          cursor: pointer;
          background: #fff;
          transition: all 0.2s;
        }

        .panel-btn:hover {
          background: var(--accent);
          color: #fff;
        }

        .modal-overlay-comic {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-panel-comic {
          background: #fff;
          border: 6px solid #000;
          padding: 50px;
          max-width: 800px;
          width: 100%;
          box-shadow: 20px 20px 0 #000;
          position: relative;
        }

        .modal-title {
          font-family: 'Bangers', cursive;
          font-size: 3rem;
          -webkit-text-stroke: 1.5px #000;
        }

        .modal-link-btn {
          display: inline-block;
          border: 4px solid #000;
          padding: 10px 30px;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          text-decoration: none;
          color: #000;
          margin-right: 20px;
        }

        .modal-link-btn.highlight {
          background: var(--accent);
          color: #fff;
        }

        .close-panel-btn {
          position: absolute;
          top: 20px; right: 20px;
          background: #000;
          color: #fff;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .modal-body {
          margin: 30px 0;
          max-height: 50vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #000 #fff;
        }

        .modal-list {
          list-style: none;
          padding: 0;
        }

        .modal-list li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.4;
          text-align: left;
        }

        .modal-list li::before {
          content: '✔';
          color: var(--accent);
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
};
export default Projects;
