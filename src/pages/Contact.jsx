const Contact = () => {
  return (
    <div className="page-container glass">
      <h2 className="page-title">Contact</h2>
      <div className="content-wrapper contact-wrapper">
        <a href="mailto:adityamaurya510@gmail.com" className="contact-card">
          <div className="icon">✉️</div>
          <div className="info">
            <h3>Email</h3>
            <p>adityamaurya510@gmail.com</p>
          </div>
        </a>
        <div className="contact-card">
          <div className="icon">📱</div>
          <div className="info">
            <h3>Mobile</h3>
            <p>+91-9721392563</p>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/adityamaurya5" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="icon">💼</div>
          <div className="info">
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/adityamaurya5</p>
          </div>
        </a>
        <a href="https://github.com/Aditya51002" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="icon">💻</div>
          <div className="info">
            <h3>GitHub</h3>
            <p>github.com/Aditya51002</p>
          </div>
        </a>
      </div>
      <style>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          padding: 25px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 30px rgba(0,0,0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }
        .icon {
          font-size: 2.5rem;
          margin-right: 25px;
        }
        .info h3 {
          font-size: 1.2rem;
          color: var(--accent-light);
          margin-bottom: 5px;
        }
        .info p {
          font-size: 1.1rem;
          color: #cccccc;
          word-break: break-all;
        }
      `}</style>
    </div>
  );
};
export default Contact;
