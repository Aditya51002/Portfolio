import { useState } from 'react'
import './ProjectWheel.css'

const TWO_PI = Math.PI * 2
const CX = 220, CY = 220, R_OUT = 180, R_IN = 80

function segPath(startRad, endRad) {
  const x1 = CX + R_OUT * Math.cos(startRad), y1 = CY + R_OUT * Math.sin(startRad)
  const x2 = CX + R_OUT * Math.cos(endRad),   y2 = CY + R_OUT * Math.sin(endRad)
  const x3 = CX + R_IN  * Math.cos(endRad),   y3 = CY + R_IN  * Math.sin(endRad)
  const x4 = CX + R_IN  * Math.cos(startRad), y4 = CY + R_IN  * Math.sin(startRad)
  const large = (endRad - startRad) > Math.PI ? 1 : 0
  return `M ${x1} ${y1} A ${R_OUT} ${R_OUT} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${R_IN} ${R_IN} 0 ${large} 0 ${x4} ${y4} Z`
}

const COLORS = [
  '#00f5ff','#a855f7','#f59e0b','#10b981','#ef4444',
  '#ec4899','#3b82f6','#84cc16','#f97316','#8b5cf6',
]

export default function ProjectWheel({ projects, onSelect }) {
  const [hovered, setHovered] = useState(null)
  const count = projects.length
  const angle = TWO_PI / count

  return (
    <div className="pw-wrapper">
      <div className="pw-title">⬇ Choose a Project</div>
      <svg className="pw-svg" viewBox="0 0 440 440">
        <defs>
          <filter id="pw-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {projects.map((proj, i) => {
          const start  = i * angle - Math.PI / 2
          const end    = start + angle - 0.04
          const midRad = start + angle / 2
          const lx     = CX + ((R_IN + R_OUT) / 2) * Math.cos(midRad)
          const ly     = CY + ((R_IN + R_OUT) / 2) * Math.sin(midRad)
          const color  = COLORS[i % COLORS.length]
          const active = hovered === i

          return (
            <g
              key={proj.id}
              className="pw-seg"
              onClick={() => onSelect(proj.id)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              filter={active ? 'url(#pw-glow)' : undefined}
              style={{ cursor: 'pointer' }}
            >
              <path
                d={segPath(start, end)}
                fill={color}
                opacity={active ? 1 : 0.55}
                stroke={color}
                strokeWidth={active ? 2 : 0.5}
              />
              <text
                x={lx} y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fill="#fff"
                fontWeight="700"
                style={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                {proj.name.length > 12 ? proj.name.slice(0, 11) + '…' : proj.name}
              </text>
            </g>
          )
        })}

        {/* Center hub */}
        <circle cx={CX} cy={CY} r={R_IN - 4} fill="#0f172a" stroke="#00f5ff" strokeWidth="2" />
        <text x={CX} y={CY - 6} textAnchor="middle" fontSize="20" fill="#00f5ff">🚀</text>
        <text x={CX} y={CY + 14} textAnchor="middle" fontSize="9" fill="rgba(0,245,255,0.6)" letterSpacing="2" fontFamily="monospace">PROJECTS</text>
      </svg>
    </div>
  )
}
