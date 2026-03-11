import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectsSection({ category = null }) {
  const [filter, setFilter] = useState(category || 'all');

  const projects = {
    mern: [
      {
        title: 'E-Commerce Platform',
        desc: 'Full-featured online shopping platform with payment integration',
        tech: ['React', 'Node.js', 'MongoDB', 'Express'],
        color: '#00f5ff',
        icon: '🛒'
      },
      {
        title: 'Social Media Dashboard',
        desc: 'Real-time social media analytics and management tool',
        tech: ['React', 'Socket.io', 'MongoDB', 'Node.js'],
        color: '#00f5ff',
        icon: '📊'
      },
    ],
    android: [
      {
        title: 'Fitness Tracker',
        desc: 'Track workouts, calories, and fitness goals',
        tech: ['Kotlin', 'Room DB', 'MVVM'],
        color: '#3DDC84',
        icon: '💪'
      },
      {
        title: 'Weather App',
        desc: 'Real-time weather updates with beautiful UI',
        tech: ['Java', 'Retrofit', 'Material Design'],
        color: '#3DDC84',
        icon: '🌤️'
      },
    ],
    ai: [
      {
        title: 'AI Chatbot',
        desc: 'Intelligent chatbot with natural language processing',
        tech: ['Python', 'TensorFlow', 'NLP'],
        color: '#a855f7',
        icon: '🤖'
      },
      {
        title: 'Image Classifier',
        desc: 'Deep learning model for image recognition',
        tech: ['Python', 'PyTorch', 'CNN'],
        color: '#a855f7',
        icon: '🖼️'
      },
    ],
    webapps: [
      {
        title: 'Task Manager',
        desc: 'Collaborative task management with real-time updates',
        tech: ['Vue.js', 'Firebase', 'Vuex'],
        color: '#f59e0b',
        icon: '✅'
      },
      {
        title: 'Portfolio Builder',
        desc: 'Create stunning portfolios with drag-and-drop',
        tech: ['React', 'Tailwind', 'Framer Motion'],
        color: '#f59e0b',
        icon: '🎨'
      },
    ],
    opensource: [
      {
        title: 'React Components Library',
        desc: 'Reusable UI components for React applications',
        tech: ['React', 'TypeScript', 'Storybook'],
        color: '#ec4899',
        icon: '📦'
      },
      {
        title: 'API Documentation Tool',
        desc: 'Auto-generate beautiful API documentation',
        tech: ['Node.js', 'Markdown', 'Express'],
        color: '#ec4899',
        icon: '📝'
      },
    ],
  };

  const allProjects = Object.entries(projects).flatMap(([cat, projs]) =>
    projs.map(p => ({ ...p, category: cat }))
  );

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : projects[filter] || [];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🌟' },
    { id: 'mern', label: 'MERN Stack', icon: '🌐' },
    { id: 'android', label: 'Android', icon: '📱' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
    { id: 'webapps', label: 'Web Apps', icon: '💻' },
    { id: 'opensource', label: 'Open Source', icon: '🌟' },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto"
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
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-neon-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 text-lg">Building innovative solutions, one project at a time</p>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-400 mx-auto rounded-full mt-4"></div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all backdrop-blur-sm ${
              filter === cat.id
                ? 'bg-neon-blue text-white shadow-[0_0_20px_rgba(0,245,255,0.5)]'
                : 'bg-slate-800/50 text-gray-400 border border-slate-700 hover:border-neon-blue'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.icon} {cat.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {filteredProjects.map((project, i) => (
          <motion.div
            key={`${project.title}-${i}`}
            className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-opacity-100 transition-all overflow-hidden"
            style={{ borderColor: `${project.color}40` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, borderColor: project.color }}
            layout
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"
              style={{ backgroundColor: project.color }}
            />

            {/* Icon */}
            <div className="relative text-6xl mb-4">{project.icon}</div>

            {/* Title */}
            <h3 className="relative text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="relative text-gray-400 mb-4">{project.desc}</p>

            {/* Tech Stack */}
            <div className="relative flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="relative flex gap-3">
              <button
                className="flex-1 px-4 py-2 bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue border border-neon-blue/50 rounded-lg font-semibold transition-all"
              >
                View
              </button>
              <button
                className="flex-1 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 border border-slate-600 rounded-lg font-semibold transition-all"
              >
                Code
              </button>
            </div>

            {/* Corner decoration */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity"
              style={{
                background: `radial-gradient(circle at top right, ${project.color}, transparent)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No projects found in this category</p>
        </motion.div>
      )}
    </motion.div>
  );
}
