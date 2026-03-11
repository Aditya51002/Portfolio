import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-400 mx-auto rounded-full"></div>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Image Side */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-purple-500/30 rounded-2xl blur-2xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-neon-blue/30 flex items-center justify-center overflow-hidden">
              <span className="text-9xl font-bold text-neon-blue">YN</span>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-green-500 w-16 h-16 rounded-full border-4 border-[#060b14] flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">👋</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Side */}
        <div className="space-y-6">
          <motion.h2
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hello! I'm <span className="text-neon-blue">Your Name</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            A passionate Full Stack Developer with expertise in the MERN stack, Android development, 
            and software testing. I love creating innovative solutions that solve real-world problems 
            and deliver exceptional user experiences.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            My journey in tech started with curiosity and evolved into a profession I'm truly passionate about. 
            I believe in continuous learning, clean code, and building products that make a difference.
          </motion.p>

          

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { number: '10+', label: 'Projects' },
              { number: '5+', label: 'Technologies' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800/50 backdrop-blur-sm border border-neon-blue/20 rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-neon-blue mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* What I Do Section */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-4xl font-bold text-white text-center mb-12">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🌐',
              title: 'Full Stack Development',
              desc: 'Building complete web applications with React, Node.js, Express, and MongoDB',
              color: '#00f5ff'
            },
            {
              icon: '📱',
              title: 'Android Development',
              desc: 'Creating native Android apps with modern architecture and user-centric design',
              color: '#a855f7'
            },
            {
              icon: '🧪',
              title: 'Software Testing',
              desc: 'Ensuring quality through comprehensive testing strategies and automation',
              color: '#ec4899'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-opacity-100 transition-all"
              style={{ borderColor: `${item.color}40` }}
              whileHover={{ y: -10, borderColor: item.color }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interests/Hobbies */}
      <motion.div
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Beyond Code</h3>
        <div className="flex flex-wrap gap-3">
          {['🎮 Gaming', '📚 Reading', '🎵 Music', '✈️ Travel', '📷 Photography', '🎨 Design'].map((hobby, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full border border-slate-600 hover:border-neon-blue hover:text-neon-blue transition-all cursor-default"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.05 }}
            >
              {hobby}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
