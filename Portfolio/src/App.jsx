import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import WheelNav from './components/WheelNav'
import AboutSection from './components/AboutSection'
import Skills from './components/Skills'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [view, setView] = useState('landing') // 'landing', 'wheel', 'section'
  const [activeSection, setActiveSection] = useState(null)

  const handleExplore = () => {
    setView('wheel')
  }

  const handleSectionSelect = (sectionId) => {
    setActiveSection(sectionId)
    setView('section')
  }

  const handleCloseWheel = () => {
    setView('landing')
  }

  const handleBackToWheel = () => {
    setView('wheel')
    setActiveSection(null)
  }

  return (
    <div className="min-h-screen bg-[#060b14] overflow-hidden">
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <LandingPage key="landing" onExplore={handleExplore} />
        )}
        
        {view === 'wheel' && (
          <WheelNav 
            key="wheel"
            onSectionSelect={handleSectionSelect}
            onClose={handleCloseWheel}
          />
        )}

        {view === 'section' && (
          <div key="section" className="relative min-h-screen">
            {/* Back button */}
            <button
              onClick={handleBackToWheel}
              className="fixed top-8 left-8 z-50 px-6 py-3 bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue border border-neon-blue/50 rounded-full font-semibold transition-all hover:scale-105 backdrop-blur-sm"
            >
              ← Back to Wheel
            </button>

            {/* Render appropriate section */}
            <div className="container mx-auto px-4 py-20">
              {activeSection === 'about' && <AboutSection />}
              {activeSection === 'skills' && <Skills />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection?.startsWith('projects-') && <ProjectsSection category={activeSection.replace('projects-', '')} />}
              {activeSection === 'experience' && <ExperienceSection />}
              {activeSection === 'certifications' && <Certifications />}
              {activeSection === 'contact' && <Contact />}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
