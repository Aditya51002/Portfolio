import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About', icon: '👤', color: '#00f5ff', angle: 0 },
  { id: 'skills', label: 'Skills', icon: '⚡', color: '#a855f7', angle: 60 },
  { id: 'projects', label: 'Projects', icon: '🚀', color: '#f59e0b', angle: 120, hasSubWheel: true },
  { id: 'experience', label: 'Experience', icon: '💼', color: '#10b981', angle: 180 },
  { id: 'certifications', label: 'Certifications', icon: '🏆', color: '#ef4444', angle: 240 },
  { id: 'contact', label: 'Contact', icon: '📬', color: '#ec4899', angle: 300 },
];

export default function WheelNav({ onSectionSelect, onClose }) {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section.id);
    if (section.hasSubWheel) {
      // Don't close immediately for sections with sub-wheels
      return;
    }
    setTimeout(() => {
      onSectionSelect(section.id);
    }, 500);
  };

  const handleSubWheelClose = () => {
    setSelectedSection(null);
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#060b14]/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,245,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Center logo/close button */}
      <motion.button
        className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-neon-blue/50 flex items-center justify-center text-3xl font-bold text-neon-blue hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,245,255,0.3)]"
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      >
        ✕
      </motion.button>

      {/* Circular wheel sections */}
      <div className="relative w-[600px] h-[600px]">
        {SECTIONS.map((section, index) => {
          const isHovered = hoveredSection === section.id;
          const isSelected = selectedSection === section.id;
          const isOtherSelected = selectedSection && selectedSection !== section.id;
          
          // Calculate position on circle
          const radius = 220;
          const angleRad = (section.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <motion.div
              key={section.id}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isOtherSelected ? 0.7 : 1,
                opacity: isOtherSelected ? 0.3 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1,
              }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => handleSectionClick(section)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ backgroundColor: section.color }}
                animate={{
                  opacity: isHovered || isSelected ? 0.6 : 0.2,
                  scale: isHovered || isSelected ? 1.5 : 1,
                }}
              />

              {/* Main circle */}
              <motion.div
                className="relative w-28 h-28 rounded-full flex flex-col items-center justify-center gap-1 border-2 backdrop-blur-sm"
                style={{
                  borderColor: section.color,
                  backgroundColor: `${section.color}20`,
                }}
                animate={{
                  filter: isOtherSelected ? 'blur(4px)' : 'blur(0px)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="text-4xl"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? 15 : 0,
                  }}
                >
                  {section.icon}
                </motion.div>

                {/* Label */}
                <motion.div
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: section.color }}
                >
                  {section.label}
                </motion.div>
              </motion.div>

              {/* Connection line to center */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-0.5 origin-left"
                style={{
                  width: `${radius}px`,
                  backgroundColor: section.color,
                  transform: `translate(-50%, -50%) rotate(${section.angle + 180}deg)`,
                  opacity: 0.2,
                }}
                animate={{
                  opacity: isHovered || isSelected ? 0.6 : 0.1,
                }}
              />

              {/* Orbiting particles */}
              <AnimatePresence>
                {(isHovered || isSelected) && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ backgroundColor: section.color }}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, Math.cos((i * 120 + Date.now() / 10) * Math.PI / 180) * 60],
                          y: [0, Math.sin((i * 120 + Date.now() / 10) * Math.PI / 180) * 60],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Rotating outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-neon-blue/20"
          style={{
            width: '500px',
            height: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute rounded-full border border-purple-500/30"
          style={{
            width: '350px',
            height: '350px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Instructions */}
      <motion.p
        className="absolute bottom-10 text-gray-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Click a section to explore • Press center to close
      </motion.p>

      {/* Sub-wheel for Projects */}
      <AnimatePresence>
        {selectedSection === 'projects' && (
          <SubWheel section="projects" onClose={handleSubWheelClose} onSelect={onSectionSelect} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Sub-wheel component for Projects
function SubWheel({ section, onClose, onSelect }) {
  const projectCategories = [
    { id: 'mern', label: 'MERN', icon: '🌐', color: '#00f5ff', angle: 0 },
    { id: 'android', label: 'Android', icon: '📱', color: '#3DDC84', angle: 72 },
    { id: 'ai', label: 'AI', icon: '🤖', color: '#a855f7', angle: 144 },
    { id: 'webapps', label: 'Web Apps', icon: '💻', color: '#f59e0b', angle: 216 },
    { id: 'opensource', label: 'Open Source', icon: '🌟', color: '#ec4899', angle: 288 },
  ];

  return (
    <motion.div
      className="absolute inset-0 bg-[#060b14]/98 flex items-center justify-center z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {/* Back button */}
      <motion.button
        className="absolute z-10 w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/50 flex items-center justify-center text-2xl font-bold text-purple-400 hover:scale-110 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.3)]"
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ←
      </motion.button>

      {/* Title */}
      <motion.h2
        className="absolute top-20 text-3xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Select Project Category
      </motion.h2>

      {/* Sub-wheel sections */}
      <div className="relative w-[500px] h-[500px]">
        {projectCategories.map((category, index) => {
          const radius = 160;
          const angleRad = (category.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <motion.div
              key={category.id}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1,
              }}
              onClick={() => {
                onSelect(`projects-${category.id}`);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ backgroundColor: category.color }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <motion.div
                className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1 border-2 backdrop-blur-sm"
                style={{
                  borderColor: category.color,
                  backgroundColor: `${category.color}30`,
                }}
              >
                <div className="text-3xl">{category.icon}</div>
                <div
                  className="text-xs font-semibold uppercase"
                  style={{ color: category.color }}
                >
                  {category.label}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
