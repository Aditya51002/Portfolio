import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaSun, FaMoon } from 'react-icons/fa';
import { HiHome, HiMail } from 'react-icons/hi';

export default function LandingPage({ onExplore }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col overflow-hidden bg-hud-bg z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-hud-primary/10 rounded-full blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-hud-accent/8 rounded-full blur-[100px] -bottom-32 -right-32" />
        <div className="absolute w-[300px] h-[300px] bg-hud-hover/8 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ═══════════ NAVBAR ═══════════ */}
      <motion.nav
        className="relative z-20 flex items-center justify-between px-6 md:px-12 py-4 glass-strong"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {/* Left nav */}
        <div className="flex items-center gap-1 md:gap-2">
          <NavLink icon={<HiHome />} label="Home" href="#" />
          <NavLink icon={<HiMail />} label="Contact" href="#contact" />
          <NavLink icon={<FaDownload />} label="Resume" href="/resume.pdf" download />
        </div>

        {/* Center brand */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-hud-primary to-hud-accent flex items-center justify-center">
            <span className="text-xs font-orbitron font-bold text-hud-bg">AM</span>
          </div>
        </motion.div>

        {/* Right nav */}
        <div className="flex items-center gap-1 md:gap-2">
          <NavLink icon={<FaGithub />} label="GitHub" href="https://github.com" external />
          <NavLink icon={<FaLinkedin />} label="LinkedIn" href="https://linkedin.com" external />
          <motion.button
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-hud-accent/80 hover:text-hud-accent hover:bg-hud-accent/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSun className="text-base" />
          </motion.button>
        </div>
      </motion.nav>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl w-full">

          {/* LEFT — Profile Image */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  width: '280px',
                  height: '280px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'conic-gradient(from 0deg, #3B82F6, #22D3EE, #6366F1, #3B82F6)',
                  filter: 'blur(3px)',
                  opacity: 0.6,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Second rotating ring */}
              <motion.div
                className="absolute rounded-full border-2 border-dashed border-hud-accent/30"
                style={{
                  width: '310px',
                  height: '310px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Pulse glow behind image */}
              <motion.div
                className="absolute rounded-full bg-hud-primary/20"
                style={{
                  width: '260px',
                  height: '260px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Profile image container */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-hud-bg shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <div className="w-full h-full bg-gradient-to-br from-hud-card to-hud-bg flex items-center justify-center">
                  <span className="text-5xl font-orbitron font-bold bg-gradient-to-r from-hud-primary to-hud-accent bg-clip-text text-transparent">
                    AM
                  </span>
                </div>
              </div>

              {/* Status dot */}
              <motion.div
                className="absolute bottom-4 right-4 w-5 h-5 bg-emerald-400 rounded-full border-3 border-hud-bg shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* RIGHT — Text Content */}
          <motion.div
            className="flex flex-col gap-5 order-2 md:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="w-8 h-[2px] bg-hud-accent" />
              <span className="text-hud-accent font-rajdhani text-lg tracking-widest uppercase">Welcome to my world</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="text-hud-text">Aditya</span>
              <br />
              <span className="bg-gradient-to-r from-hud-primary via-hud-accent to-hud-hover bg-clip-text text-transparent neon-text">
                Maurya
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-xl md:text-2xl font-rajdhani font-medium text-hud-primary/90 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Full Stack Developer <span className="text-hud-accent/60">|</span> AI Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Passionate about crafting innovative digital experiences with cutting-edge technology.
              Building the future one line of code at a time — from intelligent systems to seamless user interfaces.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="pt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <motion.button
                onClick={onExplore}
                className="group relative px-8 py-4 font-orbitron font-semibold text-sm tracking-widest uppercase overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Button bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-hud-primary to-hud-accent rounded-xl" />
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-hud-primary to-hud-accent rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                />
                {/* Animated border */}
                <motion.div
                  className="absolute inset-[1px] bg-hud-bg rounded-xl group-hover:bg-transparent transition-all duration-300"
                />
                <span className="relative z-10 text-hud-primary group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                  Explore Portfolio
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scan line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hud-primary/40 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}

function NavLink({ icon, label, href, external, download }) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  if (download) props.download = true;
  return (
    <motion.a
      href={href}
      {...props}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-hud-text hover:bg-hud-primary/10 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-base">{icon}</span>
      <span className="hidden md:inline">{label}</span>
    </motion.a>
  );
}
