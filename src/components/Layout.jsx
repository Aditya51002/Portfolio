import Navbar from './Navbar';
import AnimatedBackground from './AnimatedBackground';
import { useLocation, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // Show back button on all non-landing and non-resume pages (e.g., /about, /projects)
  const showBack = location.pathname !== '/' && location.pathname !== '/resume';

  return (
    <div className="layout">
      <AnimatedBackground />
      <Navbar />
      <main className="main-content">
        {showBack && (
          <button 
            className="back-to-wheel-btn"
            onClick={() => navigate('/', { state: { showWheel: true } })}
          >
            ← Back to Menu
          </button>
        )}
        {children}
      </main>

      <style>{`
        .layout {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .main-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .back-to-wheel-btn {
          position: absolute;
          top: 30px;
          left: 60px;
          padding: 10px 20px;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: 30px;
          color: #fff;
          font-family: inherit;
          font-size: 1.05rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          z-index: 50;
        }

        .back-to-wheel-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 0 15px var(--accent-glow);
        }
      `}</style>
    </div>
  );
};

export default Layout;
