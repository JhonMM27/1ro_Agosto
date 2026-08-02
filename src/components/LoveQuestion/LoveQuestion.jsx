import { useState } from 'react'
import FloatingHearts from '../common/FloatingHearts'
import SectionTitle from '../common/SectionTitle'

const ANSWER_KEY = 'our-story-answer'

export default function LoveQuestion() {
  const [opened, setOpened] = useState(() => Boolean(localStorage.getItem(ANSWER_KEY)))
  const [answered, setAnswered] = useState(() => Boolean(localStorage.getItem(ANSWER_KEY)))
  const [celebrating, setCelebrating] = useState(false)

  const answer = () => {
    localStorage.setItem(ANSWER_KEY, 'yes')
    setAnswered(true)
    setCelebrating(true)
    window.setTimeout(() => setCelebrating(false), 4200)
  }

  return <section className="section question-section">
    <FloatingHearts active={celebrating} />
    <div className="shell question-inner">
      <SectionTitle eyebrow="Antes de continuar" title="Tengo algo que preguntarte..." />
      <div className={`envelope-scene ${opened ? 'is-open' : ''} ${answered ? 'is-answered' : ''}`}>
        <button className="envelope" type="button" onClick={() => setOpened(true)} aria-label="Abrir el sobre" aria-expanded={opened} disabled={opened}>
          <span className="envelope-back" /><span className="envelope-letter"><i>Para ti</i><b>♡</b></span><span className="envelope-front" /><span className="envelope-flap" /><span className="wax-seal">♡</span>
        </button>
        {opened && <div className="question-card" aria-live="polite">
          {answered ? <><span className="question-flourish">♥</span><h3>Sabía que elegirías correctamente 😌❤️</h3><p>Entonces sigamos llenando nuestra historia de días que valga la pena recordar.</p></> : <><span className="question-flourish">Para nosotros</span><h3>¿Quieres seguir creando muchos recuerdos conmigo?</h3><div className="question-actions"><button className="button button--wine" type="button" onClick={answer}>Sí, siempre ❤️</button><button className="button button--outline" type="button" onClick={answer}>Claro que sí 🥰</button></div></>}
        </div>}
      </div>
    </div>
  </section>
}
