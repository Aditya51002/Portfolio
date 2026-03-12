import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaCode, FaRocket, FaBriefcase, FaTrophy, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const SECTIONS = [
  { id: 'about', label: 'About', icon: FaUser, color: '#3B82F6' },
  { id: 'skills', label: 'Skills', icon: FaCode, color: '#22D3EE' },
  { id: 'projects', label: 'Projects', icon: FaRocket, color: '#6366F1' },
  { id: 'experience', label: 'Experience', icon: FaBriefcase, color: '#10B981' },
  { id: 'achievements', label: 'Achievements', icon: FaTrophy, color: '#F59E0B' },
  { id: 'education', label: 'Education', icon: FaGraduationCap, color: '#EC4899' },
  { id: 'contact', label: 'Contact', icon: FaEnvelope, color: '#EF4444' },
];

export default function WheelNav({ onSectionSelect, onClose }) {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section.id);
    setTimeout(() => {
      onSectionSelect(section.id);
    }, 400);
  };

  const radius = 220;
  const segmentAngle = 360 / SECTIONS.length;

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-hud-bg/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Radial grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Concentric rings */}
        {[1, 2, 3, 4].map((r) => (
          <motion.div
            key={r}
            className="absolute rounded-full border border-hud-primary/5"
            style={{
              width: `${r * 200}px`,
              height: `${r * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: r * 0.1, duration: 0.6 }}
          />
        ))}

        {/* Cross-hair lines */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hud-primary/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-hud-primary/10 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>

      {/* ═══ Rotating outer ring ═══ */}
      <motion.div
        className="absolute rounded-full border border-hud-primary/20"
        style={{
          width: `${radius * 2 + 120}px`,
          height: `${radius * 2 + 120}px`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{
          scale: { delay: 0.2, duration: 0.6, type: 'spring' },
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
        }}
      >
        {/* Small dots on outer ring */}
        {[...Array(24)].map((_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          const r2 = radius + 60;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-hud-primary/30"
              style={{
                left: `calc(50% + ${Math.cos(a) * r2}px - 2px)`,
                top: `calc(50% + ${Math.sin(a) * r2}px - 2px)`,
              }}
            />
          );
        })}
      </motion.div>

      {/* ═══ Inner decorative ring ═══ */}
      <motion.div
        className="absolute rounded-full border border-hud-accent/15"
        style={{
          width: `${radius * 2 - 60}px`,
          height: `${radius * 2 - 60}px`,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: -360 }}
        transition={{
          scale: { delay: 0.3, duration: 0.5, type: 'spring' },
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* ═══ Center hub ═══ */}
      <motion.div
        className="absolute z-20 w-32 h-32 rounded-full glass-strong flex flex-col items-center justify-center cursor-pointer shadow-[0_0_40px_rgba(59,130,246,0.2)]"
        onClick={onClose}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08, boxShadow: '0 0 60px rgba(59,130,246,0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-orbitron text-sm font-bold bg-gradient-to-r from-hud-primary to-hud-accent bg-clip-text text-transparent leading-tight">
          Aditya
        </span>
        <span className="font-orbitron text-sm font-bold bg-gradient-to-r from-hud-accent to-hud-hover bg-clip-text text-transparent leading-tight">
          Maurya
        </span>
        <span className="text-[10px] font-rajdhani text-gray-500 mt-1 tracking-wider uppercase">
          Portfolio Interface
        </span>
      </motion.div>

      {/* ═══ Arc segments / Navigation items ═══ */}
      <div className="relative" style={{ width: `${radius * 2 + 40}px`, height: `${radius * 2 + 40}px` }}>
        {SECTIONS.map((section, index) => {
          const angle = -90 + index * segmentAngle;
          const angleRad = (angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;
          const isHovered = hoveredSection === section.id;
          const isActive = activeSection === section.id;
          const isOtherActive = activeSection && activeSection !== section.id;
          const Icon = section.icon;

          return (
            <motion.div
              key={section.id}
              className="absolute cursor-pointer"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isOtherActive ? 0.7 : 1,
                opacity: isOtherActive ? 0.3 : 1,
                filter: isOtherActive ? 'blur(3px)' : 'blur(0px)',
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                delay: 0.3 + index * 0.08,
              }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => handleClick(section)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Glow backdrop */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{ backgroundColor: section.color }}
                animate={{
                  opacity: isHovered || isActive ? 0.5 : 0.1,
                  scale: isHovered || isActive ? 1.8 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Segment card */}
              <motion.div
                className="relative w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 backdrop-blur-md border transition-colors duration-200"
                style={{
                  borderColor: isHovered || isActive ? section.color : `${section.color}40`,
                  backgroundColor: isHovered || isActive ? `${section.color}20` : `${section.color}08`,
                  boxShadow: isHovered || isActive
                    ? `0 0 25px ${section.color}40, inset 0 0 25px ${section.color}10`
                    : 'none',
                }}
              >
                <Icon
                  className="text-2xl transition-transform duration-200"
                  style={{
                    color: section.color,
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                    filter: isHovered ? `drop-shadow(0 0 8px ${section.color})` : 'none',
                  }}
                />
                <span
                  className="text-[11px] font-orbitron font-semibold tracking-wider uppercase"
                  style={{ color: section.color }}
                >
                  {section.label}
                </span>
              </motion.div>

              {/* Connection line to center */}
              <svg
                className="absolute pointer-events-none"
                style={{
                  width: `${Math.abs(x) + 50}px`,
                  height: `${Math.abs(y) + 50}px`,
                  left: x > 0 ? '-12px' : 'auto',
                  right: x <= 0 ? '-12px' : 'auto',
                  top: y > 0 ? '-12px' : 'auto',
                  bottom: y <= 0 ? '-12px' : 'auto',
                  overflow: 'visible',
                  opacity: 0,
                }}
              />
            </motion.div>
          );
        })}

        {/* Radial lines connecting center to each segment */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%' }}
          viewBox={`0 0 ${radius * 2 + 40} ${radius * 2 + 40}`}
        >
          {SECTIONS.map((section, index) => {
            const angle = -90 + index * segmentAngle;
            const angleRad = (angle * Math.PI) / 180;
            const centerX = radius + 20;
            const centerY = radius + 20;
            const endX = centerX + Math.cos(angleRad) * (radius - 40);
            const endY = centerY + Math.sin(angleRad) * (radius - 40);
            const isHovered = hoveredSection === section.id;

            return (
              <motion.line
                key={section.id}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke={section.color}
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.4 : 0.08 }}
                transition={{ duration: 0.3 }}
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>
      </div>

      {/* ═══ Hovered section label ═══ */}
      <AnimatePresence>
        {hoveredSection && (
          <motion.div
            className="absolute bottom-16 font-rajdhani text-lg tracking-widest uppercase text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <span style={{ color: SECTIONS.find(s => s.id === hoveredSection)?.color }}>
              {`[ ${hoveredSection} ]`}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom instruction */}
      <motion.p
        className="absolute bottom-8 text-gray-600 text-xs font-rajdhani tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Select a module to explore • Click center to return
      </motion.p>
    </motion.div>
  );
}
