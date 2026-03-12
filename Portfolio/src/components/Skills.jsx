import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiPostgresql, SiFirebase, SiTensorflow } from 'react-icons/si';

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: '#3B82F6',
    skills: [
      { name: 'React', level: 85, icon: FaReact },
      { name: 'JavaScript', level: 88, icon: SiJavascript },
      { name: 'Tailwind CSS', level: 82, icon: SiTailwindcss },
      { name: 'HTML5', level: 92, icon: FaHtml5 },
      { name: 'CSS3', level: 90, icon: FaCss3Alt },
    ],
  },
  {
    category: 'Backend',
    color: '#22D3EE',
    skills: [
      { name: 'Node.js', level: 78, icon: FaNodeJs },
      { name: 'Express', level: 75, icon: SiExpress },
      { name: 'Python', level: 80, icon: FaPython },
      { name: 'REST APIs', level: 82, icon: null },
    ],
  },
  {
    category: 'Database & Cloud',
    color: '#10B981',
    skills: [
      { name: 'MongoDB', level: 75, icon: SiMongodb },
      { name: 'PostgreSQL', level: 68, icon: SiPostgresql },
      { name: 'Firebase', level: 65, icon: SiFirebase },
    ],
  },
  {
    category: 'AI / ML & Tools',
    color: '#6366F1',
    skills: [
      { name: 'TensorFlow', level: 60, icon: SiTensorflow },
      { name: 'Git', level: 88, icon: FaGitAlt },
      { name: 'Docker', level: 50, icon: FaDocker },
      { name: 'TypeScript', level: 70, icon: SiTypescript },
    ],
  },
];

function ProgressRing({ level, color, size = 80, strokeWidth = 6 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        style={{ filter: `drop-shadow(0 0 6px ${color}60)` }}
      />
    </svg>
  );
}

export default function Skills() {
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
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-hud-accent to-hud-hover bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-gray-500 font-rajdhani text-lg tracking-wider">Technologies I work with</p>
        <div className="w-24 h-1 bg-gradient-to-r from-hud-accent to-hud-hover mx-auto rounded-full mt-4" />
      </motion.div>

      {/* Skill groups */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.category}
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + gi * 0.1 }}
            whileHover={{ y: -4, boxShadow: `0 0 30px ${group.color}10` }}
          >
            <h3 className="text-xl font-orbitron font-bold mb-8" style={{ color: group.color }}>
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-6 justify-center">
              {group.skills.map((skill, si) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 group cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + gi * 0.1 + si * 0.06 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="relative">
                      <ProgressRing level={skill.level} color={group.color} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {Icon ? (
                          <Icon className="text-lg mb-0.5" style={{ color: group.color }} />
                        ) : (
                          <span className="text-xs font-bold" style={{ color: group.color }}>API</span>
                        )}
                        <span className="text-[10px] font-orbitron font-bold text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium text-center">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional skills cloud */}
      <motion.div
        className="glass rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-orbitron font-bold text-hud-text mb-6 text-center">Other Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Next.js', 'Redux', 'GraphQL', 'Redis', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Sass', 'Material-UI', 'Prisma', 'Socket.io'].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-hud-accent hover:border-hud-accent/40 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.03 }}
              whileHover={{ scale: 1.08, y: -3 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
