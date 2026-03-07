import SectionCard from './SectionCard'
import './Education.css'

const EDU = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Your University Name',
    year: '2021 – 2025',
    grade: 'CGPA: 7.8 / 10',
    icon: '🎓',
    color: '#10b981',
  },
  {
    degree: 'Higher Secondary (XII)',
    field: 'Science — Physics, Chemistry, Maths',
    institution: 'Your School Name',
    year: '2019 – 2021',
    grade: 'Percentage: 84%',
    icon: '🏫',
    color: '#3b82f6',
  },
  {
    degree: 'Secondary (X)',
    field: 'CBSE / State Board',
    institution: 'Your School Name',
    year: '2019',
    grade: 'Percentage: 88%',
    icon: '📚',
    color: '#a855f7',
  },
]

export default function Education() {
  return (
    <SectionCard id="education" accentColor="#10b981">
      <p className="section-title" style={{ color: '#10b981' }}>Education</p>
      <p className="section-subtitle">Academic Journey</p>
      <div className="section-divider" style={{ background: '#10b981' }} />

      <div className="edu-timeline">
        {EDU.map((e, i) => (
          <div key={i} className="edu-item">
            <div className="edu-icon-col">
              <div className="edu-icon" style={{ borderColor: e.color, boxShadow: `0 0 14px ${e.color}55` }}>
                {e.icon}
              </div>
              {i < EDU.length - 1 && <div className="edu-line" />}
            </div>
            <div className="edu-content">
              <div className="edu-year" style={{ color: e.color }}>{e.year}</div>
              <h3 className="edu-degree" style={{ color: e.color }}>{e.degree}</h3>
              <p className="edu-field">{e.field}</p>
              <p className="edu-institution">{e.institution}</p>
              <span className="edu-grade">{e.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
