import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaServer, FaRocket } from 'react-icons/fa';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }) };

export default function AboutSection() {
  return (
    <motion.div className="section-container" initial="hidden" animate="visible">
      {/* Header */}
      <motion.div className="text-center mb-16" variants={fadeUp} custom={0}>
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-hud-primary to-hud-accent bg-clip-text text-transparent neon-text">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-hud-primary to-hud-accent mx-auto rounded-full" />
      </motion.div>

      {/* Two-column intro */}
      <motion.div className="grid lg:grid-cols-5 gap-12 items-center mb-20" variants={fadeUp} custom={1}>
        {/* Left — Avatar */}
        <div className="lg:col-span-2 flex justify-center">
          <motion.div
            className="relative w-72 h-72 rounded-2xl overflow-hidden border-2 border-hud-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(59,130,246,0.3)' }}
          >
            <div className="w-full h-full bg-gradient-to-br from-hud-card to-hud-bg flex items-center justify-center">
              <span className="text-8xl font-orbitron font-bold bg-gradient-to-br from-hud-primary to-hud-accent bg-clip-text text-transparent">AM</span>
            </div>
            <motion.div
              className="absolute -bottom-3 -right-3 bg-emerald-400 w-12 h-12 rounded-xl border-4 border-hud-bg flex items-center justify-center text-xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋
            </motion.div>
          </motion.div>
        </div>

        {/* Right — Bio */}
        <div className="lg:col-span-3 space-y-5">
          <motion.h2 className="text-3xl font-orbitron font-bold text-hud-text" variants={fadeUp} custom={2}>
            Hello! I'm <span className="text-hud-primary neon-text">Aditya Maurya</span>
          </motion.h2>

          <motion.p className="text-gray-400 text-lg leading-relaxed" variants={fadeUp} custom={3}>
            A passionate Full Stack Developer and AI Enthusiast with a drive for building innovative digital experiences.
            I specialize in creating robust web applications using modern technologies and love exploring the intersection
            of software development and artificial intelligence.
          </motion.p>

          <motion.p className="text-gray-400 text-lg leading-relaxed" variants={fadeUp} custom={4}>
            My goal is to craft solutions that are not only technically strong but also deliver exceptional user experiences.
            I believe in continuous learning, writing clean & maintainable code, and building products that make a real impact.
          </motion.p>

          {/* Quick stats */}
          <motion.div className="grid grid-cols-3 gap-4 pt-4" variants={fadeUp} custom={5}>
            {[
              { number: '10+', label: 'Projects' },
              { number: '5+', label: 'Technologies' },
              { number: '100%', label: 'Dedication' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 text-center hover:border-hud-primary/40 transition-colors"
              >
                <div className="text-2xl font-orbitron font-bold text-hud-primary">{stat.number}</div>
                <div className="text-xs text-gray-500 font-rajdhani uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* What I Do */}
      <motion.div variants={fadeUp} custom={6}>
        <h2 className="text-3xl font-orbitron font-bold text-hud-text text-center mb-12">What I Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FaCode, title: 'Frontend Dev', desc: 'Building responsive, interactive UIs with React, Tailwind & modern frameworks', color: '#3B82F6' },
            { icon: FaServer, title: 'Backend Dev', desc: 'Creating RESTful APIs and server-side logic with Node.js, Express & databases', color: '#22D3EE' },
            { icon: FaBrain, title: 'AI / ML', desc: 'Exploring machine learning, NLP, and intelligent systems with Python', color: '#6366F1' },
            { icon: FaRocket, title: 'Full Stack', desc: 'End-to-end application development from concept to deployment', color: '#10B981' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass rounded-2xl p-6 text-center group hover:border-opacity-60 transition-all cursor-default"
                style={{ borderColor: `${item.color}30` }}
                variants={fadeUp}
                custom={7 + i}
                whileHover={{ y: -8, boxShadow: `0 0 30px ${item.color}20` }}
              >
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                  <Icon className="text-2xl" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-orbitron font-semibold text-hud-text mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div className="mt-16 glass rounded-2xl p-8" variants={fadeUp} custom={11}>
        <h3 className="text-xl font-orbitron font-bold text-hud-text mb-6">Beyond Code</h3>
        <div className="flex flex-wrap gap-3">
          {['🎮 Gaming', '📚 Reading', '🎵 Music', '✈️ Travel', '📷 Photography', '🧩 Problem Solving', '☕ Coffee Enthusiast'].map((hobby, i) => (
            <motion.span
              key={hobby}
              className="px-4 py-2 glass rounded-full text-gray-400 text-sm hover:text-hud-accent hover:border-hud-accent/40 transition-all cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.05 }}
            >
              {hobby}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
