import { coupleConfig } from '../../config/couple'
import { useRelationshipCounter } from '../../hooks/useRelationshipCounter'
import AnimatedContent from '../common/AnimatedContent'

export default function FinalSection() {
  const time = useRelationshipCounter(coupleConfig.relationshipStartDate)
  return <footer className="final-section">
    <img src={`${import.meta.env.BASE_URL}images/final/especial.jpeg`} alt="Jhon y Rosa sonriendo juntos en un recuerdo especial" loading="lazy" />
    <div className="final-overlay" />
    <AnimatedContent className="final-content shell">
      <span className="eyebrow">Y lo mejor de todo</span>
      <h2>Esta historia recién está comenzando</h2>
      <p className="counter-label">Compartiendo el camino desde el {new Date(`${coupleConfig.relationshipStartDate}T00:00:00`).toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <div className="relationship-counter" aria-label={`${time.years} años, ${time.months} meses y ${time.days} días juntos`}>
        <div><strong>{time.years}</strong><span>años</span></div><i /><div><strong>{time.months}</strong><span>meses</span></div><i /><div><strong>{time.days}</strong><span>días</span></div>
      </div>
      <button className="button button--light" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Volver al comienzo ↑</button>
      <small>Hecho con amor especialmente para {coupleConfig.girlfriendName}</small>
    </AnimatedContent>
  </footer>
}
