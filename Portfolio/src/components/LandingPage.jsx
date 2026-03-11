import { motion } from 'framer-motion';

export default function LandingPage({ onExplore }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#060b14] z-50">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: '10%', right: '10%' }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background: 'linear-gradient(#060b14, #060b14) padding-box, linear-gradient(45deg, #00f5ff, #a855f7, #ec4899) border-box',
                width: '220px',
                height: '220px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Profile circle */}
            <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-neon-blue/30 to-purple-500/30 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                {/* Replace with your profile image */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-neon-blue">YN</span>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-blue rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos(i * 45 * Math.PI / 180) * 150],
                  y: [0, Math.sin(i * 45 * Math.PI / 180) * 150],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Status indicator */}
          <motion.div
            className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-[#060b14]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Your Name
        </motion.h1>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="px-4 py-1 bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30 font-medium">
            Full Stack Developer
          </span>
          <span className="text-gray-500">|</span>
          <span className="px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 font-medium">
            MERN Stack
          </span>
          <span className="text-gray-500">|</span>
          <span className="px-4 py-1 bg-pink-500/20 text-pink-400 rounded-full border border-pink-500/30 font-medium">
            Android Developer
          </span>
          <span className="text-gray-500">|</span>
          <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 font-medium">
            Software Tester
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Passionate about building innovative solutions and crafting seamless user experiences. 
          Transforming ideas into reality through clean code and modern design principles.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onExplore}
          className="group relative px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-purple-500 to-pink-500 rounded-full" />
          
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-blue via-purple-500 to-pink-500 rounded-full blur-xl opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <span className="relative z-10 flex items-center gap-2">
            Explore Portfolio
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Scroll hint */}
        <motion.p
          className="mt-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Click to discover my work
        </motion.p>
      </motion.div>
    </div>
  );
}
