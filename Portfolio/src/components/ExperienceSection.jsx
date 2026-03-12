import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaFlask, FaRocket } from 'react-icons/fa';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tech Startup Inc.',
    period: 'Jan 2026 – Present',
    description: 'Building scalable web applications using MERN stack. Collaborating with cross-functional teams to ship features on tight deadlines.',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    color: '#3B82F6',
    icon: FaBriefcase,
  },
  {
    role: 'AI/ML Research Trainee',
    company: 'Innovation Lab',
    period: 'Jun 2025 – Dec 2025',
    description: 'Worked on NLP and computer-vision projects. Built data pipelines and deployed models for real-time inference.',
    skills: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    color: '#6366F1',
    icon: FaFlask,
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'Jan 2025 – May 2025',
    description: 'Delivered custom websites and web apps for small businesses. Managed end-to-end client relationships from requirements to deployment.',
    skills: ['React', 'Tailwind CSS', 'Firebase', 'UI/UX'],
    color: '#22D3EE',
    icon: FaLaptopCode,
  },
  {
    role: 'Open-Source Contributor',
    company: 'Various Projects',
    period: '2024 – Present',
    description: 'Actively contributing to open-source projects. Participating in hackathons and community-driven development initiatives.',
    skills: ['Git', 'GitHub', 'TypeScript', 'Collaboration'],
    color: '#10B981',
    icon: FaRocket,
  },
];

export default function ExperienceSection() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-hud-primary to-emerald-400 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-gray-500 font-rajdhani text-lg tracking-wider">My professional journey</p>
        <div className="w-24 h-1 bg-gradient-to-r from-hud-primary to-emerald-400 mx-auto rounded-full mt-4" />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-hud-primary via-hud-accent to-hud-hover" />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                {/* Card */}
                <motion.div
                  className={`flex-1 ml-16 md:ml-0 glass rounded-2xl p-6 group`}
                  style={{ borderColor: `${exp.color}20` }}
                  whileHover={{ y: -4, boxShadow: `0 0 30px ${exp.color}15`, borderColor: `${exp.color}50` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${exp.color}15` }}>
                      <Icon className="text-lg" style={{ color: exp.color }} />
                    </div>
                    <div>
                      <span className="text-xs font-rajdhani tracking-wider uppercase" style={{ color: exp.color }}>{exp.period}</span>
                      <h3 className="text-lg font-orbitron font-bold text-hud-text leading-tight">{exp.role}</h3>
                    </div>
                  </div>

                  <p className="text-sm font-medium mb-2" style={{ color: exp.color }}>{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 text-[10px] rounded-md font-medium"
                        style={{ backgroundColor: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}25` }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-hud-bg z-10"
                  style={{ backgroundColor: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
                />

                {/* Spacer for alternating layout (desktop) */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {[
          { number: '2+', label: 'Years Experience', color: '#3B82F6' },
          { number: '15+', label: 'Projects', color: '#22D3EE' },
          { number: '5+', label: 'Technologies', color: '#6366F1' },
          { number: '10+', label: 'Clients', color: '#10B981' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="glass rounded-xl p-5 text-center"
            whileHover={{ y: -4, boxShadow: `0 0 20px ${stat.color}15` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 + i * 0.08 }}
          >
            <div className="text-2xl font-orbitron font-bold mb-1" style={{ color: stat.color }}>{stat.number}</div>
            <div className="text-xs text-gray-500 font-rajdhani uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
