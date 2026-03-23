import React from 'react';
import { motion } from 'framer-motion';

const SFX_WORDS = ["POW!", "WHAM!", "CHOP!", "SLASH!", "SLAM!", "BOOM!", "DOKI", "FLASH!"];

const AnimatedBackground = () => {
  return (
    <div className="manga-background">
      {/* Layer 1: Halftone Dot Overlay */}
      <div className="halftone-overlay" />

      {/* Layer 2: Speed Lines (Subtle) */}
      <div className="speed-lines-container">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`speed-${i}`}
            className="speed-line"
            style={{
              top: `${Math.random() * 100}%`,
              left: '-10%',
              width: '120%',
              transform: `rotate(${Math.random() * 5 - 2.5}deg)`
            }}
            animate={{
              x: [0, 50, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Layer 3: Floating SFX */}
      <div className="floating-sfx-container">
        {SFX_WORDS.map((word, i) => (
          <motion.div
            key={`sfx-${i}`}
            className="floating-sfx"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%", 
              opacity: 0,
              rotate: Math.random() * 40 - 20 
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.15, 0.15, 0],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              delay: i * 4,
              ease: "linear"
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      <style>{`
        .manga-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          background-color: #fcfaf2; /* Aged Paper Color */
          overflow: hidden;
          pointer-events: none;
        }

        .halftone-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1.5px, transparent 1.5px);
          background-size: 20px 20px;
          opacity: 0.8;
        }

        .speed-lines-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .speed-line {
          position: absolute;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
        }

        .floating-sfx-container {
          position: absolute;
          inset: 0;
          filter: blur(0.5px);
        }

        .floating-sfx {
          position: absolute;
          font-family: 'Bangers', cursive;
          font-size: 6rem;
          color: #000;
          user-select: none;
          white-space: nowrap;
          -webkit-text-stroke: 1px rgba(0,0,0,0.1);
          color: transparent;
          opacity: 0;
        }

        /* Subtle page texture */
        .manga-background::after {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("https://www.transparenttextures.com/patterns/clean-gray-paper.png");
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
