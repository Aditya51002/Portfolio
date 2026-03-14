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
  { name: 'About', path: '/about' },
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
  const innerRadius = 120;
  const numSegments = SECTIONS.length;
  const anglePerSegment = 360 / numSegments;

  // The first segment starts at the top-right. We adjust the starting angle so that
  // the sections align well. Let's start from 0 degrees (top).
  return (
    <div className="wheel-container">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {SECTIONS.map((section, index) => {
          const startAngle = index * anglePerSegment;
          const endAngle = startAngle + anglePerSegment;
          
          // Gap of 2 degrees between segments for visual separation
          const gap = 2;
          const pathD = describeArc(center, center, innerRadius, outerRadius, startAngle + gap, endAngle - gap);
          
          // Calculate center of the arc for text placement
          const midAngle = startAngle + (anglePerSegment / 2);
          const textRadius = innerRadius + (outerRadius - innerRadius) / 2;
          const textPos = polarToCartesian(center, center, textRadius, midAngle);
          
          const isHovered = hoveredIndex === index;

          return (
            <g 
              key={section.name} 
              className={`wheel-segment ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                navigate(section.path);
                if (onClose) onClose();
              }}
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              <path 
                d={pathD} 
                fill={isHovered ? "var(--accent-glow)" : "var(--glass-bg)"}
                stroke={isHovered ? "var(--accent-light)" : "var(--border-color)"}
                strokeWidth={isHovered ? "2" : "1"}
                style={{ transition: 'all 0.3s ease' }}
              />
              <text 
                x={textPos.x} 
                y={textPos.y} 
                textAnchor="middle" 
                alignmentBaseline="middle"
                fill={isHovered ? "#fff" : "var(--text-secondary)"}
                fontSize="14"
                fontWeight={isHovered ? "600" : "400"}
                style={{ transition: 'all 0.3s ease', pointerEvents: 'none', userSelect: 'none' }}
              >
                {section.name}
              </text>
            </g>
          );
        })}
        {/* Center decoration / Home Button */}
        <g 
          className="wheel-center"
          onMouseEnter={() => setHoveredCenter(true)}
          onMouseLeave={() => setHoveredCenter(false)}
          onClick={() => {
            navigate('/');
            if (onClose) onClose();
          }}
          style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
        >
          <circle 
            cx={center} 
            cy={center} 
            r={innerRadius - 15} 
            fill={hoveredCenter ? "var(--accent-glow)" : "var(--bg-primary)"} 
            stroke={hoveredCenter ? "var(--accent-light)" : "var(--border-color)"}
            strokeWidth={hoveredCenter ? "2" : "1"}
            style={{ transition: 'all 0.3s ease' }} 
          />
          <circle cx={center} cy={center} r={innerRadius - 22} fill="none" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="5,5" />
          <text 
            x={center} 
            y={center} 
            textAnchor="middle" 
            alignmentBaseline="middle"
            fill={hoveredCenter ? "#fff" : "var(--text-secondary)"}
            fontSize="16"
            fontWeight={hoveredCenter ? "600" : "500"}
            style={{ transition: 'all 0.3s ease', pointerEvents: 'none', userSelect: 'none' }}
          >
            Home
          </text>
        </g>
      </svg>

      <style>{`
        .wheel-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: drop-shadow(0 0 20px rgba(107, 33, 168, 0.2));
          animation: spinIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .wheel-segment {
          transform-origin: center;
        }

        .wheel-segment.hovered {
          transform: scale(1.05);
          filter: drop-shadow(0 0 10px var(--accent-glow));
        }

        @keyframes spinIn {
          from {
            transform: scale(0.8) rotate(-90deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default WheelDial;
