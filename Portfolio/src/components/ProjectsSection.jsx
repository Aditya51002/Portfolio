import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronRight, FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    image: null,
    shortDesc: 'Smart productivity app with AI-driven task prioritization and scheduling.',
    problem: 'Traditional to-do apps lack intelligent prioritization, causing users to waste time on low-impact tasks.',
    solution: 'Built an AI engine that analyses deadlines, dependencies, and user habits to automatically prioritize tasks and suggest optimal schedules.',
    tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Tailwind CSS'],
    github: 'https://github.com',
    live: '#',
    color: '#3B82F6',
  },
  {
    title: 'E-Commerce Platform',
    image: null,
    shortDesc: 'Full-featured online store with payment integration and real-time inventory.',
    problem: 'Small businesses need affordable, customizable e-commerce solutions without vendor lock-in.',
    solution: 'Created a modular MERN-stack platform with Stripe payments, real-time stock tracking, and a customizable storefront builder.',
    tech: ['React', 'Express', 'MongoDB', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: '#',
    color: '#22D3EE',
  },
  {
    title: 'Real-Time Chat Application',
    image: null,
    shortDesc: 'End-to-end encrypted messaging with video calls and file sharing.',
    problem: 'Most free chat apps compromise on privacy or lack essential collaboration features.',
    solution: 'Implemented WebSocket-based messaging with E2EE, WebRTC video calls, and cloud file sync — all open-source.',
    tech: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: '#',
    color: '#6366F1',
  },
  {
    title: 'Portfolio Website',
    image: null,
    shortDesc: 'Futuristic Iron Man HUD-inspired developer portfolio with cinematic animations.',
    problem: 'Generic portfolio templates fail to make developers stand out to recruiters.',
    solution: 'Designed a highly interactive, non-scrollable portfolio with a radial navigation dial, particle effects, and glassmorphism UI.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Canvas API'],
    github: 'https://github.com',
    live: '#',
    color: '#10B981',
  },
  {
    title: 'ML Image Classifier',
    image: null,
    shortDesc: 'Deep learning model for real-time image classification with web interface.',
    problem: 'Deploying ML models for web-based inference is complex and slow.',
    solution: 'Trained a CNN model and served predictions through a FastAPI backend with a polished React frontend for instant results.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    github: 'https://github.com',
    live: '#',
    color: '#F59E0B',
  },
  {
    title: 'DevConnect Social Platform',
    image: null,
    shortDesc: 'Community platform for developers to share projects and collaborate.',
    problem: 'Developers lack a dedicated social network for showcasing work and finding collaborators.',
    solution: 'Built a full-stack platform with project showcases, real-time messaging, team formation, and GitHub integration.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'GraphQL', 'AWS'],
    github: 'https://github.com',
    live: '#',
    color: '#EC4899',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-hud-primary via-hud-accent to-hud-hover bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-gray-500 font-rajdhani text-lg tracking-wider">Building innovative solutions, one project at a time</p>
        <div className="w-24 h-1 bg-gradient-to-r from-hud-primary to-hud-accent mx-auto rounded-full mt-4" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
            style={{ borderColor: `${project.color}20` }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -8, boxShadow: `0 0 40px ${project.color}15` }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Preview image area */}
            <div className="h-44 bg-gradient-to-br from-hud-card to-hud-bg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
              />
              <span className="text-5xl font-orbitron font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${project.color}, ${project.color}60)` }}>
                {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
              </span>
              {/* Hover label */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-sm font-orbitron text-white tracking-wider flex items-center gap-2">
                  View Details <FaChevronRight className="text-xs" />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-orbitron font-bold text-hud-text mb-2 group-hover:text-hud-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{project.shortDesc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] rounded-md font-medium"
                    style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 text-[10px] rounded-md text-gray-500 bg-white/5">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 glass rounded-lg text-xs font-medium text-gray-400 hover:text-hud-text hover:border-hud-primary/40 transition-all"
                  onClick={e => e.stopPropagation()}>
                  <FaGithub /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all"
                  style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                  onClick={e => e.stopPropagation()}>
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>

            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-15 group-hover:opacity-30 transition-opacity"
              style={{ background: `radial-gradient(circle at top right, ${project.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </div>

      {/* ═══ Case Study Modal ═══ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedProject.color, boxShadow: `0 0 10px ${selectedProject.color}` }} />
                <h2 className="text-2xl font-orbitron font-bold text-hud-text">{selectedProject.title}</h2>
              </div>

              <p className="text-gray-400 mb-6">{selectedProject.shortDesc}</p>

              {/* Problem */}
              <div className="mb-6">
                <h4 className="text-sm font-orbitron text-hud-primary mb-2 tracking-wider uppercase">Problem</h4>
                <p className="text-gray-400 text-sm leading-relaxed glass rounded-xl p-4">{selectedProject.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-orbitron text-hud-accent mb-2 tracking-wider uppercase">Solution</h4>
                <p className="text-gray-400 text-sm leading-relaxed glass rounded-xl p-4">{selectedProject.solution}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-orbitron text-hud-hover mb-3 tracking-wider uppercase">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 text-xs rounded-lg font-medium"
                      style={{ backgroundColor: `${selectedProject.color}15`, color: selectedProject.color, border: `1px solid ${selectedProject.color}30` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-2">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-hud-primary/40 transition-all">
                  <FaGithub /> View Source
                </a>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{ backgroundColor: `${selectedProject.color}20`, color: selectedProject.color, border: `1px solid ${selectedProject.color}40` }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
