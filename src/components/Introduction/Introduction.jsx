import AnimatedContent from '../common/AnimatedContent'

export default function Introduction() {
  return <section className="section introduction" id="introduccion">
    <div className="shell introduction-grid">
      <AnimatedContent className="intro-copy">
        <span className="eyebrow">Una pequeña sorpresa</span>
        <h2>Esto es para ti</h2>
        <p>Hoy no quería darte solamente un mensaje. Quería crear un pequeño lugar donde pudiera guardar algunas de las razones por las que eres tan especial para mí.</p>
        <p>Un rincón para regresar a esos días que nos hicieron sonreír y para imaginar todos los que todavía nos faltan por vivir.</p>
        <span className="signature-mark">Con todo mi amor ♡</span>
      </AnimatedContent>
      <AnimatedContent className="polaroid-wrap" delay={150}>
        <figure className="polaroid">
          <img src={`${import.meta.env.BASE_URL}images/gallery/recuerdo-01.jpeg`} alt="Retrato especial de Rosa con su uniforme de Enfermería" loading="lazy" />
          <figcaption>Rosa, la dueña de mis días bonitos</figcaption>
        </figure>
        <span className="tape" aria-hidden="true" />
      </AnimatedContent>
    </div>
  </section>
}
