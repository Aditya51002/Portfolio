import './SectionCard.css'

export default function SectionCard({ id, children, accentColor = '#00f5ff' }) {
  return (
    <section
      id={id}
      className="section-card"
      style={{ '--accent': accentColor }}
    >
      <div className="section-card-inner">
        {children}
      </div>
    </section>
  )
}
