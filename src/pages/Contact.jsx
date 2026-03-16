import React from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">Contact</h2>
      
      <div className="contact-header about-card">
        <h2>Let's build together</h2>
        <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
      </div>

      <div className="contact-layout">
        {/* Left Side: Form */}
        <div className="about-card form-section">
          <div className="badge">MESSAGE NODE</div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Tell me about the role or collaboration idea" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn" onClick={() => alert("Form submission endpoint pending.")}>
               <Send size={18} /> Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Direct Links */}
        <div className="about-card links-section">
          <div className="badge">DIRECT LINKS</div>
          
          <div className="links-stack">
            <a href="mailto:adityamaurya510@gmail.com" className="direct-link">
              <Mail size={20} /> adityamaurya510@gmail.com
            </a>
            <a href="https://github.com/Aditya51002" target="_blank" rel="noopener noreferrer" className="direct-link">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/adityamaurya5" target="_blank" rel="noopener noreferrer" className="direct-link">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="links-footer">
            <p className="text-secondary">
              Currently actively looking for new opportunities so my inbox is always open!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .contact-header {
          margin-bottom: 30px;
          text-align: left;
          padding: 30px 40px;
        }

        .contact-header h2 {
          font-size: 2.2rem;
          color: #fff;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .contact-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: stretch;
        }

        .about-card {
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 40px;
          position: relative;
        }

        .badge {
          display: inline-block;
          background: rgba(147, 51, 234, 0.2);
          color: var(--accent-light);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 30px;
          border: 1px solid rgba(147, 51, 234, 0.4);
        }

        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          color: #eee;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .input-group input,
        .input-group textarea {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 15px;
          color: #fff;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(0, 0, 0, 0.4);
          box-shadow: 0 0 15px rgba(147, 51, 234, 0.1);
        }

        .submit-btn {
          margin-top: 10px;
          background: var(--accent);
          color: #fff;
          border: none;
          padding: 15px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
        }

        /* Links Styles */
        .links-section {
          display: flex;
          flex-direction: column;
        }

        .links-stack {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: auto;
        }

        .direct-link {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.03);
          padding: 20px;
          border-radius: 14px;
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .direct-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-light);
          transform: translateX(5px);
        }

        .links-footer {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
