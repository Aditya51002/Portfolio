import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const certifications = [
  { title: 'Meta Front-End Developer', issuer: 'Meta (Coursera)', date: 'Jan 2025', color: '#3B82F6', icon: FaCertificate },
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Nov 2024', color: '#F59E0B', icon: FaCertificate },
  { title: 'Python for Data Science', issuer: 'IBM (Coursera)', date: 'Aug 2024', color: '#6366F1', icon: FaCertificate },
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp', date: 'May 2024', color: '#10B981', icon: FaCertificate },
];

const achievements = [
  { title: 'Smart India Hackathon Finalist', desc: 'Top-10 finish among 500+ teams in SIH 2025', color: '#F59E0B', icon: FaTrophy },
  { title: 'Code Challenge Winner', desc: 'First place in university-level coding competition', color: '#EC4899', icon: FaMedal },
  { title: 'Open Source Contributor', desc: 'Merged PRs in popular React component libraries', color: '#22D3EE', icon: FaAward },
  { title: 'Dean\'s List', desc: 'Recognized for academic excellence — multiple semesters', color: '#10B981', icon: FaMedal },
];

export default function Achievements() {
  return (
    <motion.div className="section-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {/* Header */}
      <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-amber-400 to-hud-hover bg-clip-text text-transparent">
          Achievements
        </h1>
        <p className="text-gray-500 font-rajdhani text-lg tracking-wider">Certifications, awards & recognitions</p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-hud-hover mx-auto rounded-full mt-4" />
      </motion.div>

      {/* Certifications */}
      <motion.h2 className="text-2xl font-orbitron font-bold text-hud-text mb-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Certifications
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.title}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
              style={{ borderColor: `${cert.color}20` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: `0 0 30px ${cert.color}15`, borderColor: `${cert.color}50` }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-25 transition-opacity"
                style={{ background: `radial-gradient(circle at top right, ${cert.color}, transparent)` }} />

              <div className="relative flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                  <Icon className="text-2xl" style={{ color: cert.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-orbitron font-bold text-hud-text text-sm mb-1 truncate">{cert.title}</h3>
                  <p className="text-xs font-medium mb-1" style={{ color: cert.color }}>{cert.issuer}</p>
                  <p className="text-xs text-gray-600">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Awards & Recognitions */}
      <motion.h2 className="text-2xl font-orbitron font-bold text-hud-text mb-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        Awards & Recognitions
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map((ach, i) => {
          const Icon = ach.icon;
          return (
            <motion.div
              key={ach.title}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
              style={{ borderColor: `${ach.color}20` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: `0 0 30px ${ach.color}15`, borderColor: `${ach.color}50` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-25 transition-opacity"
                style={{ background: `radial-gradient(circle at top right, ${ach.color}, transparent)` }} />

              <div className="relative flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${ach.color}15`, border: `1px solid ${ach.color}30` }}>
                  <Icon className="text-2xl" style={{ color: ach.color }} />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-hud-text text-sm mb-1">{ach.title}</h3>
                  <p className="text-xs text-gray-500">{ach.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary stats */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
        {[
          { n: '4+', l: 'Certifications', c: '#3B82F6' },
          { n: '2+', l: 'Hackathons', c: '#F59E0B' },
          { n: '100%', l: 'Verified', c: '#10B981' },
          { n: '3', l: 'Platforms', c: '#6366F1' },
        ].map((s) => (
          <div key={s.l} className="glass rounded-xl p-4 text-center">
            <div className="text-xl font-orbitron font-bold" style={{ color: s.c }}>{s.n}</div>
            <div className="text-[10px] text-gray-500 font-rajdhani uppercase tracking-wider mt-1">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
