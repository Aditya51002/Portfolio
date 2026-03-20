import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Dynamic blurred orbs */}
      <motion.div 
        className="orb orb-1"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="orb orb-2"
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, -100, -50, 50, 0],
          scale: [1, 0.9, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="orb orb-3"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Cyber Grid Lines */}
      <div className="cyber-grid" />


      <style>{`
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          background-color: var(--bg-primary); /* Deep dark blue/black base */
          overflow: hidden;
          pointer-events: none;
        }

        /* Ambient glowing orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.45;
          mix-blend-mode: screen;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 60%);
          top: -200px;
          left: -100px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 60%);
          bottom: -150px;
          right: -100px;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 60%);
          top: 30%;
          left: 40%;
          filter: blur(100px);
          opacity: 0.3;
        }

        /* Premium Cyber Grid Overlay */
        .cyber-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px) translateZ(-200px); }
        }

      `}</style>
    </div>
  );
};

export default AnimatedBackground;
