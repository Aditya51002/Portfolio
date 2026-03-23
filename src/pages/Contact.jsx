import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    try {
      const response = await fetch("https://formsubmit.co/ajax/adityamaurya510@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-container-comic contact-page">
      <h2 className="page-title-comic">CONTACT</h2>
      
      <div className="contact-main-comic">
        <div className="manga-panel contact-hero-panel">
          <div className="speech-bubble-comic right">LET'S BUILD SOMETHING EPIC!</div>
          <h3 className="section-title-comic">GET IN TOUCH</h3>
          <p className="comic-text">FEEL FREE TO REACH OUT FOR COLLABORATIONS, OPPORTUNITIES, OR JUST TO SAY HI!</p>
        </div>

        <div className="contact-grid-comic">
          {/* Form Side */}
          <div className="manga-panel form-panel-comic">
            <div className="panel-label-comic">MESSAGE_NODE.EXE</div>
            {status === "SUCCESS" ? (
              <div className="success-overlay-comic">
                <div className="sfx-text" style={{ top: '-30px', left: '50%', transform: 'translateX(-50%) rotate(5deg)' }}>SUCCESS!</div>
                <CheckCircle size={80} color="var(--accent)" strokeWidth={3} />
                <h3 className="section-title-comic" style={{ fontSize: '2rem' }}>MESSAGE TRANSMITTED!</h3>
                <p className="comic-text">LOGGED IN THE SYSTEM. I'LL GET BACK TO YOU SOON!</p>
                <button className="comic-submit-btn" onClick={() => setStatus("IDLE")} style={{ marginTop: '20px' }}>
                  SEND ANOTHER?
                </button>
              </div>
            ) : (
              <form className="comic-form" onSubmit={handleSubmit}>
                <div className="comic-input-group">
                  <label>YOUR NAME</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ADITYA MAURYA" 
                  />
                </div>
                <div className="comic-input-group">
                  <label>YOUR EMAIL</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOU@EXAMPLE.COM" 
                  />
                </div>
                <div className="comic-input-group">
                  <label>YOUR MESSAGE</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="TELL ME ABOUT YOUR PROJECT OR ROLE..." 
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="comic-submit-btn" disabled={status === "SENDING"}>
                   {status === "SENDING" ? "TRANSMITTING..." : "SEND MESSAGE!"}
                </button>
                {status === "ERROR" && <p style={{ color: 'red', fontFamily: 'Bangers' }}>ERROR IN SYSTEM! TRY AGAIN.</p>}
              </form>
            )}
          </div>

          {/* Links Side */}
          <div className="links-column-comic">
            <div className="manga-panel comic-link-panel">
              <div className="panel-label-comic">DIRECT_LINKS</div>
              <div className="comic-links-stack">
                <a href="mailto:adityamaurya510@gmail.com" className="comic-link-item">
                  <Mail size={24} /> ADITYAMAURYA510@GMAIL.COM
                </a>
                <a href="https://github.com/Aditya51002" target="_blank" rel="noopener noreferrer" className="comic-link-item">
                  <Github size={24} /> GITHUB.COM/ADITYA51002
                </a>
                <a href="https://www.linkedin.com/in/adityamaurya5" target="_blank" rel="noopener noreferrer" className="comic-link-item">
                  <Linkedin size={24} /> LINKEDIN.COM/IN/ADITYAMAURYA5
                </a>
              </div>
            </div>

            <div className="manga-panel comic-info-panel">
              <p className="comic-info-text">
                ACTIVELY SEEKING NEW CHALLENGES. MY INBOX IS ALWAYS OPEN FOR INNOVATION!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          padding: 60px;
          background: #fff;
        }

        .page-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 5rem;
          color: #000;
          text-align: center;
          margin-bottom: 40px;
          -webkit-text-stroke: 2px #000;
          text-shadow: 4px 4px 0 var(--accent);
        }

        .contact-hero-panel {
          text-align: center;
          margin-bottom: 50px;
          padding: 60px;
          background-image: radial-gradient(circle, #eee 1px, transparent 1px);
          background-size: 15px 15px;
        }

        .speech-bubble-comic {
          position: relative;
          background: #000;
          color: #fff;
          padding: 10px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          display: inline-block;
          margin-bottom: 20px;
          border: 3px solid #000;
        }

        .speech-bubble-comic::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          border-width: 20px 20px 0;
          border-style: solid;
          border-color: #000 transparent transparent;
          transform: translateX(-50%);
        }

        .section-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 3.5rem;
          color: #000;
          margin-bottom: 10px;
        }

        .comic-text {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.2rem;
          color: #333;
        }

        .contact-grid-comic {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
          position: relative;
          padding: 40px;
        }

        .panel-label-comic {
          position: absolute;
          top: -15px;
          left: 20px;
          background: #000;
          color: #fff;
          padding: 2px 15px;
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
        }

        .comic-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .comic-input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .comic-input-group label {
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          color: #000;
        }

        .comic-input-group input,
        .comic-input-group textarea {
          border: 4px solid #000;
          padding: 15px;
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          outline: none;
          background: #fff;
          transition: 0.2s;
        }

        .comic-input-group input:focus,
        .comic-input-group textarea:focus {
          box-shadow: 6px 6px 0 var(--accent);
          transform: translate(-3px, -3px);
        }

        .comic-submit-btn {
          background: #000;
          color: #fff;
          border: none;
          padding: 15px;
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 8px 8px 0 var(--accent);
        }

        .comic-submit-btn:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0 var(--accent);
        }

        .links-column-comic {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .comic-links-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .comic-link-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #000;
          text-decoration: none;
          padding: 15px;
          border: 3px solid #000;
          transition: 0.2s;
        }

        .comic-link-item:hover {
          background: #000;
          color: #fff;
          transform: scale(1.02);
        }

        .comic-info-panel {
          background: #eee;
          border-left: 10px solid var(--accent);
        }

        .comic-info-text {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #444;
          text-align: center;
        }

        .success-overlay-comic {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          gap: 15px;
          min-height: 400px;
          animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 900px) {
          .contact-grid-comic { grid-template-columns: 1fr; }
          .page-title-comic { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};
export default Contact;
