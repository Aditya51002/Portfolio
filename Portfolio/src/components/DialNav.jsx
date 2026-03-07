import { useState } from 'react'
import './DialNav.css'

const SECTIONS = [
  { id: 'intro',    label: 'Intro',         icon: '👤', color: '#00f5ff' },
  { id: 'skills',   label: 'Skills',         icon: '⚡', color: '#a855f7' },
  { id: 'projects', label: 'Projects',       icon: '🚀', color: '#f59e0b' },
  { id: 'education',label: 'Education',      icon: '🎓', color: '#10b981' },
  { id: 'certifications', label: 'Certs',   icon: '🏆', color: '#ef4444' },
  { id: 'contact',  label: 'Contact',        icon: '📬', color: '#ec4899' },
]

// Total dial spans 180° (a semicircle), so each segment is 30°
const TOTAL_ANGLE = 180
const START_ANGLE = 180  // leftmost point of the semicircle
const SEG_ANGLE   = TOTAL_ANGLE / SECTIONS.length  // 30°
const R_OUTER     = 260
const R_INNER     = 120
const CX          = 300
const CY          = 290   // center placed at bottom of SVG viewport

function toRad(deg) { return (deg * Math.PI) / 180 }

function segmentPath(startDeg, endDeg) {
  const r1 = R_INNER, r2 = R_OUTER
  const s = toRad(startDeg), e = toRad(endDeg)
  const x1 = CX + r2 * Math.cos(s), y1 = CY + r2 * Math.sin(s)
  const x2 = CX + r2 * Math.cos(e), y2 = CY + r2 * Math.sin(e)
  const x3 = CX + r1 * Math.cos(e), y3 = CY + r1 * Math.sin(e)
  const x4 = CX + r1 * Math.cos(s), y4 = CY + r1 * Math.sin(s)
  return `M ${x1} ${y1} A ${r2} ${r2} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${r1} ${r1} 0 0 0 ${x4} ${y4} Z`
}

function labelPos(startDeg, endDeg) {
  const mid = toRad((startDeg + endDeg) / 2)
  const r   = (R_INNER + R_OUTER) / 2
  return { x: CX + r * Math.cos(mid), y: CY + r * Math.sin(mid) }
}

export default function DialNav({ onSelect, activeSection }) {
  const [hovered, setHovered] = useState(null)

  const handleClick = (sec) => {
    onSelect(sec.id)
    const el = document.getElementById(sec.id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="dial-wrapper">
      <div className="dial-glow-ring" />
      <svg
        className="dial-svg"
        viewBox={`0 0 600 300`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {SECTIONS.map((sec) => (
            <radialGradient key={sec.id} id={`grad-${sec.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={sec.color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={sec.color} stopOpacity="0.35" />
            </radialGradient>
          ))}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Tick marks on outer edge */}
        {Array.from({ length: 19 }, (_, i) => {
          const deg = START_ANGLE + (i * TOTAL_ANGLE) / 18
          const rad = toRad(deg)
          const x1  = CX + (R_OUTER + 6) * Math.cos(rad)
          const y1  = CY + (R_OUTER + 6) * Math.sin(rad)
          const x2  = CX + (R_OUTER + 14) * Math.cos(rad)
          const y2  = CY + (R_OUTER + 14) * Math.sin(rad)
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={i % 3 === 0 ? '#00f5ff' : '#334155'}
              strokeWidth={i % 3 === 0 ? 2 : 1}
            />
          )
        })}

        {/* Segments */}
        {SECTIONS.map((sec, i) => {
          const startDeg = START_ANGLE + i * SEG_ANGLE + 1
          const endDeg   = START_ANGLE + (i + 1) * SEG_ANGLE - 1
          const lp       = labelPos(startDeg, endDeg)
          const isActive = activeSection === sec.id
          const isHovered= hovered === sec.id

          return (
            <g
              key={sec.id}
              className={`dial-seg ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
              onClick={() => handleClick(sec)}
              onMouseEnter={() => setHovered(sec.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer' }}
              filter={isActive || isHovered ? 'url(#glow)' : undefined}
            >
              <path
                d={segmentPath(startDeg, endDeg)}
                fill={`url(#grad-${sec.id})`}
                stroke={sec.color}
                strokeWidth={isActive || isHovered ? 2 : 0.8}
                opacity={isActive || isHovered ? 1 : 0.65}
              />
              {/* Icon */}
              <text
                x={lp.x}
                y={lp.y - 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="18"
                style={{ userSelect: 'none' }}
              >
                {sec.icon}
              </text>
              {/* Label */}
              <text
                x={lp.x}
                y={lp.y + 12}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fill={isActive || isHovered ? '#fff' : sec.color}
                fontWeight="700"
                letterSpacing="1"
                style={{ userSelect: 'none', textTransform: 'uppercase' }}
              >
                {sec.label}
              </text>
            </g>
          )
        })}

        {/* Needle indicator */}
        {(() => {
          const idx = SECTIONS.findIndex(s => s.id === activeSection)
          const deg = idx >= 0
            ? START_ANGLE + (idx + 0.5) * SEG_ANGLE
            : START_ANGLE + TOTAL_ANGLE / 2
          const rad   = toRad(deg)
          const tipX  = CX + (R_INNER - 15) * Math.cos(rad)
          const tipY  = CY + (R_INNER - 15) * Math.sin(rad)
          const baseR = 10
          const b1x   = CX + baseR * Math.cos(rad + Math.PI / 2)
          const b1y   = CY + baseR * Math.sin(rad + Math.PI / 2)
          const b2x   = CX + baseR * Math.cos(rad - Math.PI / 2)
          const b2y   = CY + baseR * Math.sin(rad - Math.PI / 2)
          return (
            <g filter="url(#glow)">
              <polygon
                points={`${tipX},${tipY} ${b1x},${b1y} ${b2x},${b2y}`}
                fill="#00f5ff"
                opacity="0.9"
              />
              <circle cx={CX} cy={CY} r="12" fill="#0f172a" stroke="#00f5ff" strokeWidth="2" />
              <circle cx={CX} cy={CY} r="5"  fill="#00f5ff" />
            </g>
          )
        })()}
      </svg>

      {/* Bottom arc label strip */}
      <div className="dial-bottom-label">
        {SECTIONS.find(s => s.id === activeSection)?.label ?? 'Select a Section'}
      </div>
    </div>
  )
}
