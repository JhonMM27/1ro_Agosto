import { reasons } from '../../data/reasons'
import SectionTitle from '../common/SectionTitle'
import ReasonCard from './ReasonCard'

export default function Reasons() {
  return <section className="section reasons-section">
    <div className="shell">
      <SectionTitle eyebrow="Una lista que podría ser infinita" title="Cosas que amo de ti" text="No son todas, pero sí algunas de las razones que me hacen elegirte cada día." />
      <div className="reasons-grid">{reasons.map((reason, index) => <ReasonCard key={reason.id} reason={reason} index={index} />)}</div>
    </div>
  </section>
}
