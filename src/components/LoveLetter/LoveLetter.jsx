import { coupleConfig } from '../../config/couple'
import AnimatedContent from '../common/AnimatedContent'

export default function LoveLetter() {
  return <section className="section letter-section">
    <div className="shell letter-shell">
      <AnimatedContent className="letter-paper">
        <span className="letter-date">1 de agosto de 2026</span>
        <span className="letter-monogram">A</span>
        <h2>Mi amor:</h2>
        <p>Tal vez una página no sea suficiente para explicar todo lo que significas para mí, pero quería intentar guardar aquí una pequeña parte de lo que siento.</p>
        <p>Gracias por cada conversación, cada sonrisa, cada momento y cada recuerdo que hemos construido. Me gusta saber que, entre tantas personas y tantos caminos, la vida permitió que coincidiéramos.</p>
        <p>Espero que esta sea solamente una pequeña parte de todo lo que todavía nos queda por vivir.</p>
        <footer><span>Con mucho amor,</span><strong>{coupleConfig.boyfriendName}</strong></footer>
      </AnimatedContent>
    </div>
  </section>
}
