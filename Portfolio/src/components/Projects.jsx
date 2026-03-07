import { useState } from 'react'
import SectionCard from './SectionCard'
import ProjectWheel from './ProjectWheel'
import './Projects.css'

export const PROJECTS = [
  {
    id: 'proj1',
    name: 'E-Commerce App',
    tech: ['React', 'Node.js', 'MongoDB'],
    desc: 'Full-stack e-commerce platform with cart, payment integration, and admin dashboard.',
    github: '#',
    live: '#',
    color: '#00f5ff',
  },
  {
    id: 'proj2',
    name: 'Weather Dashboard',
    tech: ['JavaScript', 'OpenWeatherAPI', 'CSS'],
    desc: 'Real-time weather app with 7-day forecast, geolocation and animated conditions.',
    github: '#',
    live: '#',
    color: '#a855f7',
  },
  {
    id: 'proj3',
    name: 'Task Manager',
    tech: ['React', 'Firebase', 'Tailwind'],
    desc: 'Drag-and-drop Kanban board with real-time sync, auth and priority labels.',
    github: '#',
    live: '#',
    color: '#10b981',
  },
  {
    id: 'proj4',
    name: 'Chat Application',
    tech: ['Socket.io', 'Express', 'React'],
    desc: 'Real-time chat with rooms, online presence indicators and file sharing.',
    github: '#',
    live: '#',
    color: '#f59e0b',
  },
  {
    id: 'proj5',
    name: 'Portfolio CMS',
    tech: ['Next.js', 'Sanity', 'GSAP'],
    desc: 'Headless CMS-powered portfolio with animated transitions and MDX blog.',
    github: '#',
    live: '#',
    color: '#ef4444',
  },
  {
    id: 'proj6',
    name: 'ML Digit Recogniser',
    tech: ['Python', 'TensorFlow', 'Flask'],
    desc: 'CNN-based handwritten digit recognition deployed as a drawable web API.',
    github: '#',
    live: '#',
    color: '#ec4899',
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  const project = PROJECTS.find(p => p.id === activeProject)

  const handleWheelSelect = (id) => {
    setActiveProject(id)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  return (
    <SectionCard id="projects" accentColor="#f59e0b">
      <p className="section-title" style={{ color: '#f59e0b' }}>Projects</p>
      <p className="section-subtitle">Things I've Built</p>
      <div className="section-divider" style={{ background: '#f59e0b' }} />

      <div className="projects-layout">
        {/* Left: Project Wheel */}
        <div className="wheel-panel">
          <ProjectWheel projects={PROJECTS} onSelect={handleWheelSelect} />
          {project && (
            <div className="wheel-hint" style={{ color: project.color }}>
              ↓ Scrolling to <strong>{project.name}</strong>
            </div>
          )}
        </div>

        {/* Right: Project Cards */}
        <div className="project-cards">
          {PROJECTS.map(proj => (
            <div
              key={proj.id}
              id={proj.id}
              className={`project-card ${activeProject === proj.id ? 'project-card--active' : ''}`}
              style={{ '--proj-color': proj.color }}
              onClick={() => setActiveProject(proj.id)}
            >
              <div className="project-card-header">
                <span className="project-icon">📁</span>
                <div className="project-links">
                  <a href={proj.github} className="proj-link" onClick={e => e.stopPropagation()}>GitHub</a>
                  <a href={proj.live}   className="proj-link" onClick={e => e.stopPropagation()}>Live ↗</a>
                </div>
              </div>
              <h3 className="project-name" style={{ color: proj.color }}>{proj.name}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tech">
                {proj.tech.map(t => (
                  <span key={t} className="tech-badge" style={{ borderColor: proj.color, color: proj.color }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  )
}
