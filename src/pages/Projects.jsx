import React, { useState } from 'react';
import { ExternalLink, Github, X, Code, Smartphone, ShieldCheck, Brain, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    {
      id: 'web',
      title: "CHAPTER 1: THE DIGITAL FRONTIER",
      subtitle: "WEB DEVELOPMENT",
      icon: <Code size={32} />,
      color: "#ff0033",
      sfx: "CLICK!",
      className: "web-section"
    },
    {
      id: 'android',
      title: "CHAPTER 2: POCKET UNIVERSE",
      subtitle: "ANDROID DEVELOPMENT",
      icon: <Smartphone size={32} />,
      color: "#0088cc",
      sfx: "SWIPE!",
      className: "android-section"
    },
    {
      id: 'testing',
      title: "CHAPTER 3: THE SHIELD OF QUALITY",
      subtitle: "SOFTWARE TESTING",
      icon: <ShieldCheck size={32} />,
      color: "#00aa55",
      sfx: "VERIFIED!",
      className: "testing-section"
    },
    {
      id: 'ai-gui',
      title: "CHAPTER 4: THE NEURAL NEXUS",
      subtitle: "AI & GUI SYSTEMS",
      icon: <Brain size={32} />,
      color: "#8800ff",
      sfx: "THINK!",
      className: "ai-gui-section"
    }
  ];

  const projects = [
    {
      title: "Arv-Foundation",
      category: "web",
      date: "Feb’25 - Present",
      tech: "React 19, Vite, React Router, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, Cloudinary/multer, Nodemailer, CORS, dotenv",
      description: "A full-stack platform empowering NGOs with public engagement tools for initiatives, partnerships, and donations.",
      details: [
        "Delivers a professional, mission-focused public platform that communicates the foundation’s impact through dynamic content, clear information hierarchy, and responsive user experience.",
        "Secures an admin-controlled management system using JWT-based authentication and protected routes, ensuring only authorized users can access operational dashboards.",
        "Implements a robust backend API layer with validated request handling and structured controller-route architecture for reliable data operations.",
        "Enables end-to-end admin workflows for content editing, media management, drive control, and application/contribution handling through authenticated CRUD actions.",
        "Maintains a production-ready development setup with separated frontend/backend services, environment-based configuration, and scalable project structure for continuous deployment."
      ],
      github: "https://github.com/Aditya51002/Arv-Foundation",
      demo: "#"
    },
    {
      title: "Food Delivery",
      category: "web",
      date: "Jan’26 - Feb’26",
      tech: "React, Vite, React Router, Axios, Tailwind CSS (frontend); Node.js, Express, MongoDB/Mongoose, JWT, bcrypt, Cloudinary, Helmet/CORS/Rate Limiting (backend)",
      description: "A seamless food delivery platform with menu customization and order tracking.",
      details: [
        "Showcase a modern MERN food-delivery flow: users browse restaurants, add curated dishes to cart, apply coupons, and place secure JWT-backed orders.",
        "Deliver robust access control: enforce role-based user/admin separation for managing restaurants, menus, orders, and discounts.",
        "Streamline checkout and tracking: process orders, persist history, and surface live order status with reliable API endpoints.",
        "Elevate trust and engagement: collect ratings/reviews per restaurant and menu item to guide future ordering choices.",
        "Accelerate setup for portfolios: seed demo data and an admin account to demo full functionality instantly."
      ],
      github: "https://github.com/Aditya51002/Food-Delivery",
      demo: "#"
    },
    {
      title: "E-Commerce",
      category: "web",
      date: "Jan'26 - Feb'26",
      tech: "React 19, Vite, React Router 7, Axios, React-Toastify; Node.js/Express 5 API with JWT auth, bcrypt, CORS, dotenv; MongoDB with Mongoose",
      description: "A robust e-commerce application featuring product catalog management and user authentication.",
      details: [
        "Orchestrates authenticated shopping journeys with protected routing, snappy navigation, and role-aware access for customers vs. admins.",
        "Curates a filter-rich product discovery experience—search, categories, price range, sorting, low-stock badges, wishlists, ratings, and reviews.",
        "Drives a dependable cart-to-checkout flow with quantity controls, tax/shipping calculations, multi-step payment review, and confirmed order creation.",
        "Empowers admins through a dashboard to CRUD products, monitor revenue/pending orders, and update order statuses inline.",
        "Elevate user profiles with editable account info, password updates, recent order snapshots, and quick links to orders/wishlist/admin panel."
      ],
      github: "https://github.com/Aditya51002/E-Commerce",
      demo: "#"
    },
    {
      title: "Hospital Management",
      category: "web",
      date: "Feb'26 - Feb'26",
      tech: "Node.js, Express.js, MongoDB, React, Vite, JWT",
      description: "A digital ecosystem for healthcare providers to manage patient records and appointments efficiently.",
      details: [
        "Manages comprehensive hospital operations through a user-friendly web application, enabling seamless coordination between patients and healthcare providers.",
        "Facilitates secure user authentication and role-based access, allowing patients to book appointments and doctors to manage their schedules efficiently.",
        "Integrates real-time appointment booking with dynamic doctor availability, ensuring accurate and conflict-free scheduling.",
        "Provides intuitive dashboards for both patients and doctors, displaying personalized appointment details and medical history for enhanced user experience.",
        "Ensures data integrity and security with robust backend validation, protecting sensitive patient information throughout the system."
      ],
      github: "https://github.com/Aditya51002/Hospital-Mangement",
      demo: "#"
    },
    {
      title: "Mern-Stack",
      category: "web",
      date: "Jan'26 - Present",
      tech: "MongoDB, Express.js, React, Node.js, HTML, CSS, JavaScript",
      description: "A collection of architectural patterns and full-stack modules built using the MERN ecosystem.",
      details: [
        "Developed a comprehensive MERN stack project showcasing full-stack web development capabilities through multiple backend implementations and frontend integrations.",
        "Implemented scalable Node.js and Express.js servers with MongoDB databases, demonstrating robust API design and data management across five distinct backend architectures.",
        "Created interactive HTML, CSS, and JavaScript applications featuring dynamic functionalities like BMI calculators, weather reports, and quiz systems to illustrate client-side programming skills.",
        "Built a modern React application using Vite, incorporating advanced hooks, state management, and API integrations for efficient single-page application development.",
        "Integrated authentication, file handling, and CRUD operations across backends, ensuring secure and functional user experiences in portfolio-worthy applications.",
        "Utilized MERN stack technologies (MongoDB, Express.js, React, Node.js) alongside HTML, CSS, and JavaScript for end-to-end web development proficiency."
      ],
      github: "https://github.com/Aditya51002/MERN-STACK",
      demo: "#"
    },
    {
      title: "Movie",
      category: "web",
      date: "Jan'26 - Feb'26",
      tech: "React 19, Vite, Tailwind CSS, React Router DOM, ESLint",
      description: "A cinema reservation system with dynamic seat selection and real-time availability updates.",
      details: [
        "Developed a comprehensive movie booking application featuring secure user authentication, enabling seamless registration and login functionalities for personalized experiences.",
        "Implemented dynamic movie selection and cinema hall booking system, allowing users to interactively choose movies, cinemas, showtimes, and seats with real-time state management.",
        "Integrated external APIs to fetch and display movie data, creating a rich, data-driven interface that pulls live information for an engaging user experience.",
        "Built diverse mini-applications including expense trackers, tic-tac-toe games, and responsive dashboards, showcasing versatile React component development and interactive UI design.",
        "Utilized modern React hooks and context for efficient state management across components, ensuring smooth navigation and data flow in a multi-page application structure."
      ],
      github: "https://github.com/Aditya51002/Movie-Booking",
      demo: "#"
    },
    {
      title: "Portfolio",
      category: "web",
      date: "Mar'26 - Mar'26",
      tech: "React 19, Vite, React Router DOM, Framer Motion, Lucide React",
      description: "My personal digital interactive experience featuring manga-inspired design and high-performance animations.",
      details: [
        "Navigate an innovative circular wheel interface to seamlessly access diverse portfolio sections like skills, projects, and achievements.",
        "Experience fluid, manga-inspired animations that bring dynamic visual effects and transitions to life using Framer Motion.",
        "Explore comprehensive personal details through dedicated pages covering education, professional experience, and current learning pursuits.",
        "Interact with an engaging command center and system showcase that highlights technical capabilities and project highlights.",
        "Discover contact information and achievements in a visually striking layout enhanced by animated backgrounds and responsive design."
      ],
      github: "https://github.com/Aditya51002/Portfolio",
      demo: "#"
    },
    {
      title: "NO-Distract-App",
      category: "android",
      date: "Mar'26 - Present",
      tech: "Kotlin, Jetpack Compose, Navigation Compose, ViewModel, Material Design 3",
      description: "A focus-oriented Android utility designed to help users manage their screen time and limit digital noise.",
      details: [
        "Empowers users to initiate distraction-free focus sessions by intelligently blocking selected apps, fostering enhanced productivity and mental clarity.",
        "Tracks comprehensive statistics including daily focus time, consecutive streak days, completed sessions, and total distractions blocked, providing motivational insights into user progress.",
        "Guides users through intuitive setup processes for selecting apps to block and configuring session durations, ensuring a seamless and personalized focus experience.",
        "Delivers real-time session management with active monitoring, overlay blocking mechanisms, and completion celebrations, maintaining user engagement throughout the focus journey.",
        "Offers customizable settings and detailed statistics visualization, allowing users to refine their focus strategies and celebrate achievements in a sleek, dark-themed interface."
      ],
      github: "https://github.com/Aditya51002/No-Distract-App",
      demo: "#"
    },
    {
      title: "Hustle Buddy",
      category: "android",
      date: "Mar'26 - Present",
      tech: "Kotlin, Jetpack Compose, Material3, ViewModel, Navigation Compose, Gradle",
      description: "A productivity companion that gamifies task management and daily goal achievement.",
      details: [
        "Empowers students to meticulously organize their academic journey through a comprehensive study management platform.",
        "Facilitates seamless management of subjects, tasks, and schedules with intuitive, color-coded interfaces and priority-based task handling.",
        "Enables interactive learning via integrated quiz modules featuring multiple-choice questions and instant result tracking.",
        "Drives productivity with built-in Pomodoro timer functionality and streak-based progress statistics.",
        "Provides personalized experience through user profiles, notifications, and data-driven insights on study habits.",
      ],
      github: "https://github.com/Aditya51002/Hustle-Buddy",
      demo: "#"
    },
    {
      title: "Android Development",
      category: "android",
      date: "2025 - Present",
      tech: "Android SDK (API 36), Kotlin, Jetpack Compose, Material Design 3, JUnit, Espresso",
      description: "A comprehensive exploration of modern Android development patterns and Material 3 design.",
      details: [
        "Developed a comprehensive Android application that faithfully replicates the core user interface and experience of the popular Zomato food delivery platform, showcasing advanced UI design principles.",
        "Implemented a dynamic splash screen with Zomato's signature red branding and smooth navigation transitions to create an engaging first impression for users.",
        "Designed and built a custom emoji-based rating system that allows intuitive user feedback with interactive visual elements, enhancing user interaction.",
        "Created a responsive app menu featuring dropdown navigation and multiple activity screens to demonstrate modular UI architecture and seamless screen transitions.",
        "Integrated lazy loading grids and lists to efficiently display content, optimizing performance for large datasets in a food delivery context.",
      ],
      github: "https://github.com/Aditya51002/Android-Development",
      demo: "#"
    },
    {
      title: "Advanced Software Testing",
      category: "testing",
      date: "2025 - Present",
      tech: "Selenium, JUnit, JMeter, Playwright",
      description: "A collection of professional automation frameworks for end-to-end testing and performance analysis.",
      details: "Focuses on building robust, scalable testing suites for complex web and enterprise applications.",
      github: "https://github.com/Aditya51002/Advance-Software-Testing",
      demo: "#"
    },
    {
      title: "Ink-wise",
      category: "ai-gui",
      date: "Feb’25 - Mar’2025",
      typeTag: "AI Based",
      tech: "Python (Flask), MongoDB, Google Generative AI (Gemini), HTML5, Tailwind CSS, JavaScript",
      description: "An AI-powered creative assistant supporting writers with specialized story ideation logic.",
      details: [
        "Empowers aspiring writers with an intuitive, manga-inspired interface featuring comic panels and speech bubbles for an engaging creative experience.",
        "Generates intelligent AI-driven suggestions using Google Gemini for plot development, character creation, and dialogue enhancement across multiple writing styles.",
        "Facilitates real-time interactive conversations through a responsive chat system that overcomes writer's block with personalized prompts and feedback.",
        "Secures user data with MongoDB-backed authentication, implementing robust password hashing and session management for safe, personalized writing sessions.",
        "Delivers a seamless cross-device experience with Tailwind CSS styling and JavaScript interactivity, ensuring fluid navigation between landing and chatbot interfaces."
      ],
      github: "https://github.com/Aditya51002/Ink-wise",
      demo: "#"
    },
    {
      title: "Border Threat Detection",
      category: "ai-gui",
      date: "Dec'25 - Jan'26",
      typeTag: "AI Based",
      tech: "Python, YOLOv8, OpenCV, PyTorch, Flask/FastAPI, SQLite/PostgreSQL, WebSocket, HTML5/CSS3/JavaScript, Bootstrap 5, Chart.js, Google Maps API, Twilio/SMTP",
      description: "A state-of-the-art AI command & control system for real-time anomaly detection in border security.",
      details: [
        "Deliver relentless AI surveillance that fuses CCTV, drone, and thermal feeds through a YOLOv8 + OpenCV pipeline, continuously spotting humans, vehicles, weapons, and wildlife distinctions around the clock.",
        "Score contextual, data-driven threat levels via a hybrid ML/rule engine that factors behavior, zone sensitivity, and time-of-day to slash false positives by ≈80% and trigger CRITICAL escalations in under 15 seconds.",
        "Broadcast prioritized, GPS-tagged alerts across dashboard popups, SMS, email, push, and optional sirens so responders receive actionable coordinates and evidence the moment an intrusion is confirmed.",
        "Visualize immersive, interactive situational awareness on the responsive dashboard with live annotated video, heatmapped detections, analytics cards, and camera health indicators to prove the system is actively running.",
        "Quantify tangible impact with ≥94% detection accuracy, 85% fewer manual monitoring hours, and ₹50–100 lakh annual savings per sector, validating readiness for multi-sector or nationwide deployments."
      ],
      github: "https://github.com/Aditya51002/Border-Threath-Detection-System",
      demo: "#"
    },
    {
      title: "Library Management System",
      category: "ai-gui",
      date: "Jun'25 - Jul'25",
      typeTag: "GUI Based",
      tech: "Java, Java Swing, FlatLaf, MongoDB, MongoDB Java Sync Driver",
      description: "A robust desktop application for inventory tracking and role-based access control.",
      details: [
        "Manages comprehensive library operations through a robust desktop application that handles book inventory, user registration, and circulation tracking with real-time status updates.",
        "Implements secure role-based authentication featuring distinct admin and user access levels, enabling librarians to oversee system-wide operations while users manage personal borrowing activities.",
        "Provides intuitive administrative dashboard displaying live statistics including total books, active users, issued items, and availability metrics for efficient library oversight.",
        "Facilitates seamless book circulation with dedicated interfaces for issuing and returning books, complete with automated status tracking and overdue management capabilities.",
        "Delivers modern user experience through a polished Java Swing interface enhanced with FlatLaf theming, offering responsive forms and navigation for all library management tasks."
      ],
      github: "https://github.com/Aditya51002/Library-Management-System",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95, rotate: -2 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="page-container-manga projects-page">
      <h2 className="page-title">THE WORKS</h2>
      
      {projectCategories.map((category) => (
        <section key={category.id} className={`manga-section ${category.className}`}>
          <div className="section-header-panel">
            <div className="sfx-text floating" style={{ top: '-30px', left: '-20px' }}>{category.sfx}</div>
            <div className="header-content">
              <div className="category-icon" style={{ borderColor: category.color, color: category.color }}>{category.icon}</div>
              <div className="title-stack">
                <span className="chapter-label">{category.title}</span>
                <h3 className="category-subtitle" style={{ color: category.color }}>{category.subtitle}</h3>
              </div>
            </div>
            <div className="speed-lines"></div>
          </div>

          <motion.div 
            className="projects-grid-dynamic"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.filter(p => p.category === category.id).map((project, index) => (
              <motion.div 
                className="project-panel-manga" 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1, zIndex: 10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="panel-edge"></div>
                <div className="panel-body">
                  <div className="panel-header">
                    <div className="panel-title-container">
                      <h3 className="panel-title-comic">{project.title}</h3>
                      {project.typeTag && <span className="type-tag-comic">{project.typeTag}</span>}
                    </div>
                    <span className="panel-date-comic">{project.date}</span>
                  </div>
                  
                  <div className="panel-tech-comic">
                    {project.tech.split(', ').slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-badge-comic">{tech}</span>
                    ))}
                    {project.tech.split(', ').length > 3 && <span className="tech-badge-comic">...</span>}
                  </div>

                  <p className="panel-desc-manga">{project.description}</p>
                  
                  <div className="panel-action-manga">
                    <span className="read-more">READ MORE {">>"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="manga-divider-ink"></div>
        </section>
      ))}

      {/* Closing "To Be Continued" Section */}
      <section className="manga-section end-section-comic">
        <motion.div 
          className="manga-panel end-panel-slam"
          initial={{ scale: 2, opacity: 0, rotate: 10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
        >
          <div className="sfx-text floating" style={{ top: '-40px', right: '-20px', left: 'auto' }}>BAM!</div>
          <div className="end-panel-content">
            <h3 className="end-title-comic">TO BE CONTINUED...</h3>
            <p className="end-desc-comic">
              THE FRONTIER OF INNOVATION IS VAST, AND THE NEXT CHAPTER IS YET TO BE WRITTEN. 
              WHETHER IT'S A GROUNDBREAKING AI, A NATIVE ANDROID MASTERPIECE, OR A SCALABLE WEB ECOSYSTEM...
            </p>
            <div className="cta-container-comic">
              <span className="cta-question-comic">READY TO START A NEW CHAPTER?</span>
              <a href="/contact" className="manga-button-action">
                <span className="btn-text">LET'S COLLABORATE!</span>
                <span className="btn-sfx">CLICK!</span>
              </a>
            </div>
          </div>
          <div className="speed-lines-end"></div>
          <div className="ink-splash"></div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay-manga"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-panel-manga"
              initial={{ scale: 0.8, rotate: 5, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              exit={{ scale: 0.8, rotate: -5, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-panel-btn-manga" onClick={() => setSelectedProject(null)}>×</button>

              <div className="modal-inner-scroll">
                <div className="modal-header-manga">
                  <div className="modal-title-container">
                    <h2 className="modal-title-manga">{selectedProject.title}</h2>
                    {selectedProject.typeTag && <span className="modal-type-tag">{selectedProject.typeTag}</span>}
                  </div>
                  <div className="modal-status-manga">MISSION: SUCCESS</div>
                </div>
                
                <div className="modal-tech-manga">
                  {selectedProject.tech.split(', ').map((tech, i) => (
                    <span key={i} className="tech-badge-manga">{tech}</span>
                  ))}
                </div>

                <div className="modal-body-manga">
                  {Array.isArray(selectedProject.details) ? (
                    <ul className="modal-list-manga">
                      {selectedProject.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="modal-text-manga">{selectedProject.details || selectedProject.description}</p>
                  )}
                </div>

                <div className="modal-links-manga">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-link-manga git">GITHUB_REPO</a>
                  )}
                  {selectedProject.demo && selectedProject.demo !== "#" && (
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="modal-link-manga live">LIVE_VIEW</a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .page-container-manga {
          padding: 60px 20px;
          max-width: 1600px;
          width: 98%;
          margin: 0 auto;
          background: #fff;
          position: relative;
          z-index: 5;
          box-shadow: 0 0 100px rgba(0,0,0,0.05);
        }

        /* Decorative Background Elements */
        .projects-page::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.01) 50%, transparent 52%);
          background-size: 20px 20px, 100% 100%;
          z-index: -1;
          pointer-events: none;
        }

        /* Margin Bleed SFX */
        .page-container-manga::after {
          content: 'SCRRRR!';
          position: absolute;
          right: -40px;
          top: 20%;
          font-family: 'Bangers', cursive;
          font-size: 5rem;
          color: rgba(0,0,0,0.03);
          transform: rotate(90deg);
          pointer-events: none;
          white-space: nowrap;
        }

        .manga-section {
          margin-bottom: 100px;
          position: relative;
        }

        .section-header-panel {
          border: 4px solid #000;
          background: #fff;
          padding: 30px 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          box-shadow: 12px 12px 0 #000;
          margin-bottom: 50px;
          overflow: visible;
        }

        .sfx-text {
          position: absolute;
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: #ff0033;
          -webkit-text-stroke: 1.5px #000;
          text-shadow: 4px 4px 0 #000;
          z-index: 10;
          pointer-events: none;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 20px;
          z-index: 2;
        }

        .category-icon {
          width: 60px;
          height: 60px;
          border: 3px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          transform: rotate(-5deg);
          animation: pulseIcon 2s ease-in-out infinite;
        }

        @keyframes pulseIcon {
          0%, 100% { transform: rotate(-5deg) scale(1); }
          50% { transform: rotate(0deg) scale(1.1); box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        }

        .title-stack {
          display: flex;
          flex-direction: column;
        }

        .chapter-label {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #000;
          letter-spacing: 2px;
        }

        .category-subtitle {
          font-family: 'Bangers', cursive;
          font-size: 3rem;
          margin: 0;
          -webkit-text-stroke: 1px #000;
        }

        .speed-lines {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(0,0,0,0.03) 100px,
            rgba(0,0,0,0.03) 101px
          );
          pointer-events: none;
        }

        .projects-grid-dynamic {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          padding: 10px;
        }

        .project-panel-manga {
          border: 3px solid #000;
          background: #fff;
          box-shadow: 8px 8px 0 #000;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .project-panel-manga:hover {
          box-shadow: 15px 15px 0 #000;
        }

        .panel-edge {
          height: 10px;
          background: #000;
          width: 100%;
        }

        .project-panel-manga:hover .panel-edge {
          background: var(--accent);
        }

        .ai-gui-section .project-panel-manga:hover .panel-edge {
          background: #8800ff;
        }

        .panel-body {
          padding: 25px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .panel-title-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10px;
        }

        .type-tag-comic {
          font-family: 'Bangers', cursive;
          font-size: 0.8rem;
          padding: 2px 8px;
          background: #000;
          color: #fff;
          transform: rotate(3deg);
          white-space: nowrap;
        }

        .panel-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          margin-bottom: 5px;
          color: #000;
        }

        .panel-date-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.85rem;
          color: #666;
          display: block;
          margin-bottom: 15px;
        }

        .panel-tech-comic {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .tech-badge-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 2px 8px;
          border: 1.5px solid #000;
          background: #f8f8f8;
        }

        .panel-desc-manga {
          font-family: 'Comic Neue', cursive;
          font-size: 1rem;
          color: #333;
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .panel-action-manga {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: var(--accent);
          text-align: right;
        }

        .manga-divider-ink {
          height: 4px;
          background: #000;
          margin-top: 60px;
          position: relative;
          transform: skewX(-20deg);
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-10px) rotate(-15deg); }
        }

        /* Modal Styling */
        .modal-overlay-manga {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-panel-manga {
          background: #fff;
          border: 5px solid #000;
          padding: 0;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          box-shadow: 20px 20px 0 #000;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: visible;
        }

        .modal-inner-scroll {
          padding: 40px;
          overflow-y: auto;
          flex: 1;
        }

        /* Manga Style Scrollbar */
        .modal-inner-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .modal-inner-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-left: 3px solid #000;
        }
        .modal-inner-scroll::-webkit-scrollbar-thumb {
          background: #000;
        }
        .modal-inner-scroll::-webkit-scrollbar-thumb:hover {
          background: #333;
        }

        .close-panel-btn-manga {
          position: absolute;
          top: -15px; right: -15px;
          background: #ff0033;
          color: #fff;
          width: 45px; height: 45px;
          border: 4px solid #000;
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 5px 5px 0 #000;
        }

        .modal-header-manga {
          margin-bottom: 25px;
          border-bottom: 3px solid #000;
          padding-bottom: 15px;
        }

        .modal-title-container {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .modal-type-tag {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          background: #8800ff;
          color: #fff;
          padding: 4px 15px;
          border: 3px solid #000;
          transform: rotate(-2deg);
          box-shadow: 4px 4px 0 #000;
        }

        .modal-title-manga {
          font-family: 'Bangers', cursive;
          font-size: 3.5rem;
          line-height: 1;
          margin-bottom: 10px;
          -webkit-text-stroke: 1.5px #000;
        }

        .modal-status-manga {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #00aa55;
          letter-spacing: 1px;
        }

        .modal-tech-manga {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .tech-badge-manga {
          border: 2px solid #000;
          padding: 4px 12px;
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          background: #eee;
        }

        .modal-list-manga {
          list-style: none;
          padding: 0;
          margin-bottom: 40px;
        }

        .modal-list-manga li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          margin-bottom: 15px;
          display: flex;
          gap: 15px;
          line-height: 1.4;
        }

        .modal-list-manga li::before {
          content: '★';
          color: #ffcc00;
          -webkit-text-stroke: 1px #000;
          flex-shrink: 0;
        }

        .modal-links-manga {
          display: flex;
          gap: 20px;
        }

        .modal-link-manga {
          flex: 1;
          text-align: center;
          padding: 12px;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          border: 4px solid #000;
          text-decoration: none;
          transition: transform 0.1s;
        }

        .modal-link-manga.git { background: #fff; color: #000; }
        .modal-link-manga.live { background: #000; color: #fff; }
        
        .modal-link-manga:hover {
          transform: translateY(-3px);
          box-shadow: 5px 5px 0 #000;
        }

        @media (max-width: 768px) {
          .category-subtitle { font-size: 2rem; }
          .modal-title-manga { font-size: 2.5rem; }
          .page-container-manga { padding: 30px 20px; }
        }

        /* End Section Styling */
        .end-section-comic {
          padding: 80px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        }

        .end-panel-slam {
          background: #fff;
          border: 6px solid #000;
          padding: 60px;
          max-width: 900px;
          width: 90%;
          position: relative;
          box-shadow: 30px 30px 0 rgba(0,0,0,0.05);
          text-align: center;
        }

        .end-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 5rem;
          margin-bottom: 20px;
          color: #000;
          -webkit-text-stroke: 2px #000;
          text-shadow: 5px 5px 0 var(--accent);
          letter-spacing: 4px;
        }

        .end-desc-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.4rem;
          color: #333;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .cta-container-comic {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .cta-question-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          color: #666;
        }

        .manga-button-action {
          position: relative;
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 20px 60px;
          font-family: 'Bangers', cursive;
          font-size: 2.2rem;
          text-decoration: none;
          border: none;
          transition: transform 0.1s;
          cursor: pointer;
        }

        .manga-button-action:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 10px 10px 0 var(--accent);
        }

        .manga-button-action:active {
          transform: scale(0.95);
        }

        .btn-sfx {
          position: absolute;
          top: -20px;
          right: -30px;
          background: #ff0033;
          color: #fff;
          padding: 5px 15px;
          font-size: 1.2rem;
          transform: rotate(15deg);
          border: 3px solid #000;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .manga-button-action:hover .btn-sfx {
          opacity: 1;
        }

        .speed-lines-end {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.02) 20px,
            rgba(0,0,0,0.02) 21px
          );
          pointer-events: none;
        }

        .ink-splash {
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 150px;
          height: 150px;
          background: #000;
          clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
          z-index: -1;
          opacity: 0.1;
        }

        /* End Section Styling */
        .end-section-comic {
          padding: 80px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        }

        .end-panel-slam {
          background: #fff;
          border: 6px solid #000;
          padding: 60px;
          max-width: 900px;
          width: 90%;
          position: relative;
          box-shadow: 30px 30px 0 rgba(0,0,0,0.05);
          text-align: center;
        }

        .end-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 5rem;
          margin-bottom: 20px;
          color: #000;
          -webkit-text-stroke: 2px #000;
          text-shadow: 5px 5px 0 var(--accent);
          letter-spacing: 4px;
        }

        .end-desc-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.4rem;
          color: #333;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .cta-container-comic {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .cta-question-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          color: #666;
        }

        .manga-button-action {
          position: relative;
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 20px 60px;
          font-family: 'Bangers', cursive;
          font-size: 2.2rem;
          text-decoration: none;
          border: none;
          transition: transform 0.1s;
          cursor: pointer;
        }

        .manga-button-action:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 10px 10px 0 var(--accent);
        }

        .manga-button-action:active {
          transform: scale(0.95);
        }

        .btn-sfx {
          position: absolute;
          top: -20px;
          right: -30px;
          background: #ff0033;
          color: #fff;
          padding: 5px 15px;
          font-size: 1.2rem;
          transform: rotate(15deg);
          border: 3px solid #000;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .manga-button-action:hover .btn-sfx {
          opacity: 1;
        }

        .speed-lines-end {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.02) 20px,
            rgba(0,0,0,0.02) 21px
          );
          pointer-events: none;
        }

        .ink-splash {
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 150px;
          height: 150px;
          background: #000;
          clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
          z-index: -1;
          opacity: 0.1;
        }
      `}</style>
    </div>
  );
};

export default Projects;
