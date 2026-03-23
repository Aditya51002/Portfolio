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
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
          padding: 80px 20px;
        }

        .back-to-wheel-btn {
          position: fixed;
          bottom: 30px;
          left: 30px;
          padding: 12px 25px;
          background: #000;
          border: 3px solid #000;
          color: #fff;
          font-family: 'Bangers', cursive;
          font-size: 1.25rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
          z-index: 1000;
          box-shadow: 6px 6px 0 var(--accent);
          text-transform: uppercase;
        }

        .back-to-wheel-btn:hover {
          transform: translate(-3px, -3px);
          box-shadow: 10px 10px 0 var(--accent);
          background: var(--accent);
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Layout;
