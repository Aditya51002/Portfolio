import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaStar, FaCodeBranch } from 'react-icons/fa';

const contactLinks = [
  { icon: FaEnvelope, label: 'Email', value: 'adityamaurya@email.com', href: 'mailto:adityamaurya@email.com', color: '#3B82F6' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/adityamaurya', href: 'https://github.com', color: '#F8FAFC' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/adityamaurya', href: 'https://linkedin.com', color: '#0A66C2' },
  { icon: FaDownload, label: 'Resume', value: 'Download CV', href: '/resume.pdf', color: '#22D3EE', download: true },
];

const githubRepos = [
  { name: 'ai-task-manager', desc: 'Smart productivity app with AI prioritization', stars: 24, forks: 8, lang: 'JavaScript', langColor: '#F7DF1E' },
  { name: 'ecommerce-platform', desc: 'Full-featured MERN e-commerce store', stars: 18, forks: 5, lang: 'TypeScript', langColor: '#3178C6' },
  { name: 'portfolio-hud', desc: 'Iron Man HUD-inspired portfolio website', stars: 42, forks: 12, lang: 'React', langColor: '#61DAFB' },
  { name: 'ml-image-classifier', desc: 'CNN-based image classifier with web UI', stars: 15, forks: 3, lang: 'Python', langColor: '#3776AB' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div className="section-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {/* Header */}
      <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-red-400 to-hud-primary bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-gray-500 font-rajdhani text-lg tracking-wider">Let's build something amazing together</p>
        <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-hud-primary mx-auto rounded-full mt-4" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left — Info + GitHub Activity */}
        <div className="space-y-8">
          {/* Contact Links */}
          <motion.div
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-orbitron font-bold text-hud-text mb-5">Get in Touch</h3>
            <div className="space-y-3">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                const props = link.download
                  ? { href: link.href, download: true }
                  : { href: link.href, target: '_blank', rel: 'noopener noreferrer' };
                return (
                  <motion.a
                    key={link.label}
                    {...props}
                    className="flex items-center gap-4 p-3 rounded-xl glass group hover:border-hud-primary/40 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${link.color}12`, border: `1px solid ${link.color}25` }}>
                      <Icon className="text-sm" style={{ color: link.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-gray-600 font-rajdhani uppercase tracking-wider">{link.label}</p>
                      <p className="text-sm text-gray-300 truncate group-hover:text-hud-text transition-colors">{link.value}</p>
                    </div>
                    <FaArrowRight className="text-xs text-gray-600 group-hover:text-hud-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <FaGithub className="text-xl text-hud-text" />
              <h3 className="text-lg font-orbitron font-bold text-hud-text">GitHub Activity</h3>
            </div>

            <div className="space-y-3">
              {githubRepos.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  className="glass rounded-xl p-4 group hover:border-hud-primary/30 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.08 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-hud-primary group-hover:text-hud-accent transition-colors">{repo.name}</span>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FaStar className="text-amber-400" /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><FaCodeBranch /> {repo.forks}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{repo.desc}</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    <span className="text-[10px] text-gray-500">{repo.lang}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contribution graph placeholder */}
            <motion.div
              className="mt-4 glass rounded-xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-[10px] text-gray-600 font-rajdhani uppercase tracking-wider mb-3">Contribution Activity</p>
              <div className="flex gap-[3px] flex-wrap">
                {[...Array(52)].map((_, week) => (
                  <div key={week} className="flex flex-col gap-[3px]">
                    {[...Array(7)].map((_, day) => {
                      const intensity = Math.random();
                      const opacity = intensity < 0.3 ? 0.08 : intensity < 0.6 ? 0.2 : intensity < 0.8 ? 0.4 : 0.7;
                      return (
                        <div
                          key={day}
                          className="w-[10px] h-[10px] rounded-[2px]"
                          style={{ backgroundColor: `rgba(59,130,246,${opacity})` }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — Contact Form */}
        <motion.form
          className="glass rounded-2xl p-6 md:p-8 h-fit"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {sent ? (
            <motion.div
              className="flex flex-col items-center justify-center py-16 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-3xl mb-6">✅</div>
              <h3 className="text-xl font-orbitron font-bold text-hud-text mb-2">Message Sent!</h3>
              <p className="text-sm text-gray-500">Thanks for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <>
              <h3 className="text-lg font-orbitron font-bold text-hud-text mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] text-gray-600 font-rajdhani uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    className="w-full px-4 py-3 glass rounded-xl text-sm text-hud-text placeholder-gray-600 focus:outline-none focus:border-hud-primary/50 transition-colors"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-600 font-rajdhani uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    className="w-full px-4 py-3 glass rounded-xl text-sm text-hud-text placeholder-gray-600 focus:outline-none focus:border-hud-primary/50 transition-colors"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-600 font-rajdhani uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    className="w-full px-4 py-3 glass rounded-xl text-sm text-hud-text placeholder-gray-600 focus:outline-none focus:border-hud-primary/50 transition-colors resize-none"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <motion.button
                  className="w-full py-3 rounded-xl font-orbitron text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-hud-primary to-hud-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message →
                </motion.button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}
