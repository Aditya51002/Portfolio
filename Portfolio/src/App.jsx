import { useState } from 'react'
import './App.css'
import DialNav from './components/DialNav'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <div className="portfolio">
      {/* Ambient background blobs */}
      <div className="bg-blob bg-blob--1" />
      <div className="bg-blob bg-blob--2" />
      <div className="bg-blob bg-blob--3" />

      {/* Hero / Dial header */}
      <header className="portfolio-header">
        <div className="header-brand">
          <span className="brand-dot" />
          <span className="brand-name">YN<span>.dev</span></span>
        </div>

        <DialNav onSelect={setActiveSection} activeSection={activeSection} />

        <p className="header-hint">Click a segment to navigate ↑</p>
      </header>

      {/* Main content */}
      <main className="portfolio-main">
        <Intro />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>Crafted with ❤️ &amp; React · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
