import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // In a real app, wire this to an email API like EmailJS or Formspree
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

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
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-lg">Let's build something amazing together</p>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Let's Talk</h2>
            <p className="text-gray-400 mb-8">
              I'm actively looking for opportunities. Whether you have a project, a
              question, or just want to say hello — my inbox is always open. 🚀
            </p>

            <div className="space-y-6">
              {[
                { icon: '📧', label: 'Email', text: 'your@email.com', href: 'mailto:your@email.com', color: '#00f5ff' },
                { icon: '💼', label: 'LinkedIn', text: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname', color: '#0A66C2' },
                { icon: '🐙', label: 'GitHub', text: 'github.com/yourname', href: 'https://github.com/yourname', color: '#a855f7' },
                { icon: '📱', label: 'Phone', text: '+1 234 567 8900', href: 'tel:+1234567890', color: '#ec4899' },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-3xl">{link.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{link.label}</div>
                    <div className="font-medium group-hover:text-neon-blue transition-colors" style={{ color: link.color }}>
                      {link.text}
                    </div>
                  </div>
                  <span className="text-gray-500 group-hover:text-neon-blue transition-colors">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Medium', 'Dev.to'].map((social, i) => (
                <motion.button
                  key={social}
                  className="flex-1 py-3 bg-slate-700/50 hover:bg-slate-700 text-gray-300 rounded-lg font-semibold transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                >
                  {social}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {sent ? (
            <motion.div
              className="h-full flex flex-col items-center justify-center text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                ✅
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <div className="space-y-5">
                {[
                  { name: 'name', placeholder: 'Your Name', type: 'text' },
                  { name: 'email', placeholder: 'Your Email', type: 'email' },
                ].map((field, i) => (
                  <motion.input
                    key={field.name}
                    className="w-full px-5 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-all"
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                ))}
                
                <motion.textarea
                  className="w-full px-5 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-all resize-none"
                  name="message"
                  placeholder="Your Message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                />
                
                <motion.button
                  className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
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
  )
}
