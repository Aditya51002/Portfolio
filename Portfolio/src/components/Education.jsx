import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Education() {
  return (
    <motion.div className="section-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {/* Header */}
      <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-pink-400 to-hud-hover bg-clip-text text-transparent">
          Education
        </h1>
        <p className="text-gray-500 font-rajdhani text-lg tracking-wider">Academic background & qualifications</p>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-hud-hover mx-auto rounded-full mt-4" />
      </motion.div>

      {/* Education Card */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden group"
          whileHover={{ boxShadow: '0 0 40px rgba(99,102,241,0.15)' }}
        >
          {/* Decorative gradient corner */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity"
            style={{ background: 'radial-gradient(circle at top right, #6366F1, transparent 70%)' }}
          />

          {/* Degree badge */}
          <div className="flex items-start gap-6 mb-8">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-hud-hover/15 border border-hud-hover/30 flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 10, scale: 1.05 }}
            >
              <FaGraduationCap className="text-3xl text-hud-hover" />
            </motion.div>
            <div>
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-hud-text mb-2">
                Bachelor of Technology
              </h2>
              <p className="text-lg font-rajdhani text-hud-hover tracking-wide">
                Computer Science & Engineering
              </p>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <DetailItem icon={FaUniversity} label="University" value="Your University Name" color="#3B82F6" />
            <DetailItem icon={FaMapMarkerAlt} label="Location" value="City, State, India" color="#22D3EE" />
            <DetailItem icon={FaCalendarAlt} label="Duration" value="2022 – 2026" color="#6366F1" />
            <DetailItem icon={FaGraduationCap} label="CGPA" value="8.5 / 10" color="#10B981" />
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-hud-primary mb-4 tracking-wider uppercase">Key Highlights</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Database Management Systems',
                'Operating Systems',
                'Computer Networks',
                'Artificial Intelligence',
                'Software Engineering',
                'Web Technologies',
              ].map((course) => (
                <motion.div
                  key={course}
                  className="flex items-center gap-2 text-sm text-gray-400"
                  whileHover={{ x: 4, color: '#F8FAFC' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-hud-primary flex-shrink-0" />
                  {course}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Schooling */}
        <motion.div
          className="mt-8 glass rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ boxShadow: '0 0 30px rgba(59,130,246,0.1)' }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-hud-primary/15 border border-hud-primary/30 flex items-center justify-center">
              <FaUniversity className="text-lg text-hud-primary" />
            </div>
            <div>
              <h3 className="text-lg font-orbitron font-bold text-hud-text">Higher Secondary (XII)</h3>
              <p className="text-sm text-hud-primary">Science — PCM + CS</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📍 Your School Name</span>
            <span>📅 2020 – 2022</span>
            <span>📊 92%</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function DetailItem({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}12`, border: `1px solid ${color}20` }}>
        <Icon className="text-sm" style={{ color }} />
      </div>
      <div>
        <p className="text-[10px] text-gray-600 font-rajdhani uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-hud-text">{value}</p>
      </div>
    </div>
  );
}
