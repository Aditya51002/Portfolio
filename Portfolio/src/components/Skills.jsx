import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: '#00f5ff',
    skills: [
      { name: 'React',       level: 80 },
      { name: 'HTML/CSS',    level: 90 },
      { name: 'JavaScript',  level: 82 },
      { name: 'Tailwind',    level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#a855f7',
    skills: [
      { name: 'Node.js',     level: 70 },
      { name: 'Express',     level: 65 },
      { name: 'Python',      level: 72 },
      { name: 'REST APIs',   level: 78 },
    ],
  },
  {
    category: 'Database',
    color: '#10b981',
    skills: [
      { name: 'MongoDB',     level: 68 },
      { name: 'MySQL',       level: 72 },
      { name: 'Firebase',    level: 60 },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: '#f59e0b',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code',      level: 90 },
      { name: 'Docker',       level: 45 },
      { name: 'Linux',        level: 60 },
    ],
  },
]

export default function Skills() {
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
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-gray-400 text-lg">Technologies I work with</p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_GROUPS.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + groupIdx * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: group.color }}>
              {group.category}
            </h3>
            
            <div className="space-y-5">
              {group.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + groupIdx * 0.1 + skillIdx * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm font-bold" style={{ color: group.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: group.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ 
                        delay: 0.5 + groupIdx * 0.1 + skillIdx * 0.05,
                        duration: 1,
                        ease: "easeOut"
                      }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 blur-sm"
                        style={{ backgroundColor: group.color }}
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Cloud */}
      <motion.div
        className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Other Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['TypeScript', 'Next.js', 'Redux', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS', 
            'CI/CD', 'Jest', 'Webpack', 'Sass', 'Material-UI'].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full border border-slate-600 hover:border-neon-blue hover:text-neon-blue transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
