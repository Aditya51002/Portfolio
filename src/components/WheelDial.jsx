import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

const describeArc = (x, y, innerRadius, outerRadius, startAngle, endAngle) => {
  const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
  const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
  
  const startInner = polarToCartesian(x, y, innerRadius, endAngle);
  const endInner = polarToCartesian(x, y, innerRadius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
    "Z"
  ].join(" ");

  return d;
};

const SECTIONS = [
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Current Focus', path: '/learning' },
];

const WheelDial = ({ onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredCenter, setHoveredCenter] = useState(false);
  const navigate = useNavigate();

  const size = 500;
  const center = size / 2;
  const outerRadius = 240;
  const innerRadius = 110;
  const numSegments = SECTIONS.length;
  const anglePerSegment = 360 / numSegments;

  return (
    <div className="wheel-container-comic">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <pattern id="halftone-wheel" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="rgba(0,0,0,0.1)" />
          </pattern>
        </defs>
        
        {SECTIONS.map((section, index) => {
          const startAngle = index * anglePerSegment;
          const endAngle = startAngle + anglePerSegment;
          const gap = 3;
          const pathD = describeArc(center, center, innerRadius, outerRadius, startAngle + gap, endAngle - gap);
          
          const midAngle = startAngle + (anglePerSegment / 2);
          const textRadius = innerRadius + (outerRadius - innerRadius) / 0.8; // Adjusted for better fit
          const textPos = polarToCartesian(center, center, (innerRadius + outerRadius) / 2, midAngle);
          
          const isHovered = hoveredIndex === index;

          return (
            <g 
              key={section.name} 
              className={`wheel-segment-comic ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                navigate(section.path);
                if (onClose) onClose();
              }}
            >
              <path 
                d={pathD} 
                fill={isHovered ? "var(--accent)" : "url(#halftone-wheel)"}
                stroke="#000"
                strokeWidth="4"
                className="segment-path"
              />
              <text 
                x={textPos.x} 
                y={textPos.y} 
                textAnchor="middle" 
                alignmentBaseline="middle"
                fill={isHovered ? "#fff" : "#000"}
                className="segment-text-comic"
                transform={`rotate(${midAngle + 90}, ${textPos.x}, ${textPos.y})`}
              >
                {section.name.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Center Panel */}
        <g 
          className="wheel-center-comic"
          onMouseEnter={() => setHoveredCenter(true)}
          onMouseLeave={() => setHoveredCenter(false)}
          onClick={() => {
            navigate('/');
            if (onClose) onClose();
          }}
        >
          <circle 
            cx={center} cy={center} r={innerRadius - 10} 
            fill="#fff" stroke="#000" strokeWidth="6" 
          />
          <circle cx={center} cy={center} r={innerRadius - 25} fill="none" stroke="#000" strokeWidth="2" strokeDasharray="8,4" />
          <text 
            x={center} y={center} 
            textAnchor="middle" alignmentBaseline="middle"
            fill="#000"
            className="center-text-comic"
          >
            HOME
          </text>
        </g>
      </svg>

      <style>{`
        .wheel-container-comic {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: popInComic 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .wheel-segment-comic {
          cursor: pointer;
          transition: transform 0.2s;
        }

        .wheel-segment-comic.hovered {
          transform: scale(1.03);
          z-index: 10;
        }

        .segment-path {
          transition: fill 0.2s;
        }

        .segment-text-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          pointer-events: none;
          letter-spacing: 1px;
        }

        .center-text-comic {
          font-family: 'Bangers', cursive;
          font-size: 2rem;
          pointer-events: none;
        }

        .wheel-center-comic:hover {
          transform: scale(1.1);
          cursor: pointer;
        }

        @keyframes popInComic {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default WheelDial;
