import SectionCard from './SectionCard'
import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: '#00f5ff',
    skills: [
      { name: 'React',       level: 80 },
      { name: 'HTML/CSS',    level: 90 },
      { name: 'JavaScript',  level: 82 },
      { name: 'Tailwind',    level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#a855f7',
    skills: [
      { name: 'Node.js',     level: 70 },
      { name: 'Express',     level: 65 },
      { name: 'Python',      level: 72 },
      { name: 'REST APIs',   level: 78 },
    ],
  },
  {
    category: 'Database',
    color: '#10b981',
    skills: [
      { name: 'MongoDB',     level: 68 },
      { name: 'MySQL',       level: 72 },
      { name: 'Firebase',    level: 60 },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: '#f59e0b',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code',      level: 90 },
      { name: 'Docker',       level: 45 },
      { name: 'Linux',        level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <SectionCard id="skills" accentColor="#a855f7">
      <p className="section-title" style={{ color: '#a855f7' }}>Skills</p>
      <p className="section-subtitle">Tech Stack &amp; Proficiency</p>
      <div className="section-divider" style={{ background: '#a855f7' }} />

      <div className="skills-grid">
        {SKILL_GROUPS.map(group => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-group-title" style={{ color: group.color }}>{group.category}</h3>
            {group.skills.map(skill => (
              <div key={skill.name} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%`, background: group.color }}
                  />
                </div>
                <span className="skill-pct" style={{ color: group.color }}>{skill.level}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
