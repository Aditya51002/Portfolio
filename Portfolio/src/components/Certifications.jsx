import SectionCard from './SectionCard'
import './Certifications.css'

const CERTS = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'Jan 2025',
    id: 'CERT-12345',
    color: '#ef4444',
    icon: '🏅',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Nov 2024',
    id: 'AWS-CLF-90210',
    color: '#f59e0b',
    icon: '☁️',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM (Coursera)',
    date: 'Aug 2024',
    id: 'IBM-PY-67890',
    color: '#3b82f6',
    icon: '🐍',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'May 2024',
    id: 'FCC-RWD-54321',
    color: '#10b981',
    icon: '📱',
  },
]

export default function Certifications() {
  return (
    <SectionCard id="certifications" accentColor="#ef4444">
      <p className="section-title" style={{ color: '#ef4444' }}>Certifications</p>
      <p className="section-subtitle">Verified Credentials</p>
      <div className="section-divider" style={{ background: '#ef4444' }} />

      <div className="certs-grid">
        {CERTS.map((cert, i) => (
          <div key={i} className="cert-card" style={{ '--cert-color': cert.color }}>
            <div className="cert-badge">{cert.icon}</div>
            <div className="cert-content">
              <h3 className="cert-title" style={{ color: cert.color }}>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-footer">
                <span className="cert-date">{cert.date}</span>
                <span className="cert-id">ID: {cert.id}</span>
              </div>
            </div>
            <div className="cert-ribbon" style={{ background: cert.color }} />
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
