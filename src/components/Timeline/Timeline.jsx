import { memories } from '../../data/memories'
import SectionTitle from '../common/SectionTitle'
import TimelineItem from './TimelineItem'

export default function Timeline() {
  return <section className="section timeline-section" id="historia">
    <div className="shell">
      <SectionTitle eyebrow="Capítulo a capítulo" title="Nuestra historia" text="Algunos instantes se vuelven lugares a los que siempre queremos regresar." />
      <div className="timeline">{memories.map((memory, index) => <TimelineItem key={memory.id} memory={memory} index={index} />)}</div>
    </div>
  </section>
}
