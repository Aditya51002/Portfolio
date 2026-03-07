import SectionCard from './SectionCard'
import './Intro.css'

export default function Intro() {
  return (
    <SectionCard id="intro" accentColor="#00f5ff">
      <div className="intro-layout">
        <div className="intro-avatar">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <span className="avatar-initials">YN</span>
            </div>
          </div>
          <div className="avatar-status">
            <span className="status-dot" />
            Available for opportunities
          </div>
        </div>

        <div className="intro-text">
          <p className="intro-greeting">Hello, World! 👋</p>
          <h1 className="intro-name">Your Name</h1>
          <p className="intro-role">
            <span className="role-tag">Full Stack Developer</span>
            <span className="role-sep">·</span>
            <span className="role-tag">UI/UX Enthusiast</span>
            <span className="role-sep">·</span>
            <span className="role-tag">Problem Solver</span>
          </p>
          <p className="intro-bio">
            A passionate fresher developer who loves turning ideas into polished,
            real-world products. I thrive at the intersection of clean code and
            great design — always learning, always building.
          </p>
          <div className="intro-cta">
            <a href="#contact" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) }}>
              Hire Me
            </a>
            <a href="#projects" className="btn-ghost" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) }}>
              View Work ↓
            </a>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}
