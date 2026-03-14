import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Arv-Foundation",
      date: "Jan’25 - Present",
      tech: "MERN, MongoDB, Cloudinary, JWT",
      description: "A full-stack platform empowering NGOs with public engagement tools for initiatives, partnerships, and donations.",
      github: "https://github.com/Aditya51002",
      demo: "#"
    },
    {
      title: "Library Management System",
      date: "Jun’25 - Sep’2025",
      tech: "Java, Java Swing, MongoDB, JWT",
      description: "A modern desktop application streamlining book handling and user management with a gradient-based role-controlled UI.",
      github: "https://github.com/Aditya51002",
      demo: "#"
    },
    {
      title: "AI Creative Writing Assistant",
      date: "Feb’25 - Mar’2025",
      tech: "HTML, CSS(Tailwind), JS, Python, Google AI API",
      description: "An AI-powered creative assistant supporting writers with story ideas and plot development through a unique manga-inspired interface.",
    },
    {
      title: "E-Commerce Platform",
      date: "2024",
      tech: "React, Node.js, Express, MongoDB",
      description: "A robust e-commerce application featuring product catalog management, user authentication, and shopping cart functionality.",
      github: "https://github.com/Aditya51002/E-Commerce",
      demo: "#"
    },
    {
      title: "Food Delivery App",
      date: "2024",
      tech: "MERN Stack, Redux",
      description: "A seamless food delivery platform enabling users to browse restaurants, customize orders, and track deliveries efficiently.",
      github: "https://github.com/Aditya51002/Food-Delivery",
      demo: "#"
    },
    {
      title: "Hospital Management",
      date: "2024",
      tech: "Java, MySQL, JDBC",
      description: "A comprehensive management system designed to streamline hospital administration, patient records, and appointment scheduling.",
      github: "https://github.com/Aditya51002/Hospital-Mangement",
      demo: "#"
    },
    {
      title: "AI Crop Recommendation",
      date: "2024",
      tech: "Python, Machine Learning, Flask",
      description: "An intelligent predictive system leveraging ML models to recommend suitable crops based on soil metrics and environmental factors.",
      github: "https://github.com/Aditya51002/AI-Based-Crop-Recommendation-System-",
      demo: "#"
    }
  ];

  return (
    <div className="page-container glass">
      <h2 className="page-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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
              <a href={project.github} target="_blank" rel="noreferrer" className="link-btn github">
                <Github size={18} /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn demo">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

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
      `}</style>
    </div>
  );
};
export default Projects;
