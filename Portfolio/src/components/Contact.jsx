import { useState } from 'react'
import SectionCard from './SectionCard'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // In a real app, wire this to an email API like EmailJS or Formspree
    setSent(true)
  }

  return (
    <SectionCard id="contact" accentColor="#ec4899">
      <p className="section-title" style={{ color: '#ec4899' }}>Contact</p>
      <p className="section-subtitle">Let's Build Something Together</p>
      <div className="section-divider" style={{ background: '#ec4899' }} />

      <div className="contact-layout">
        <div className="contact-info">
          <p className="contact-tagline">
            I'm actively looking for opportunities. Whether you have a project, a
            question, or just want to say hello — my inbox is always open. 🚀
          </p>

          <div className="contact-links">
            {[
              { icon: '📧', label: 'Email',    href: 'mailto:your@email.com',           text: 'your@email.com' },
              { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', text: 'linkedin.com/in/yourname' },
              { icon: '🐙', label: 'GitHub',   href: 'https://github.com/yourname',     text: 'github.com/yourname' },
            ].map(link => (
              <a key={link.label} href={link.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-icon">{link.icon}</span>
                <div>
                  <div className="contact-link-label">{link.label}</div>
                  <div className="contact-link-text">{link.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="form-success">
              <span className="success-icon">✅</span>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <>
              {[
                { name: 'name',    placeholder: 'Your Name',    type: 'text',  required: true },
                { name: 'email',   placeholder: 'Your Email',   type: 'email', required: true },
              ].map(field => (
                <input
                  key={field.name}
                  className="form-input"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.required}
                />
              ))}
              <textarea
                className="form-input form-textarea"
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
              <button className="form-submit" type="submit">Send Message →</button>
            </>
          )}
        </form>
      </div>
    </SectionCard>
  )
}
