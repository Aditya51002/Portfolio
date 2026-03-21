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
      details: "This project provides a comprehensive solution for NGOs to manage their online presence. Built with the MERN stack, it includes features for managing initiatives, processing donations securely, and facilitating partnerships. Cloudinary is used for media management, providing optimized image delivery, while JWT ensures robust authentication.",
      github: "https://github.com/Aditya51002",
      demo: "#"
    },
    {
      title: "Library Management System",
      date: "Jun’25 - Sep’2025",
      tech: "Java, Java Swing, MongoDB, JWT",
      description: "A modern desktop application streamlining book handling and user management with a gradient-based role-controlled UI.",
      details: "A comprehensive desktop application designed to modernize traditional library operations. Features include a sleek gradient-based UI, role-based access control (Admin/Librarian/User), and robust data handling utilizing MongoDB. Essential functions like book issuance, return tracking, and inventory management are fully automated.",
      github: "https://github.com/Aditya51002",
      demo: "#"
    },
    {
      title: "AI Creative Writing Assistant",
      date: "Feb’25 - Mar’2025",
      tech: "HTML, CSS(Tailwind), JS, Python, Google AI API",
      description: "An AI-powered creative assistant supporting writers with story ideas and plot development through a unique manga-inspired interface.",
      details: "Leveraging the Google AI API, this application acts as a digital muse for writers. It features a unique manga-style user interface built with Tailwind CSS. It helps users brainstorm story ideas, develop intricate plots, and overcome writer's block by generating intelligent, context-aware writing prompts.",
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
    <div className="page-container glass projects-page">
      <h2 className="page-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-header">
              <h3>{project.title}</h3>
              <span className="date-badge">{project.date}</span>
            </div>
            
            <div className="tech-stack">
              {project.tech.split(', ').map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>

            <p className="project-desc">{project.description}</p>
            
            <div className="card-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="link-btn github" onClick={(e) => e.stopPropagation()}>
                  <Github size={18} /> Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn demo" onClick={(e) => e.stopPropagation()}>
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content glass"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal-btn" 
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <span className="modal-date">{selectedProject.date}</span>
              </div>

              <div className="tech-stack modal-tech">
                {selectedProject.tech.split(', ').map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>

              <div className="modal-body">
                <h3>About the Project</h3>
                <p>{selectedProject.details || selectedProject.description}</p>
              </div>

              <div className="modal-actions">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="link-btn github">
                    <Github size={20} /> View Source Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="link-btn demo">
                    <ExternalLink size={20} /> Explore Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 30px rgba(0,0,0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          gap: 10px;
        }

        .card-header h3 {
          font-size: 1.4rem;
          color: #fff;
          font-weight: 600;
          line-height: 1.3;
        }

        .date-badge {
          font-size: 0.85rem;
          background: rgba(107, 33, 168, 0.2);
          color: var(--accent-light);
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .tech-pill {
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.1);
          color: #ddd;
          padding: 4px 12px;
          border-radius: 6px;
        }

        .project-desc {
          font-size: 1.05rem;
          color: #aaa;
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 25px;
        }

        .card-links {
          display: flex;
          gap: 15px;
          margin-top: auto;
        }

        .link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .link-btn.github {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .link-btn.github:hover {
          background: #fff;
          color: #000;
        }

        .link-btn.demo {
          background: var(--accent);
          color: #fff;
          border: 1px solid var(--accent);
        }

        .link-btn.demo:hover {
          background: var(--accent-light);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 800px; /* Slightly wider for better text flow */
          max-height: 90vh;
          overflow-y: auto;
          overflow-x: hidden; /* Prevent horizontal scroll inside modal */
          background: rgba(10, 15, 25, 0.9); /* More solid for readability */
          border: 1px solid var(--accent-glow);
          border-radius: 28px;
          padding: 50px;
          position: relative;
          box-shadow: 0 30px 70px rgba(0,0,0, 0.8), 0 0 40px rgba(14, 165, 233, 0.1);
        }

        /* Custom scrollbar for modal content - match global style */
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: var(--accent-light);
        }

        .close-modal-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-modal-btn:hover {
          background: var(--accent);
          transform: rotate(90deg);
        }

        .modal-header {
          margin-bottom: 20px;
          padding-right: 40px; /* Space for close button */
        }

        .modal-header h2 {
          font-size: 2.2rem;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .modal-date {
          display: inline-block;
          font-size: 0.9rem;
          background: rgba(107, 33, 168, 0.3);
          color: var(--accent-light);
          padding: 5px 12px;
          border-radius: 20px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .modal-tech {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .modal-body {
          margin-bottom: 40px;
        }

        .modal-body h3 {
          font-size: 1.3rem;
          color: var(--accent-light);
          margin-bottom: 15px;
        }

        .modal-body p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ddd;
        }

        .modal-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .modal-actions .link-btn {
          padding: 12px 24px;
          font-size: 1.05rem;
        }

        @media (max-width: 600px) {
          .modal-content {
            padding: 25px;
          }
          
          .modal-header h2 {
            font-size: 1.8rem;
          }
          
          .modal-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
export default Projects;
