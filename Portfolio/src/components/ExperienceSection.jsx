import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Tech Startup Inc.',
      period: 'Jan 2026 - Present',
      description: 'Working on building scalable web applications using MERN stack. Collaborated with cross-functional teams to deliver features on time.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      color: '#00f5ff',
      icon: '💼'
    },
    {
      role: 'Android Developer',
      company: 'Mobile Solutions Ltd.',
      period: 'Jun 2025 - Dec 2025',
      description: 'Developed native Android applications with focus on performance and user experience. Implemented MVVM architecture.',
      skills: ['Kotlin', 'Android SDK', 'Firebase', 'MVVM'],
      color: '#3DDC84',
      icon: '📱'
    },
    {
      role: 'Software Testing Intern',
      company: 'Quality Assurance Corp.',
      period: 'Mar 2025 - May 2025',
      description: 'Created comprehensive test cases and automated testing workflows. Improved test coverage by 40%.',
      skills: ['Selenium', 'Jest', 'JUnit', 'CI/CD'],
      color: '#a855f7',
      icon: '🧪'
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2024 - Present',
      description: 'Building custom web and mobile solutions for clients. Delivering high-quality projects on time and within budget.',
      skills: ['Full Stack', 'UI/UX', 'Client Management'],
      color: '#ec4899',
      icon: '🚀'
    },
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto"
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
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-green-400 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-gray-400 text-lg">My professional journey and growth</p>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-green-400 mx-auto rounded-full mt-4"></div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-purple-500 to-pink-500"></div>

        {/* Experience items */}
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`flex items-center gap-8 ${
                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              {/* Content */}
              <motion.div
                className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-opacity-100 transition-all"
                  style={{ borderColor: `${exp.color}40` }}
                  whileHover={{ borderColor: exp.color, y: -5 }}
                >
                  {/* Icon */}
                  <div className={`text-4xl mb-3 ${i % 2 === 0 ? 'float-right ml-4' : 'float-left mr-4'}`}>
                    {exp.icon}
                  </div>

                  {/* Period */}
                  <div className="text-sm text-neon-blue font-semibold mb-2">
                    {exp.period}
                  </div>

                  {/* Role */}
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <div className="text-purple-400 font-semibold mb-3">
                    {exp.company}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 clear-both">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full border border-slate-600"
                        style={{ borderColor: `${exp.color}30` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Center dot */}
              <motion.div
                className="relative z-10 w-6 h-6 rounded-full border-4 border-[#060b14] flex-shrink-0"
                style={{ backgroundColor: exp.color }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
                whileHover={{ scale: 1.3 }}
              >
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: exp.color }}
                  animate={{
                    scale: [1, 2, 2],
                    opacity: [0.7, 0, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid md:grid-cols-4 gap-6 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        {[
          { number: '2+', label: 'Years Experience', icon: '⏱️', color: '#00f5ff' },
          { number: '15+', label: 'Projects Completed', icon: '✅', color: '#10b981' },
          { number: '5+', label: 'Technologies', icon: '⚡', color: '#a855f7' },
          { number: '10+', label: 'Happy Clients', icon: '😊', color: '#ec4899' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center"
            whileHover={{ y: -10, borderColor: stat.color }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 + i * 0.1 }}
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
