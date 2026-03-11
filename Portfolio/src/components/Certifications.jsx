import { motion } from 'framer-motion'

const CERTS = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'Jan 2025',
    id: 'CERT-12345',
    color: '#ef4444',
    icon: '🏅',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Nov 2024',
    id: 'AWS-CLF-90210',
    color: '#f59e0b',
    icon: '☁️',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM (Coursera)',
    date: 'Aug 2024',
    id: 'IBM-PY-67890',
    color: '#3b82f6',
    icon: '🐍',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'May 2024',
    id: 'FCC-RWD-54321',
    color: '#10b981',
    icon: '📱',
  },
]

export default function Certifications() {
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
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Certifications
        </h1>
        <p className="text-gray-400 text-lg">Verified credentials and achievements</p>
        <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full mt-4"></div>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {CERTS.map((cert, i) => (
          <motion.div
            key={i}
            className="relative group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -10, borderColor: cert.color }}
          >
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-3xl"
              style={{ backgroundColor: cert.color }}
            />

            {/* Ribbon */}
            <div
              className="absolute top-0 right-0 w-24 h-24 opacity-20"
              style={{
                background: `radial-gradient(circle at top right, ${cert.color}, transparent)`,
              }}
            />

            {/* Content */}
            <div className="relative flex items-start gap-6">
              {/* Badge */}
              <motion.div
                className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border-2"
                style={{
                  backgroundColor: `${cert.color}20`,
                  borderColor: cert.color,
                }}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {cert.icon}
              </motion.div>

              {/* Info */}
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold mb-2 group-hover:text-white transition-colors"
                  style={{ color: cert.color }}
                >
                  {cert.title}
                </h3>
                <p className="text-purple-400 font-semibold mb-3">{cert.issuer}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    <span className="text-gray-400">📅</span> {cert.date}
                  </span>
                  <span className="text-gray-500 font-mono text-xs">
                    ID: {cert.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Verify Button */}
            <motion.button
              className="relative mt-6 w-full px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 border border-slate-600 rounded-lg font-semibold transition-all"
              whileHover={{ scale: 1.02, borderColor: cert.color }}
              whileTap={{ scale: 0.98 }}
            >
              Verify Certificate →
            </motion.button>

            {/* Corner decoration */}
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-1"
              style={{ backgroundColor: cert.color, opacity: 0.5 }}
              initial={{ width: 0 }}
              animate={{ width: '8rem' }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {[
          { number: '4+', label: 'Certifications', icon: '🏆', color: '#ef4444' },
          { number: '3', label: 'Platforms', icon: '📚', color: '#f59e0b' },
          { number: '100%', label: 'Verified', icon: '✅', color: '#10b981' },
          { number: '2025', label: 'Latest', icon: '🎯', color: '#3b82f6' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center"
            whileHover={{ y: -10, borderColor: stat.color }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.05 }}
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
